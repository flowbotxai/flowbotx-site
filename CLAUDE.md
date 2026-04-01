# CLAUDE.md — Snap Flow Solutions Project Context

> **Read this file at the start of every session.** It is the single source of truth for project context, architecture, and rules.

---

## Business Identity

- **Business Name:** Snap Flow Solutions
- **Owner:** Chris Pearce
- **Location:** Ringgold, GA 30736 (no street address published — home-based)
- **Service Area:** Greater Chattanooga, TN metro (East Ridge, Red Bank, Hixson, Signal Mountain, Ooltewah, Soddy-Daisy, Lookout Mountain, Collegedale, Fort Oglethorpe, Dalton, Ringgold)
- **Phone:** (423) 208-9982 — GHL VoIP, 423 Chattanooga area code
- **Email:** hello@snapflowsolutions.com
- **Website:** https://snapflowsolutions.com
- **What we do:** AI-powered local marketing agency. Lead capture, automated follow-up, Google Maps/GBP optimization, review automation, AI search visibility (AEO), local SEO, CRM, reactivation campaigns.
- **Who we serve:** Any independently owned business with a growth problem — not just blue-collar trades
- **Pricing:** $129 Never Miss a Lead / $497 Growth / $897 Full Presence

### Social Profiles
- Google Business Profile: https://g.page/r/CSHv_mKkf2QQEBM
- Facebook: https://www.facebook.com/snapflowsolutions
- Instagram: https://www.instagram.com/snapflowsolutions
- LinkedIn: https://www.linkedin.com/company/snapflowsolutions
- Yelp: https://www.yelp.com/biz/snap-flow-solutions-ringgold
- Google Review Link: https://g.page/r/CSHv_mKkf2QQEBM/review

### Chris Pearce Bio (for E-E-A-T content)
Chris ran Incidents Paintless Dent Removal for 28 years in Michigan. He did all of his own marketing and was consistently ranked first on Google across his entire service area. After relocating to Ringgold, GA, he built Snap Flow Solutions to solve the exact problems he lived for nearly three decades: missed calls, slow follow-up, weak online presence, and losing customers to competitors who respond faster. Member of BNI.

---

## Site Architecture

### Tech Stack
- **Hosting:** Netlify (auto-deploys on git push)
- **Repo:** github.com/flowbotxai/flowbotx-site (SSH to PowerOS VPS at 187.77.198.66)
- **Stack:** Static HTML/CSS/JS — no framework, no build step
- **CSS:** Single file at `css/style.css`
- **JS:** Single file at `js/main.js` (FAQ toggles, hamburger menu, smooth scroll)
- **Fonts:** Google Fonts — Outfit (weights 300-800)
- **Form:** GHL (GoHighLevel) iframe embed from api.flowbotx.ai
- **Analytics:** GA4 — G-YQFQY5E471

### File Structure
```
/
├── index.html              ← Homepage
├── chattanooga/index.html   ← Chattanooga location page
├── faq/index.html           ← FAQ page (10 questions)
├── about/index.html         ← About / E-E-A-T page
├── blog/
│   ├── index.html           ← Blog index
│   └── ai-search-visibility/
│       └── index.html       ← First blog post: AI Search Visibility
├── thank-you.html           ← Form submission thank you
├── sitemap.xml              ← Updated with each new page
├── robots.txt               ← AI crawlers allowed
├── netlify.toml             ← Netlify config
├── css/style.css            ← All styles
├── js/main.js               ← All scripts
├── assets/
│   ├── snapflow-logo-transparent.png
│   ├── snapflow-og-image.png
│   └── chris-pearce-headshot.jpg  ← PLACEHOLDER — needs real photo
└── CLAUDE.md                ← This file
```

### URL Structure
All subpages use folder/index.html pattern for clean URLs:
- `/chattanooga/` → `chattanooga/index.html`
- `/faq/` → `faq/index.html`
- `/about/` → `about/index.html`
- `/blog/` → `blog/index.html`
- `/blog/ai-search-visibility/` → `blog/ai-search-visibility/index.html`

### Asset Path Rules
- Pages at root: `css/style.css`, `assets/...`, `js/main.js`
- Pages 1 level deep (`/chattanooga/`, `/faq/`, `/about/`, `/blog/`): `../css/style.css`, `../assets/...`, `../js/main.js`
- Pages 2 levels deep (`/blog/ai-search-visibility/`): `../../css/style.css`, `../../assets/...`, `../../js/main.js`

