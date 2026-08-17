# AGENTS.md — Design System, Typography Hierarchy & Code Standards

This document establishes the official design system, typographic scale, semantic structure, SEO/AEO guidelines, and code conventions for `matheuscostadesign.github.io`. All AI agents and developers working on this project must follow these patterns strictly.

---

## 1. Design Tokens & Color Palette

All styling must reference CSS custom properties defined in `src/styles/global.css`:

| Token                   | CSS Variable                  | Value / Usage                                                        |
| :---------------------- | :---------------------------- | :------------------------------------------------------------------- |
| **Display Font**        | `var(--font-display)`         | `'Funnel Display', sans-serif` — Used for all headings (H1 - H6)     |
| **Body Font**           | `var(--font-body)`            | `'Instrument Sans', Helvetica, sans-serif` — Primary text, UI labels |
| **Monospace Font**      | `var(--font-mono)`            | `'JetBrains Mono', monospace` — Eyebrows, micro-copy, code blocks    |
| **Background Main**     | `var(--color-bg-main)`        | `#050505` — Primary dark canvas                                      |
| **Background Surface**  | `var(--color-bg-surface)`     | `#0c0c0d` — Hero / secondary sections                                |
| **Background Card**     | `var(--color-bg-card)`        | `#121214` — Service cards, blog cards                                |
| **Background Elevated** | `var(--color-bg-elevated)`    | `#1a1a1d` — Hover states & popups                                    |
| **Text Main**           | `var(--color-text-main)`      | `#F4F0E7` — Primary high-contrast text                               |
| **Text Muted**          | `var(--color-text-muted)`     | `rgba(244, 240, 231, 0.75)` — Paragraphs & descriptions              |
| **Text Dimmed**         | `var(--color-text-dimmed)`    | `rgba(244, 240, 231, 0.6)` — Footers, dates, captions                |
| **Border Subtle**       | `var(--color-border-subtle)`  | `rgba(244, 240, 231, 0.12)` — Card borders                           |
| **Border Hover**        | `var(--color-border-hover)`   | `rgba(244, 240, 231, 0.28)` — Active border highlight                |
| **Section Padding Y**   | `var(--spacing-section-py)`   | `clamp(60px, 8vw, 120px)` — Standard vertical section padding        |
| **Container Padding X** | `var(--spacing-container-px)` | `clamp(24px, 5vw, 64px)` — Standard horizontal container padding     |

---

## 2. Typographic Hierarchy & Scale

The font scale uses fluid typography (`clamp()`) to ensure optimal presentation across all viewports.

### `H1` — Hero / Primary Title

- **Font**: `var(--font-display)` (`Funnel Display`)
- **Size**: `clamp(46px, 6.2vw, 96px)` (`var(--text-h1)`)
- **Weight**: `normal` (400 / Regular)
- **Line Height**: `1.0`
- **Rule**: Exactly **ONE `<h1>` per page**. Must be the largest and most visually prominent heading.

### `H2` — Section Headings

- **Font**: `var(--font-display)`
- **Size**: `clamp(32px, 4.5vw, 64px)` (`var(--text-h2)`)
- **Weight**: `normal` (400 / Regular)
- **Line Height**: `1.1`
- **Rule**: Used for major page section titles (`O que vamos criar hoje?`, `Últimos artigos no blog`).

### `H3` — Sub-sections & Card Titles

- **Font**: `var(--font-display)`
- **Size**: `clamp(22px, 2.5vw, 32px)` (`var(--text-h3)`)
- **Weight**: `normal` (400 / Regular)
- **Line Height**: `1.25`
- **Rule**: Used for card titles (`Landing Page`, `Site`, `E-commerce`, blog post titles).

### `H4` / `H5` / `H6` — Component Sub-headings

- **Font**: `var(--font-display)`
- **Size**: `clamp(18px, 2vw, 24px)` (`var(--text-h4)`)
- **Weight**: `normal` (400 / Regular)

### Paragraph & Body Text

- **Font**: `var(--font-body)` (`Instrument Sans`)
- **Size**: `16px` (`var(--text-body)`)
- **Line Height**: `1.6`
- **Color**: `var(--color-text-muted)`

### Eyebrow / Micro-copy

- **Font**: `var(--font-mono)` (`JetBrains Mono`)
- **Size**: `12px` (`var(--text-mono)`)
- **Letter Spacing**: `0.28em`
- **Transform**: `uppercase`

---

