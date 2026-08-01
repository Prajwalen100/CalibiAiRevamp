/**
 * Validates every Mermaid definition in src/content/case-studies.ts by parsing
 * it with the real Mermaid engine in a jsdom DOM.
 *
 * Mermaid syntax errors are silent at build time (they only surface in the
 * browser at render time), so this guards against shipping a broken diagram.
 *
 * Usage: node scripts/verify-mermaid.mjs
 */
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const source = readFileSync(new URL("../src/content/case-studies.ts", import.meta.url), "utf8");

// Pull each `flowchart: \`...\`` template literal out of the content module.
const charts = [...source.matchAll(/flowchart:\s*`([\s\S]*?)`,/g)].map((m) => m[1]);
const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

if (charts.length === 0) {
  console.error("No mermaid charts found — did the content format change?");
  process.exit(1);
}

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  pretendToBeVisual: true,
});

globalThis.window = dom.window;
globalThis.document = dom.window.document;
// Node 22 defines `navigator` as a getter-only global, so it must be redefined.
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
  writable: true,
});
globalThis.SVGElement = dom.window.SVGElement;
globalThis.Element = dom.window.Element;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.DOMPurify = undefined;

// jsdom has no layout engine; mermaid measures text via getBBox/getComputedTextLength.
dom.window.SVGElement.prototype.getBBox = function getBBox() {
  const text = this.textContent ?? "";
  return { x: 0, y: 0, width: Math.max(text.length * 7, 20), height: 18 };
};
dom.window.SVGElement.prototype.getComputedTextLength = function getComputedTextLength() {
  return Math.max((this.textContent ?? "").length * 7, 20);
};

const { default: mermaid } = await import("mermaid");

mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "base" });

let failures = 0;

for (const [i, chart] of charts.entries()) {
  const label = slugs[i] ?? `chart-${i + 1}`;
  try {
    // parse() runs the grammar without needing layout — this is what catches
    // syntax errors such as an unquoted "&" inside a node label.
    await mermaid.parse(chart);
    // Node ids are the tokens immediately preceding a shape delimiter, anywhere
    // on the line (e.g. both A and B in `A[Start] --> B{Check}`).
    const nodes = new Set([...chart.matchAll(/([A-Za-z0-9_]+)\s*[[{(]/g)].map((m) => m[1]));
    const edges = [...chart.matchAll(/-->/g)].length;
    console.log(`  PASS  ${label} — ${nodes.size} nodes, ${edges} edges`);
  } catch (error) {
    failures += 1;
    console.error(`  FAIL  ${label}`);
    console.error(`        ${error?.message ?? error}`);
  }
}

console.log(`\n${charts.length - failures}/${charts.length} diagrams valid`);
process.exit(failures === 0 ? 0 : 1);
