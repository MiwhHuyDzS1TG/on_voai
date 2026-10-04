import katex from "katex";

export function MathBlock({ latex, inline = false }: { latex: string; inline?: boolean }) {
  return (
    <span
      className={inline ? "math-inline" : "math-block"}
      dangerouslySetInnerHTML={{ __html: katex.renderToString(latex, { throwOnError: false, displayMode: !inline }) }}
    />
  );
}