## 3. Semantic HTML5 & Accessibility (a11y)

- Use semantic HTML5 layout containers: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Never skip heading levels (e.g., do not place an `<h3>` directly inside a section without an `<h2>`).
- All images must have an `alt` attribute describing the content. Decorative images must have `alt=""` and `aria-hidden="true"`.
- Use `.sr-only` class for screen reader text when visual text is hidden.

---

## 4. SEO & AEO (Answer Engine Optimization) Guidelines

- **Schema.org Structured Data**:
  - Pages include `WebSite` schema.
  - Blog post pages include `BlogPosting` schema with `headline`, `author`, `publisher`, `datePublished`, and `image`.
- **OpenGraph & Twitter Cards**: Every page must define `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`, and `twitter:title`.
- **Canonical URLs**: Included via `<link rel="canonical" href={canonicalURL} />`.
- **External Links**: Handled globally with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 5. Strict Code Standards

1. **NO CODE COMMENTS**: Never add comments (`//`, `/* */`, `<!-- -->`) inside code files.
2. **Language**: User communications and UI text must be in **Brazilian Portuguese (pt-BR)**.
3. **No Unnecessary Builds**: Do not execute `npm run build` for layout/styling edits. Use `npx astro check` for validation.

---

## 6. Blog Post SEO & Content Standards (28 Rules)

Every new blog article created in `src/content/blog/` must strictly adhere to the following 28 SEO rules and structure:

1. **Title Optimization**: Post title/`<title>` tag must start with the main target keyword as far left as possible.
2. **URL / Slug**: Use a short, clean, elegant slug representing the primary keyword.
3. **Logo Navigation**: Logo in Header must link to the main site home (`/`), not the blog home.
4. **Header CTA**: Header must maintain a Call to Action button (e.g. "Solicitar Orçamento").
5. **Site Navigation**: Use the main site navigation menu in the header.
6. **Breadcrumbs**: Include semantic breadcrumb navigation (`Home > Blog > Post Title`) with `BreadcrumbList` Schema.org.
7. **H1 Tag**: Exactly ONE `<h1>` tag containing the main keyword and an enticing title.
8. **Subtitle / Summary**: A direct subtitle/summary right below the H1 answering the core concept without fluff.
9. **Author Signature & Bio**: Posts must be signed by a real person (Author avatar + name at top) and include a full `AuthorBioCard` at the bottom.
10. **Publication Date**: Always include the visible publication date (`<time datetime="...">`).
11. **Reading Time**: Compute and display the estimated reading time (e.g. `5 min de leitura`).
12. **Original Images & ALT Tags**: Use high-quality images with complete, descriptive `alt` tags.
13. **Captions**: Include image captions (`<figcaption>`) for visual context.
14. **Typography Size & Line-Height**: Paragraph text must be at least `18px` (`1.125rem`) with `line-height` of at least `1.4` (default `1.75`).
15. **Short Paragraphs**: Maintain short, readable paragraphs for high scannability.
16. **Whitespace ("Respiro")**: Ensure generous vertical spacing between paragraphs (`margin-bottom: 28px`).
17. **Visible Links**: Internal and external links must be visually distinct (underlined, high contrast, hover state).
18. **Bold Highlights**: Use `<strong>`/`<b>` to highlight key insights, avoiding keyword stuffing.
19. **Scannable H2 Headings**: Use attractive `<h2>` headings for sub-sections with high visual hierarchy.
20. **Tables**: Use formatted HTML/Markdown tables for data presentation (ranking factor).
21. **Lists**: Use bullet (`<ul>`) or numbered (`<ol>`) lists for scannability and snippets.
22. **Specific Headings**: Use proper hierarchy with `<h3>`, `<h4>` tags.
23. **Rich Content & Additional Resources**: Provide extra resource links/cards.
24. **Interactive Calculators**: Include interactive calculator widgets (e.g. ROI / Project estimator) to drive engagement.
25. **Newsletter Opt-in**: Offer a discreet newsletter subscription box (`<NewsletterBox />`).
26. **Rich Lead Magnets**: Offer downloadable rich materials (e.g. PDF Checklists / E-books).
27. **Video Embeds**: Use videos moderately with responsive 16:9 aspect ratios.
28. **Social Share Buttons**: Include easy 1-click social sharing buttons (WhatsApp, LinkedIn, Twitter/X, Copy Link).

📱 **Mobile-First Directive**: All blog post components and pages must be fully responsive, touch-friendly, and mobile-optimized first.

