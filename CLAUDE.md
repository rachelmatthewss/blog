# Kindly, Rach — Blog

## Project Overview
This is a Next.js 16 blog site using Tailwind CSS v4. It's a rebuild of kindlyrach.com (previously on Webflow). Companion to projects/portfolio (rachmatthews.com).

## Tech Stack
- Next.js 16.1.7 with App Router and Turbopack
- Tailwind CSS v4 (all config lives in globals.css via @theme — there is NO tailwind.config.ts)
- TypeScript
- Adobe Fonts (Typekit) project ID: dfw1jdh

## Typography
- **Orpheus Pro** (`--font-serif`): Display headlines, h1, h2, editorial headings → use `font-serif` utility
- **Freight Text Pro** (`--font-sans`): Body text, labels, captions — this is a text-optimized serif, not a sans font, but uses the same CSS variable name as portfolio for consistency → use `font-sans` utility
- Type scale tokens: `text-display-sm/md/lg`, `text-h1-sm/md/lg`, `text-h2-sm/md/lg`, `text-title-sm/md/lg`, `text-body-sm/md/lg`, `text-label-sm/md/lg`, `text-caption-sm/md/lg`, `text-footnote-sm/md/lg`
- Suffixes: `sm` = mobile, `md` = tablet (768px+), `lg` = desktop (992px+)
- Line height utilities: `leading-short` (1), `leading-standard` (1.2), `leading-tall` (1.4)
- Shared type scale sizes with projects/portfolio — only the font family differs (freight-text vs freight-sans)

## Colors
- `--color-black: #0d0d0d` (shared with portfolio)
- `--color-white: #ffffff` (shared with portfolio)
- `--color-red: #cb102c` (blog accent)
- `--color-blue: #cfe8ff` (blog accent)

## Design Reference
Source of truth: kindlyrach.com (Webflow). Webflow base collection variables are the design token source.

## Figma MCP
Figma MCP is connected. Use it to reference wireframes for exact layout details, spacing, and component structure.

## Important Notes
- `--font-sans` in this project resolves to freight-text-pro (a serif), not a sans-serif font — the variable name is shared with portfolio for utility class consistency
- Design tokens in globals.css sourced from Webflow base collection variables
