# Snap Flow Solutions — Site Design System

Read this file before making ANY visual, CSS, or HTML layout changes to the site.

## Brand Tokens
- Navy (default bg): #0a0e27
- Cyan primary: #06b6d4
- Cyan light: #22d3ee
- Accent cyan: #00D4FF
- White: #FFFFFF
- Light gray: #f1f5f9
- Text dark: #1a1a2e
- Text heading: #0f172a
- Text muted dark: #475569
- Text light (on dark): #b8c0d0
- Font: Outfit (Google Fonts)
- Min font size: 16px — HARD FLOOR, nothing smaller ever

## Typography Scale (smallest → largest)
Every font-size in style.css must be ≥ 16px. No exceptions.

| Size | Weight | Use |
|------|--------|-----|
| 16px | 600 | Eyebrow text (uppercase labels), timestamps, status text, badges, footer text, source lines |
| 17px | 400 | Step descriptions in results panel, math lines |
| 18px | 400–600 | Body/paragraph text, card body text, chat bubbles, list items, step labels (strong), CTA buttons, FAQ text |
| 20px | 600 | Chat header name ("Snap Flow AI"), section subtitle (paragraph after H2) |
| 22px | 700 | Card titles (h3), feature card titles, step card titles |
| 24px | 700 | Results panel headings ("What just happened", "The math") |
| clamp(30px, 4.5vw, 46px) | 800 | H2 section headings |
| clamp(3rem, 6vw, 4.5rem) | 800 | Hero H1 title |

When adding new elements: pick the closest size from this scale. Do NOT invent new sizes.

## Background Strategy
Default dark navy. No more than 2 consecutive dark sections. Alternate with white/light.

## Three Page Templates

### 1. SERVICE PAGE (conversion-focused, self-closing)
The website is the closer. Visitor decides yes or no WITHOUT a phone call.

Sections in order:
1. Hero (dark) — eyebrow, H1, subtitle, CTA, 3 stat badges
2. Problem section (white) — 3 pain point cards
4. What's included (dark) — 3-6 feature cards
5. See it in action (white) — conversation card + results panel
6. How it works (white/light) — 3 numbered steps
7. Results (dark) — comparison table (Manual vs AI)
8. Get a Quote section (white) — drives to chatbot, NOT pricing tables
9. Social proof (light) — reviews, stats
10. FAQ (white) — includes cost/contract objections
11. Deal of the Week banner — links to /offer/
12. Backup form (dark) — GHL embed

Rules:
- NO walls of text. Cards, stats, short sections only.
- NO static pricing. Chatbot handles quoting.
- Chatbot generates branded PDF estimates after qualifying.
- Max 3 sentences per paragraph.
- Min 4 images per page.

### 2. BLOG POST
1. Hero (dark) — category tag, H1, byline, last-updated
2. Article body (WHITE bg, dark text) — proper H2/H3 hierarchy
3. Mid-article CTA (dark) — link to free checkup
5. Author box — photo + bio
6. FAQ (light)
7. Form CTA (dark)

### 3. LANDING PAGE
Punchy hero with stats, feature grid, sample report, testimonial, form CTA.

## Conversion Philosophy
Quote → Audit → Close pipeline:
1. Visitor reads service page
2. Clicks Get a Quote → chatbot qualifies → gives price
3. Chatbot recommends free audit to confirm fit
4. Audit runs → PDF with findings + recommendations + pricing
5. Customer books or doesn't. No pressure. No sales call.

Three paths on every page:
- Path 1: CHATBOT — Get a Quote, AI gives price
- Path 2: VOICE/TEXT — Call or text (423) 208-9982
- Path 3: HUMAN — Schedule call with Chris (last resort)

## Key Components

### Conversation Card (See it in action)
Two columns: Left = chat conversation, Right = results panel
Results panel has 3 stacked cards:
- "What just happened" — numbered steps of what AI did
- "Without AI" — red box showing what would have happened
- "The math" — dark box with revenue calculation

### Comparison Table (Numbers don't lie)
Manual vs AI with revenue impact badges. Before/after specific numbers.

### Citability Content
Citability content goes in JSON-LD schema description fields, NOT as a visible block on the page. Every page's primary schema (@type Service, Article, or LocalBusiness) must have a 134-167 word description that directly answers the page's target query.

### Feature Card
Icon + title + description. Dark and light variants.

### Deal of the Week Banner
Dark bg, cyan borders, links to /offer/.

## Global Rules
1. No inline styles — all in css/style.css
2. Mobile-first — works on 375px
3. Images: WebP, max 200KB, explicit dimensions
4. No marketing fluff — use specific data points
5. No dead anchor links
6. Batch commits to minimize Netlify builds
7. Every Claude Code prompt starts: Read DESIGN-SYSTEM.md first
