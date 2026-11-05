import { visit } from "unist-util-visit";

/**
 * Remark plugin that runs after `remark-math` to:
 * 1. Convert `inlineMath` ($...$) and `math` ($$...$$) AST nodes into
 *    clean HTML containers (<span class="math-inline notranslate"> and
 *    <div class="math-display notranslate">) so Shiki never touches them
 *    and Markdown never mangles _, *, \\, or {}.
 * 2. Convert ```plot code blocks into interactive 2D/3D chart containers
 *    (<div class="plotly-chart notranslate" data-plot="...">).
 */
export default function remarkKexueMath() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "inlineMath") {
        node.data = {
          hName: "span",
          hProperties: {
            className: ["math-inline", "notranslate"],
            translate: "no",
          },
          hChildren: [{ type: "text", value: `\\(${node.value}\\)` }],
        };
      } else if (node.type === "math") {
        const raw = (node.value || "").trim();
        const isStandaloneEnv =
          /^\\begin\{(equation|align|gather|multline|flalign)\*?\}/i.test(raw);
        const wrapped = isStandaloneEnv ? raw : `\\[\n${raw}\n\\]`;

        node.data = {
          hName: "div",
          hProperties: {
            className: ["math-display", "notranslate"],
            translate: "no",
          },
          hChildren: [{ type: "text", value: wrapped }],
        };
      } else if (node.type === "code" && node.lang === "plot") {
        node.data = {
          hName: "div",
          hProperties: {
            className: ["plotly-chart", "notranslate"],
            translate: "no",
            "data-plot": node.value || "{}",
          },
          hChildren: [],
        };
      }
    });
  };
}
