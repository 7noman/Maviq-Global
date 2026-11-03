# Maviq Global Consulting FZC — Design System & Architecture Specification (DESIGN.md)

## 1. Brand Positioning & Visual Direction

### 1.1 Brand Identity
**Maviq Global Consulting FZC** is an international technology staffing, recruitment consulting, and workforce solutions firm serving enterprises across the Middle East (United Arab Emirates, Qatar, and Saudi Arabia).

- **Positioning Statement:** "Empowering Technology Partners with Exceptional Talent & Strategic Workforce Solutions."
- **Brand Slogan:** "The Right Talent. The Right Time. The Right Impact."
- **Company Mission:** "To connect business challenges with the right technology and talent."

### 1.2 Visual Direction: Editorial, Authoritative, Human-Designed
The digital presence represents an established global advisory and technology talent partner. It completely avoids generic AI-generated templates, purple gradients, excessive glassmorphism, floating 3D shapes, and repetitive three-card layouts.

The design relies on:
1. **Asymmetric Editorial Compositions:** Balanced layouts pairing authentic corporate photography with crisp typographic hierarchy.
2. **Distinct Section Identities:** Each section features a layout custom-crafted to its content type (e.g., interactive talent directory, structured operations ledger, regional presence cards with national flags, executive contact suite).
3. **Restrained Color Hierarchy:** Anchored in deep primary navy (`#102B4E`) and crisp white (`#FFFFFF`), accented by corporate blue (`#1557A6`) for primary interactions, and restrained gold (`#D5A84B`) for subtle prestige highlights.
4. **Authentic Assets:** Direct usage of the authentic `mg. consulting` brand logo extracted from the official corporate profile, alongside real high-resolution corporate photography preserved from the source document.

---

## 2. Color Palette & Token Architecture

The design system establishes explicit semantic roles for all color tokens. No color is applied decoratively without purpose.

