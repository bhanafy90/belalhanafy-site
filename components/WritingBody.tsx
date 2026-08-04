import type { WritingBlock } from "@/content/writing";

export function WritingBody({ blocks }: { blocks: WritingBlock[] }) {
  return (
    <div className="mt-10 max-w-2xl space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="leading-relaxed text-muted">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="pt-4 text-2xl leading-tight sm:text-3xl">
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item} className="leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <div
                key={i}
                className="rounded-lg border border-line bg-surface/50 p-5 text-sm leading-relaxed text-muted"
              >
                {block.text}
              </div>
            );
        }
      })}
    </div>
  );
}
