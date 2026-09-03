import type { ExperienceItem } from "../data/site";

export default function Timeline({
  title,
  annotation,
  items,
}: {
  title: string;
  annotation: string;
  items: ExperienceItem[];
}) {
  return (
    <section id="experience" className="container pt-24 sm:pt-32">
      <div className="mb-10 flex items-baseline justify-between border-b border-hairline pb-3">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
        <span className="text-sm text-ink-faint">{annotation}</span>
      </div>

      <ol className="relative ml-1 border-l border-hairline sm:ml-2">
        {items.map((item, i) => (
          <li key={`${item.company}-${i}`} className="relative pb-12 pl-6 last:pb-0 sm:pl-8">
            <span
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent ${
                item.current ? "bg-accent" : "bg-bg"
              }`}
              aria-hidden="true"
            >
              {item.current ? (
                <span className="absolute inset-0 rounded-full bg-accent" />
              ) : null}
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-2xl tracking-tight text-ink">
                {item.company}
              </h3>
              <span className="flex shrink-0 items-center gap-2 text-sm text-ink-faint">
                {item.current && (
                  <span className="rounded-full border border-accent/60 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    Current
                  </span>
                )}
                {item.period.join(" — ")}
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-accent">
              {item.position}
            </p>

            {item.summary ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {item.summary}
              </p>
            ) : null}

            {item.highlights.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex max-w-2xl gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                      aria-hidden="true"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
