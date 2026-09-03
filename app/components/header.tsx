"use client";

import { useState } from "react";
import type { NavLink } from "../data/site";

export default function HeaderNav({ name, links }: { name: string; links: NavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-bg/85 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          {name}
        </a>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:text-ink lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
        <nav
          aria-label="Primary"
          className={`items-center gap-6 ${
            menuOpen
              ? "absolute right-0 top-16 flex w-full flex-col border-b border-hairline bg-bg/95 px-6 py-4 backdrop-blur-sm sm:gap-8"
              : "hidden lg:flex lg:gap-8"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