| Token | Hex Value | Semantic Role & Purpose | WCAG Contrast Ratio (on #FFF / #102B4E) |
|---|---|---|---|
| `--color-navy-primary` | `#102B4E` | Primary brand anchor, dominant headings, high-contrast dark sections, footer background | 13.5:1 on White (AAA Pass) |
| `--color-blue-corporate` | `#1557A6` | Primary action buttons, active navigation markers, key links | 6.8:1 on White (AA Pass) |
| `--color-blue-accent` | `#1679C8` | Hover states, active borders, interactive focus rings | 4.6:1 on White (AA Pass) |
| `--color-white` | `#FFFFFF` | Primary background, high-contrast text on navy surfaces | 21:1 on Black |
| `--color-bg-cool` | `#F4F7FA` | Alternating section background, subtle card surface | Subtly distinct from white (ratio 1.07:1) |
| `--color-charcoal-text` | `#202B36` | Primary body typography, high legibility | 12.2:1 on White (AAA Pass) |
| `--color-supporting-text` | `#596777` | Secondary descriptions, metadata, subtitles | 4.8:1 on White (AA Pass) |
| `--color-gold-accent` | `#D5A84B` | Restrained prestige marker, active badge borders, subtle emphasis lines | 4.5:1 on #102B4E (AA Pass) |
| `--color-border` | `#DCE4EC` | Clean architectural division, subtle card outlines | Clean hairline borders |
| `--color-border-subtle` | `rgba(16, 43, 78, 0.08)` | Internal component dividers | Soft divider lines |

### Anti-Slop Color Rules:
- No purple-to-blue or rainbow gradients.
- Backgrounds are strictly solid or gentle two-stop tonal shifts that serve visual hierarchy.
- Dark navy sections are reserved for thematic impact (Hero backdrop accent, Why Maviq differentiators, and Corporate Footer).

---

## 3. Typography & Type Hierarchy

The typography pairs modern sans-serifs with editorial line-heights, distinct weights, and balanced letter spacing.

### Primary Typeface: Inter / Plus Jakarta Sans / System Sans-Serif Fallback
- Base Font Size: `16px` (1rem).
- Headings: Bold / SemiBold (`700`, `600`), tight tracking (`-0.02em` to `-0.01em`).
- Body: Regular / Medium (`400`, `500`), generous line height (`1.6` to `1.75`).
- Section Eyebrows: Semibold uppercase, letter-spacing `0.08em`, constrained font size (`0.75rem` / `12px`).

### Type Scale (Fluid clamp):
- **Hero Title (H1):** `clamp(2.5rem, 5vw + 1rem, 3.85rem)` / line-height `1.1`
- **Section Heading (H2):** `clamp(2rem, 3.5vw + 0.5rem, 2.75rem)` / line-height `1.2`
- **Subsection Heading (H3):** `clamp(1.35rem, 2vw + 0.5rem, 1.75rem)` / line-height `1.3`
- **Card / Role Title (H4):** `1.15rem` (18.4px) / line-height `1.4`
- **Body Large:** `1.125rem` (18px) / line-height `1.65`
- **Body Standard:** `1rem` (16px) / line-height `1.6`
- **Caption / Meta:** `0.875rem` (14px) / line-height `1.5`

---

## 4. Spacing, Grid, & Layout Principles

### Container Dimensions:
- Max Page Width: `1280px` (`max-w-7xl`)
- Section Vertical Padding: `clamp(4rem, 8vw, 7.5rem)`
- Column Gaps: `clamp(1.5rem, 3vw, 3rem)`
- Card Padding: `clamp(1.25rem, 2.5vw, 2rem)`

### Layout Rhythm & Visual Variety:
To prevent the monotonous "card-grid after card-grid" AI failure:
1. **Hero Section:** Asymmetrical split editorial composition. Left column holds the company badge, powerful headline, positioning statement, and dual CTA buttons. Right column presents a framed layered composition featuring authentic corporate team photography and regional badges (UAE · Qatar · Saudi Arabia).
2. **About Us Section:** Two-column executive profile. Left column delivers strategic context and company mission. Right column showcases a high-resolution team meeting photograph from the original corporate profile alongside the official brand value badge.
3. **Core Services Section:** A structured 8-service architectural ledger. Services are arranged in an alternating 4x2 grid with Lucide icons, concise professional scopes, and subtle border hover treatments.
4. **Talent Outsourcing Directory:** Clean categorized professional directory featuring all 9 vetted talent domains (Software Developers, DevOps Engineers, Cloud Engineers, AI/ML Specialists, ERP Consultants, Data Engineers, Project Managers, Testing Engineers, NOC/SOC Consultants). Paired with the authentic engineering team photograph.
5. **Managed IT Services Section:** Split operations suite. Left column features the walking corporate leadership team from the profile. Right column details all 6 operations management areas with verification checkmarks.
6. **Industries We Serve Section:** 8-sector multi-column matrix with bespoke iconography, paired with the boardroom strategy image.
7. **Engagement Models Section:** Distinct modular tiers explaining the 6 flexible engagement structures (Staff Augmentation, Project Outsourcing, Managed Services, Executive Search, HR Provisioning & Payroll, Mass Recruitment).
8. **Why Maviq Global (Differentiators):** High-impact deep navy section (`#102B4E`) with crisp typography and subtle gold accents showcasing the 6 competitive pillars from Page 8 of the company profile.
9. **Regional Presence & Contact Suite:** Full regional breakdown of UAE, Qatar, and Saudi Arabia with national flags, direct telephone lines (`tel:`), official email (`mailto:`), PO Box, and an interactive business inquiry form with client-side validation and clear email dispatch preview.
10. **Corporate Footer:** Full architectural footer with company logo, regional indicators, complete navigation directory, service links, working legal pages (Terms & Conditions, Privacy Policy), and dynamic JavaScript-generated copyright year.

---

## 5. Original Brand Assets & Image Usage

### Official Logo:
- Extracted directly from the official corporate profile (`mg. consulting`).
- High-resolution SVG / transparent PNG preserving the exact circular badge, `mg.` typography, dot, and `consulting` subscript.
- Used in the primary navigation header and corporate footer.
- Rendered with appropriate contrast against light and dark backgrounds.
- Used as favicon.

### Authentic Photography Extracted from Profile:
1. `hero-team.jpg`: Executive consulting and engineering collaboration.
2. `about-meeting.jpg`: Consultants in conference room with whiteboard and laptop (Page 2).
3. `services-collaboration.jpg`: Professional woman in business meeting (Page 3).
4. `talent-coding.jpg`: Software engineering team coding on multi-screens (Page 4).
5. `managed-corridor.jpg`: Corporate executives walking in an office corridor (Page 5).
6. `industries-boardroom.jpg`: Business leader presenting strategic analytics (Page 6).
7. `why-office.jpg`: Modern corporate executive workspace (Page 8).
8. `contact-support.jpg`: Support and communications team with headsets (Page 9).

---

## 6. Interactive States & Micro-Interactions

### Buttons & Links:
- Primary CTA (`btn-primary`): Background `#1557A6`, text `#FFFFFF`, transition `all 200ms cubic-bezier(0.16, 1, 0.3, 1)`, hover elevates with subtle shadow `0 6px 16px rgba(21, 87, 166, 0.25)` and background `#102B4E`.
- Secondary CTA (`btn-secondary`): Crisp border `1.5px solid #102B4E`, text `#102B4E`, background `transparent`, hover fills with `#102B4E` and text `#FFFFFF`.
- Ghost CTA (`btn-ghost`): Clean text with subtle border, high contrast.
- Minimum tap target: `44px` height and width for all touch targets.

### Scroll & Reveal Effects:
- Lightweight Intersection Observer reveals elements smoothly as they enter viewport.
- Respects `prefers-reduced-motion`: all animations instantly resolve to `opacity: 1; transform: none` when reduced motion is requested.
- No blocking or flashing; fallback ensures complete visibility if JavaScript is disabled.

---

## 7. Responsive Breakpoints & Mobile Architecture

| Breakpoint | Target Screen | Layout Adaptations |
|---|---|---|
| `< 640px` | Mobile Portrait (360px - 480px) | Single column flow, full-width buttons, accessible mobile drawer menu, touch-optimized cards, 16px horizontal screen padding |
| `640px - 768px` | Mobile Landscape / Phablet | 2-column compact grids, fluid typography |
| `768px - 1024px` | Tablet Portrait | Asymmetric 2-column layouts, sticky header with tablet navigation |
| `1024px - 1280px` | Laptops & Desktop | Full desktop layout, multi-column directories, balanced whitespace |
| `> 1280px` | Large Desktop Displays | Centered constrained content (1280px max-width) with generous gutters |

---

## 8. Anti-Slop Audit Checklist (Purpose & Quality Gates)

1. **No em dashes in UI text:** Enforced across all components and copy.
2. **No generic AI buzzwords:** Zero filler claims; all service scopes derive directly from the official PDF profile.
3. **No fake stats or testimonials:** No invented client logos, no fake review ratings, no fabricated metric counts.
4. **No non-functional controls:** Every link, anchor, button, and form field operates cleanly.
5. **Full WCAG AA Compliance:** All text contrast ratios exceed 4.5:1. Accessible focus outlines, ARIA labels, and keyboard navigability.
6. **Mobile Perfection:** Zero horizontal scrolling or clipped text across 360px, 390px, 768px, 1024px, 1440px.