### Deploy Process
```bash
git add .
git commit -m "descriptive message"
git push
# Netlify auto-deploys within ~30 seconds
# Then: Google Search Console → resubmit sitemap.xml → request indexing for new URLs
```

---

## Design System

### Brand Colors
- Dark navy (background): `#0a0e27`
- Deep blue: `#1e40af`
- Blue (primary): `#3b82f6`
- Cyan: `#06b6d4`
- Light cyan (accent): `#22d3ee`
- Cyan for icons/accents: `#00D4FF`
- White: `#FFFFFF`

### Typography
- Font family: `'Outfit', sans-serif`
- Weights used: 300, 400, 500, 600, 700, 800

### CSS/HTML Patterns (BEM classes from style.css)
Always use these existing classes — do NOT invent new ones unless absolutely necessary:

**Navigation:**
`nav`, `nav__inner`, `nav__logo`, `nav__links`, `nav__actions`, `nav__hamburger`, `nav__mobile`

**Sections:**
`section`, `section__header`, `section__label`, `section__title`, `section__sub`, `container`

**Hero:**
`hero`, `hero__eyebrow`, `hero__title`, `hero__sub`, `hero__actions`, `hero__stats`, `hero__stat`, `hero__stat-number`, `hero__stat-label`

**Cards/Grids:**
`solution__grid`, `solution__card`, `solution__icon`
`problem__grid`, `problem__card`, `problem__icon`
`pricing__grid`, `pricing__card`, `pricing__card--featured`, `pricing__badge`, `pricing__name`, `pricing__price`, `pricing__setup`, `pricing__desc`, `pricing__features`

**Steps:**
`steps__grid`, `step__card`, `step__number`

**FAQ:**
`faq__list`, `faq__item`, `faq__question`, `faq__toggle`, `faq__answer`, `faq__answer-inner`

**Checkup:**
`checkup-section`, `checkup-section__inner`, `checkup-section__content`, `checkup-section__visual`, `checkup-card`

**Form:**
`form-section`, `form-section__inner`, `form-section__embed`

**Footer:**
`footer`, `footer__inner`, `footer__logo`, `footer__tagline`, `footer__links`, `footer__email`, `footer__bottom`

**Buttons:**
`btn`, `btn--primary`, `btn--outline`, `btn--ghost`, `btn--sm`

**Other:**
`sticky-cta`, `financing-banner`, `financing-badge`

### GHL Form Embed (copy exactly for all pages)
```html
<iframe
  src="https://api.flowbotx.ai/widget/form/GWRgBlv9w8IMhrRNrXEw"
  style="width:100%;height:100%;border:none;border-radius:3px"
  id="inline-GWRgBlv9w8IMhrRNrXEw"
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Snapflow Business Audit"
  data-height="1003"
  data-layout-iframe-id="inline-GWRgBlv9w8IMhrRNrXEw"
  data-form-id="GWRgBlv9w8IMhrRNrXEw"
  title="Snapflow Business Audit"
></iframe>
<script src="https://api.flowbotx.ai/js/form_embed.js"></script>
```

### Form CTA Header (use before form section on all pages)
```html
<section style="background:#060f1a;border-top:3px solid #00D4FF;padding:4rem 1rem;text-align:center;">
  <div style="max-width:640px;margin:0 auto;">
    <span class="section__label">Get Started Today</span>
    <h2 style="font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#ffffff;margin:0.75rem 0 1rem;line-height:1.15;">Ready for Your Free Business Assessment?</h2>
    <p style="color:#aaa;font-size:1.1rem;line-height:1.7;margin:0 auto;">Fill out the form below and we&rsquo;ll review your business within 24 hours &mdash; no obligation, no pressure.</p>
  </div>
</section>
```

---

## SEO State

