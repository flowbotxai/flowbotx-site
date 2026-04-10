# Snap Flow Solutions — AEO Baseline Audit Report

**Audit Date:** April 12, 2026
**Auditor:** Chris Pearce / Claude AEO Specialist
**Overall Score: 45 / 100 — WEAK**
**Rating Scale:** 0-25 Invisible | 26-50 Weak | 51-70 Emerging | 71-85 Competitive | 86-100 Dominant

---

## Score Summary

| Category | Score | Max | Status |
|----------|-------|-----|--------|
| 1. AI Crawler Access | 10 | 10 | ✅ COMPLETE |
| 2. Structured Data & Schema | 9 | 15 | 🟡 Minor gaps |
| 3. Content Citability | 5 | 20 | 🔴 CRITICAL |
| 4. Content Freshness | 0 | 10 | 🔴 CRITICAL |
| 5. E-E-A-T Signals | 10 | 15 | 🟡 Minor gaps |
| 6. Brand Signal & Mentions | 3 | 10 | 🔴 CRITICAL |
| 7. Technical SEO Foundation | 8 | 10 | 🟡 Minor gaps |
| 8. AI Platform Presence | 0 | 10 | ⬜ Baseline (expected) |
| **TOTAL** | **45** | **100** | **WEAK** |

---

## Category 1: AI Crawler Access — 10 / 10

- [x] robots.txt allows all 14 AI crawlers — 5/5 (commit 5ceb458)
- [x] llms.txt exists at site root — 3/3 (commit cbd7968)
- [x] No AI-specific meta blocks — 2/2

**Status:** Fully locked. No action needed.

---

## Category 2: Structured Data & Schema — 9 / 15

- [x] LocalBusiness schema on homepage — 4/4
- [x] Service/OfferCatalog schema — 3/3
- [x] FAQPage schema on FAQ page — 3/3
- [x] Organization schema with founder — 2/2
- [ ] Article/BlogPosting schema on blog posts — 0/2 **GAP**
- [x] Schema validates clean — 1/1

**Action:** Add Article schema with datePublished, dateModified, and author to all 3 blog posts.

---

## Category 3: Content Citability — 5 / 20

- [ ] Homepage citability block — 0/4 **CRITICAL**
  - Opens with headlines, not a self-contained extractable answer
  - Needs 134-167 word block answering "What is Snap Flow Solutions?"
- [ ] Service/location page citability blocks — 0/4 **CRITICAL**
  - All location pages open with headlines, not citable passages
- [ ] Question-format headings — 0/3 **GAP**
  - Current headings are statements, not question-format matching AI prompts
- [x] FAQ with 10+ questions — 3/3
  - 10 well-structured FAQs with comprehensive answers
- [x] Blog targets informational queries — 2/3
  - 3 posts exist targeting how-to/what-is queries
- [ ] No AI ad-filter triggers — 0/3 **GAP**
  - Promotional language throughout: "full team at a fraction of the cost", "runs on autopilot"
  - Needs specific data points: years in business, response time, service count, customer count

**Action:** Retrofit all 16 pages with citability blocks. Restructure headings. Replace promotional copy with data points.

---

## Category 4: Content Freshness — 0 / 10

- [ ] dateModified in schema — 0/3 **CRITICAL**
- [ ] Visible "Last updated" dates — 0/3 **CRITICAL**
- [ ] Content updated within 30 days — 0/2
- [ ] Blog publishing cadence — 0/2

**Action:** Add dateModified to all schema. Add visible "Last updated" to all pages. Establish 2x/month blog cadence.

---

## Category 5: E-E-A-T Signals — 10 / 15

- [x] Author/founder bio with credentials — 3/3
  - Strong about page: Chris Pearce, 28 years, photo, Person schema
- [ ] Author attribution on blog content — 0/2 **GAP**
- [x] Google reviews — 1/3 (3 reviews, 5.0 stars — need 10+)
- [x] Contact info on every page — 2/2
- [x] Privacy policy and terms — 1/1
- [x] HTTPS — 1/1
- [ ] Citations to authoritative sources — 0/2 **GAP**
- [x] Social proof signals — 1/1

**Action:** Add author byline to blog posts. Add outbound citations to blog content. Continue review generation.

---

## Category 6: Brand Signal & Mentions — 3 / 10

- [ ] NAP consistency across directories — 1/3 (limited citations, Phase 5 in progress)
- [x] GBP partially optimized — 2/3
- [ ] Third-party brand mentions — 0/2 **CRITICAL**
  - "snap flow solutions" returns ZERO results for actual business in web search
- [ ] Wikipedia or high-DA mentions — 0/2

**Action:** Continue Phase 5 backlink building. Prioritize directory submissions that create brand mentions. Brand name indexing is the #1 structural barrier.

---

## Category 7: Technical SEO Foundation — 8 / 10

- [x] Unique title tags — 2/2
- [x] Unique meta descriptions — 1/1
- [x] XML sitemap submitted — 1/1
- [x] Canonical URLs — 1/1
- [x] Mobile-friendly — 2/2
- [x] Core Web Vitals — 1/2 (conservative score due to prior FCP/LCP issues)
- [ ] Open Graph tags — 0/1 (needs verification)

**Action:** Verify OG tags on all pages. Address any remaining CWV issues.

---

## Category 8: AI Platform Presence — 0 / 10

- [ ] ChatGPT — 0/3 (not appearing, April 10)
- [ ] Perplexity — 0/2 (not appearing, April 10)
- [ ] Google AI Overviews — 0/3 (AI Overviews: 0 per Search Atlas)
- [ ] Other AI platforms — 0/2

**Status:** Expected baseline for a new site with low brand signal. Categories 1-7 improvements will drive this score over time.

---

## Remediation Priority

| Priority | Fix | Potential Points | Category |
|----------|-----|-----------------|----------|
| 1 | Citability blocks on all pages | +8 | Content Citability |
| 2 | dateModified schema + visible dates | +6 | Content Freshness |
| 3 | Question-format headings | +3 | Content Citability |
| 4 | Replace promotional language with data | +3 | Content Citability |
| 5 | Article schema on blog posts | +2 | Structured Data |
| 6 | Author byline on blog posts | +2 | E-E-A-T |
| 7 | Outbound citations in content | +2 | E-E-A-T |
| — | **Total recoverable this sprint** | **+26** | **45 → ~71** |

**Target after weekend sprint: 71/100 (Competitive range)**

---

## Measurement Baseline (Search Atlas, April 12, 2026)

- Brand Signal: 5
- AI Overviews: 0
- Domain Power: 1
- Backlinks: 0
- Organic Keywords: 3
- Google Reviews: 3 (5.0 stars)

---

## Next Audit Scheduled

- Re-score Categories 3, 4, 5 after Saturday afternoon content optimization
- Full re-audit: April 26, 2026 (2-week mark)
- Monthly cadence after that
