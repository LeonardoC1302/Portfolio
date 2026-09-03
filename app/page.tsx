import data from "./data/site";
import Timeline from "./components/timeline";
import HeaderNav from "./components/header";

const EMAIL = data.contact.email;
const LINKEDIN = data.contact.linkedin;

function projectCols(index: number, count: number) {
  const isLast = index === count - 1 && count > 1;
  const smOrphan = count % 2 === 0;
  const lgOrphan = (count + 1) % 3 === 1;
  if (index === 0) return "sm:col-span-2 lg:col-span-2";
  if (isLast) {
    const sm = smOrphan ? " sm:col-span-2" : "";
    const lg = lgOrphan ? " lg:col-span-3" : "";
    return `sm:col-span-1${sm}${lg}`;
  }
  return "sm:col-span-1";
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      {/* ============ HEADER ============ */}
      <HeaderNav name={data.meta.name} links={data.nav.links} />

      <main id="top" className="flex-1">
        {/* ============ HERO ============ */}
        <section className="container pt-20 sm:pt-28 lg:pt-36">
          <p className="mb-6 text-sm font-medium tracking-wide text-accent">
            {data.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
            {data.hero.titleLine1}
            <br />
            <span className="text-ink-muted">{data.hero.titleLine2}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            {data.hero.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg-deep"
            >
              {data.hero.emailCta}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {data.hero.linkedinLabel}
              <span aria-hidden="true" className="text-xs">↗</span>
            </a>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <Timeline
          title={data.experience.title}
          annotation={data.experience.annotation}
          items={data.experience.items}
        />

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="container pt-24 sm:pt-32">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
            <h2 className="shrink-0 font-serif text-2xl tracking-tight sm:text-3xl lg:text-4xl">
              {data.projects.title}
            </h2>
            <span className="shrink-0 text-sm text-ink-faint">
              {data.projects.annotation}
            </span>
          </div>

          <div className="mb-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.projects.items.map((p, i) => {
              const cols = projectCols(i, data.projects.items.length);
              return (
                <article
                  key={p.name}
                  className={`project group flex flex-col rounded-xl p-6 sm:p-7 ${cols}`}
                >
                  <span className="project-index mb-8 text-sm font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                  >
                    {data.projects.linkLabel}
                    <span aria-hidden="true" className="text-xs">↗</span>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" className="container pt-24 sm:pt-32">
          <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
            <h2 className="shrink-0 font-serif text-2xl tracking-tight sm:text-3xl lg:text-4xl">
              {data.skills.title}
            </h2>
            <span className="shrink-0 text-sm text-ink-faint">
              {data.skills.annotation}
            </span>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {data.skills.disciplines.map((d, i) => {
              const isLast = i === data.skills.disciplines.length - 1;
              const span =
                data.skills.disciplines.length % 2 === 1 && isLast
                  ? "sm:col-span-2"
                  : "";
              return (
                <div key={d.name} className={span}>
                  <div className="mb-5 flex items-baseline justify-between border-b border-hairline pb-2">
                    <h3 className="text-base font-semibold text-ink">
                      {d.name}
                    </h3>
                    <span className="text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul
                    className={
                      span === "sm:col-span-2"
                        ? "grid gap-x-10 gap-y-3 sm:grid-cols-2"
                        : "space-y-3"
                    }
                  >
                    {d.slots.map((s) => (
                      <li
                        key={s}
                        className="flex items-center justify-between gap-4 text-sm text-ink-muted"
                      >
                        <span>{s}</span>
                        <span className="text-xs text-ink-faint">—</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="container pt-24 sm:pt-32">
          <div className="rounded-2xl border border-hairline bg-surface px-6 py-12 sm:px-12 sm:py-16">
            <p className="mb-4 text-sm font-medium text-accent">
              {data.contact.eyebrow}
            </p>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {data.contact.titleLine1}
              <br />
              {data.contact.titleLine2}
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-8">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg-deep"
              >
                {data.hero.emailCta}
                <span className="shrink-0" aria-hidden="true">→</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {data.contact.linkedinLabel}
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="mt-24">
        <div className="container flex flex-col gap-2 border-t border-hairline py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>{data.footer.copyright}</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {data.footer.statusLabel}
          </span>
        </div>
      </footer>
    </div>
  );
}