### What's Deployed
- **Homepage:** Title tag, meta description, OG tags, Twitter Card, geo meta, canonical, geo subtitle under H1
- **Schema (homepage):** ProfessionalService, Organization (with sameAs), FAQPage (7 questions), WebSite, hasOfferCatalog
- **Technical:** robots.txt (AI crawlers allowed), sitemap.xml, GA4, Google Search Console verified
- **GBP:** Description, 8 services, 5 categories, hours, 3 posts, logo, booking link, Q&A entries generated
- **Citations:** Yelp, BBB, Apple Maps, Bing Places, LinkedIn, Instagram, Facebook — all with matching NAP
- **Reviews:** 1 Google review received and responded to
- **Pages live:** Homepage, /chattanooga/, /faq/, /about/, /blog/, /blog/ai-search-visibility/
- **Footer:** NAP block + social SVG icon buttons on all pages

### What's NOT Done Yet (Phase 4B remaining)
- [ ] /ringgold/ — location page
- [ ] /privacy-policy/ — required for trust + Google Ads
- [ ] /terms/ — terms of service
- [ ] /dalton/, /fort-oglethorpe/, /east-ridge/ — additional location pages
- [ ] Newsletter signup form (GHL embed)
- [ ] GHL integrations: review automation, chat widget, GA4 conversion events
- [ ] Homepage H1 geo keywords (currently only in subtitle)
- [ ] Upload real headshot to assets/chris-pearce-headshot.jpg

### Google Indexing Status
- Homepage: NOT INDEXED as of 2026-04-01. Re-crawl requested.
- /chattanooga/: Indexing requested 2026-04-01
- /faq/: Indexing requested 2026-04-01
- /about/: Indexing requested 2026-04-01
- /blog/: Indexing requested 2026-04-01
- /blog/ai-search-visibility/: Indexing requested 2026-04-01
- AI visibility: Not appearing in ChatGPT or Perplexity as of 2026-04-01

### Target Keywords (from keyword strategy doc)
**Tier 1 — Target NOW:**
AI marketing agency Chattanooga, missed call text back Chattanooga, AI lead capture Chattanooga, AI search visibility Chattanooga, AEO agency Chattanooga, Google Business Profile optimization Chattanooga, review automation Chattanooga

**Tier 2 — Build with content:**
local SEO Chattanooga, digital marketing Chattanooga, marketing automation small business Chattanooga, Google Maps optimization Chattanooga, lead generation Chattanooga, reputation management Chattanooga

**Tier 3 — Long-term (6+ months):**
marketing agency Chattanooga, SEO company Chattanooga, digital marketing agency Chattanooga

---

## Rules & Constraints

### ALWAYS:
- Use the exact BEM CSS classes from style.css — do not create custom classes unless necessary
- Match the homepage HTML structure for all new pages (nav, footer, form embed, sticky CTA)
- Use the correct asset path depth (../ or ../../ depending on directory level)
- Phone number is (423) 208-9982 / tel:+14232089982 on every page
- GA4 tracking code on every page: G-YQFQY5E471
- Update sitemap.xml when adding new pages
- Include unique title tag, meta description, OG tags, Twitter Card, canonical URL, and geo meta on every page
- Include JSON-LD structured data on every page (at minimum BreadcrumbList)
- Include the GHL form embed on every page EXCEPT blog index
- Commit with descriptive messages

### NEVER:
- Publish Chris's home street address anywhere
- Use the old phone number (586-400-2943)
- Create new CSS files — everything uses css/style.css
- Create new JS files — everything uses js/main.js
- Modify the homepage layout, sections, or content unless specifically asked
- Mark tasks complete in Notion before they're actually deployed and verified
- Use inline styles when an existing CSS class exists

---

## Project Tracking

### Notion Task Tracker
Page ID: `33356fc68e9481999f50c9cde1ebbb20`
URL: https://www.notion.so/33356fc68e9481999f50c9cde1ebbb20

### Keyword Strategy
Page ID: `33356fc68e948033a4eed27262005a05`
URL: https://www.notion.so/33356fc68e948033a4eed27262005a05

### Key Repo Commits
- `2187663` — Initial deployment with meta tags, schema, robots.txt, sitemap (2026-03-30)
- `077086b` — Chattanooga location page + sitemap update (2026-04-01)
- `a13a8e2` — Homepage: geo subtitle, footer NAP + social links, sameAs schema (2026-04-01)
- `0741b0f` — FAQ page with 10 questions, FAQPage schema (2026-04-01)
- `ae55217` — About page: E-E-A-T page with Chris Pearce bio, Person schema (2026-04-01)
- `c9930d2` — Blog index and first post: AI Search Visibility, Article schema (2026-04-01)

---

*Last updated: 2026-04-01*
