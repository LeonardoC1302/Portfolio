---
name: Warm Refined Portfolio
description: A calm, minimal dark portfolio for a fullstack engineer — warm off-black, one amber accent, refined serif over clean sans.
colors:
  bg: "#141310"
  bg-deep: "#0f0e0c"
  surface: "#1b1a16"
  surface-raised: "#201e1a"
  ink: "#ece8e1"
  ink-soft: "#c8c3ba"
  ink-muted: "#9a948a"
  ink-faint: "#8a857b"
  accent: "#d9a462"
  accent-strong: "#e8bd83"
  accent-soft: "rgba(217, 164, 98, 0.45)"
  hairline: "rgba(236, 232, 225, 0.09)"
typography:
  display:
    fontFamily: "Newsreader, serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.01em"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
  container: "68rem"
  pad-x: "1.5rem"
  pad-x-lg: "2.5rem"
rounded:
  card: "0.75rem"
  pill: "9999px"
  scrollbar-thumb: "6px"
---

# Design System: Warm Refined Portfolio

## Overview

**Creative North Star: "The Quiet Workbench"**

A calm, minimal, dark portfolio for a fullstack engineer. The page is a warm near-black field with generous whitespace, a single understated amber accent, and a typographic orderliness that lets the work speak. It is deliberately anti-chrome: no neon, no glass overlays, no technical costume. Instead it relies on warm tonal depth, hairline rules, one refined serif used for the voice, and a clean geometric sans for everything else.

The design reads premium rather than loud. Light is absent; warmth comes from the slight brown cast of the near-black ground and the amber accent. The eye moves by scale and spacing, not decoration — a quiet, considered surface that signals a careful engineer.

**Key Characteristics:**
- Warm off-black field, never pure black and never a cold slate
- A single amber accent used sparingly — links, focus, the eyebrow, the index numerals
- Refined serif display (Newsreader) for name and headings over a clean sans (Manrope)
- Generous, calm vertical rhythm and a wide max-width measure
- Hairline rules and soft 1rem-radius surfaces; subtle lift on hover
- A blurred sticky header with anchored navigation

## Colors

A deliberately restrained palette: warm near-black neutrals plus one amber accent. Neutrals are brown-tinted, never gray, so the whole page carries the same warmth. The accent is measurable and rare — its value comes from scarcity.

### Primary
- **Amber** (`#d9a462`): The single accent. Eyebrow label, links, focus rings, project index numerals, and the active "Available" lamp.

### Neutral
- **Ground Deep** (`#0f0e0c`): The page's outer field and scrollbar track.
- **Ground** (`#141310`): The main page field.
- **Surface** (`#1b1a16`): Raised panels — project cards and the contact block.
- **Surface Raised** (`#201e1a`): Surface on hover.
- **Ink** (`#ece8e1`): Primary text — headings and strong labels.
- **Ink Soft** (`#c8c3ba`): Secondary emphasis.
- **Ink Muted** (`#9a948a`): Body copy.
- **Ink Faint** (`#8a857b`): Tertiary hints and footnotes.
- **Hairline** (`rgba(236,232,225,0.09)`): Rules, borders, and dividers.
- **Accent Soft** (`rgba(217,164,98,0.45)`): The project-card accent border on hover.

### Named Rules
**The One Accent Rule.** Amber is the only saturated color and it appears sparingly — the eyebrow, links, focus, and a numeral at a time. Its rarity is its power; it never becomes a fill over a populated area.

## Typography

**Display Font:** Newsreader (with serif fallback)
**Body Font:** Manrope (with sans-serif fallback)

**Character:** A refined editorial serif carries the voice — the name and section headings — lending warmth and quiet confidence. A clean, slightly geometric sans handles all body and UI copy, keeping the reading experience crisp and modern. The contrast is calm, not dramatic.

### Hierarchy
- **Display** (400, clamp(3rem→4.5rem), 1.02, -0.02em): The hero statement and big section titles, set in Newsreader.
- **Title / Card Name** (400, 1.5rem–1.9rem, 1.1): Project names and panel headings, in Newsreader.
- **Body** (400, 0.875–1.125rem, 1.6): Descriptions and intro in Manrope, Ink Muted. Editorially short measure (~42ch).
- **Label** (500, 0.875rem, 0.01em): Eyebrow, section annotations, and small captions.

### Named Rules
**The Two-Voice Rule.** Newsreader owns the names and headings; Manrope owns everything else. Never set a headline in the sans or body copy in the serif.

## Layout

A single centered column at `max-width: 68rem`, generous horizontal padding (1.5rem mobile, 2.5rem desktop), and a calm vertical rhythm (6rem section gaps, 8rem on larger screens). Content is left-aligned. Sections open with a hairline rule plus a serif heading and a small right-aligned annotation. The hero leads with the eyebrow, a large serif statement, a muted intro, and the primary action. The work is a responsive card grid (1/2/3 columns); the skills are a 2-column discipline list. The header is sticky with a background blur.

## Elevation & Depth

Deliberately flat and tonal: there are no floating shadows and no glow. Depth comes from (1) hairline rules separating content, (2) subtle surface steps (Ground → Surface → Surface Raised), and (3) a 1px lift on project cards at hover. The only motion is a restrained translateY(-2px) and color/border transitions on the project cards and links.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. The only elevation is a 2px hover lift and a background step; no offsets, no shadows, no glow.

## Shapes

Soft but restrained. A 1rem radius on project cards and the contact panel; full-pill radius on the small email buttons and the availability dot. Borders are 1px hairline rules. Nothing is clipped or masked.

## Components

### Buttons
- **Shape:** full pill radius (9999px).
- **Primary (Email me):** transparent with a 60%-alpha accent border and 10% accent fill; accent text. On hover the fill becomes solid accent with deep ground text. Square resets, uppercase none.
- **Hover / Focus:** smooth color transition; 1px accent outline with 3px offset on focus.

### Navigation
- **Style:** sticky top bar, blurred (`backdrop-blur`), hairline bottom rule. Name on the left, three text links on the right.
- **Links:** Ink Muted at rest, Ink on hover. Accent outline on focus.

### Cards / Containers
- **Project Card:** 1rem radius, Surface background, hairline border, p-6/p-7 padding. Amber index numeral top-left, serif name, muted description, accent "View repository ↗" link.
- **Hover / Focus-within:** border shifts to the amber soft accent, background steps to Surface Raised, card lifts 2px.
- **Contact Panel:** 1rem radius, Surface background, hairline border, generous interior padding (p-12–p-16).

### Signature Component — The Project Row
Three project cards present the real work. Each carries a small amber index numeral (01/02/03), a serif project name, a muted description, and an accent repository link. The card is the quiet stage; hover is the only gesture — a 2px lift and the amber border appearing.

## Do's and Don'ts

### Do:
- **Do** use the warm near-black field and brown-tinted neutrals; never drift to pure black or cold slate.
- **Do** reserve amber for the accent roles — eyebrow, links, focus, index numerals.
- **Do** set the name and headings in Newsreader and all body/UI in Manrope.
- **Do** give the layout generous space and a wide measure; calm is the point.
- **Do** keep surfaces flat and tonal with hairline rules and a soft 1rem radius.
- **Do** dim and label placeholder content (the skills slots) rather than inventing claims.

### Don't:
- **Don't** add chrome — no glows, glass panels, gradients, or neon accents; the surface is quiet.
- **Don't** use a second saturated color; amber is the only accent.
- **Don't** set headlines in the sans or body in the serif.
- **Don't** introduce heavy shadows or floating depth; depth is hairline and tonal.
- **Don't** clutter the header or add more than the anchored links, name, and contact CTA.
