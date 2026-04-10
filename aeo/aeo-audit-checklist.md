# AEO Audit Checklist — AI Search Visibility Scoring

**Version:** 1.0  
**Created:** 2026-04-12  
**Author:** Chris Pearce, Snap Flow Solutions  
**Purpose:** Score any local business website on AI search visibility readiness. 100-point scale across 8 categories. Run at onboarding, then monthly.

---

## Scoring Summary

| # | Category | Max Points | Weight |
|---|----------|-----------|--------|
| 1 | AI Crawler Access | 10 | Technical gate — 0 here = invisible to AI |
| 2 | Structured Data & Schema | 15 | How AI parses your business identity |
| 3 | Content Citability | 20 | Whether AI can extract and cite your content |
| 4 | Content Freshness | 10 | Recency signals AI platforms check |
| 5 | E-E-A-T Signals | 15 | Trust and authority indicators |
| 6 | Brand Signal & Mentions | 10 | Third-party validation AI weighs 3x over backlinks |
| 7 | Technical SEO Foundation | 10 | Core technical health that enables everything above |
| 8 | AI Platform Presence | 10 | Actual visibility in AI responses today |
| — | **TOTAL** | **100** | — |

**Score ranges:** 0-25 Invisible | 26-50 Weak | 51-70 Emerging | 71-85 Competitive | 86-100 Dominant

---

## Category 1: AI Crawler Access (10 pts)

AI platforms cannot cite what they cannot crawl. This is a binary gate.

- [ ] **robots.txt allows all major AI crawlers (5 pts)**
  - GPTBot, OAI-SearchBot, ChatGPT-User (OpenAI)
  - ClaudeBot (Anthropic)
  - PerplexityBot (Perplexity)
  - Google-Extended (Google AI training)
  - Amazonbot, Bytespider, CCBot, Applebot-Extended, FacebookBot, Cohere-ai
  - Googlebot, Bingbot (search crawlers that feed AI systems)
  - Score: 5 = all 14 allowed | 3 = most allowed | 1 = some blocked | 0 = all blocked or no explicit rules

- [ ] **llms.txt exists at site root (3 pts)**
  - Follows llmstxt.org spec: H1 site name, blockquote summary, H2 sections with linked resources
  - Score: 3 = complete and valid | 1 = exists but incomplete | 0 = missing

- [ ] **No AI-specific blocks in meta tags or headers (2 pts)**
  - Check for `noai`, `noimageai` meta tags
  - Check for `X-Robots-Tag` headers blocking AI crawlers
  - Score: 2 = clean | 0 = blocks present

---

## Category 2: Structured Data & Schema (15 pts)

JSON-LD tells AI exactly what the business is, where it operates, and what it offers.

- [ ] **LocalBusiness schema on homepage (4 pts)**
  - Includes: name, address, telephone, url, geo, areaServed, openingHours
  - Uses @graph structure for clean multi-schema pages
  - Score: 4 = complete LocalBusiness | 2 = partial | 0 = missing

- [ ] **Service/OfferCatalog schema (3 pts)**
  - hasOfferCatalog with all services listed as structured Offer > Service
  - Score: 3 = complete catalog | 1 = partial | 0 = missing

- [ ] **FAQPage schema on FAQ page (3 pts)**
  - Question/Answer pairs in valid FAQPage markup
  - Answers are plain text (not HTML), self-contained, 134-167 words optimal
  - Score: 3 = valid FAQ schema | 1 = partial | 0 = missing

- [ ] **Organization schema with founder/author (2 pts)**
  - Organization type with logo, sameAs (social links), founder Person
  - Score: 2 = complete | 1 = partial | 0 = missing

- [ ] **Article/BlogPosting schema on blog posts (2 pts)**
  - Each blog post has Article schema with headline, datePublished, dateModified, author
  - Score: 2 = all posts have schema | 1 = some posts | 0 = none

- [ ] **Schema validates clean (1 pt)**
  - Zero errors in Google Rich Results Test and Schema.org Validator
  - Score: 1 = clean | 0 = errors present

---

## Category 3: Content Citability (20 pts)

The highest-weighted category. AI cites content it can easily extract. 74.2% of AI citations come from pages that also rank in traditional search.

- [ ] **Homepage has a citability block in first 200 words (4 pts)**
  - Self-contained answer block, 134-167 words
  - Answers: "What is [Business Name] and what do they do?"
  - Fact-rich: includes location, services, differentiator, founding info
  - No promotional language (no "premier", "revolutionary", "best-in-class")
  - Uses specific data points instead (years in business, number of services, response time)
  - Score: 4 = optimized block | 2 = partial | 0 = missing or promotional

- [ ] **Each service/location page has a citability block (4 pts)**
  - Each page opens with a direct answer to "What does [Business] offer in [City]?"
  - 134-167 words, self-contained, extractable without surrounding context
  - Score: 4 = all pages optimized | 2 = some pages | 0 = none

- [ ] **Question-format H2/H3 headings (3 pts)**
  - Headings match actual AI prompts: "What is...", "How does...", "Why should..."
  - Not generic: avoid "Overview", "Details", "More Information"
  - Score: 3 = question-format throughout | 1 = mixed | 0 = generic headings

- [ ] **FAQ page with 10+ questions matching AI prompts (3 pts)**
  - Questions reflect what users actually ask AI about this business type
  - Answers are self-contained, fact-rich, 134-167 words each
  - Score: 3 = 10+ optimized FAQs | 2 = 5-9 | 1 = 1-4 | 0 = none

- [ ] **Blog content targets informational AI queries (3 pts)**
  - At least 3 blog posts targeting "how to", "what is", "why" queries
  - Posts are comprehensive (1,000+ words), structured with clear headings
  - Score: 3 = 3+ optimized posts | 2 = 1-2 posts | 0 = no blog

- [ ] **No AI ad-filter triggers in content (3 pts)**
  - Content avoids promotional superlatives that AI filters deprioritize
  - Uses data points, percentages, dates, methodology references instead
  - Bad: "the best marketing agency", "revolutionary AI technology"
  - Good: "serving 47 local businesses since 2024", "60-second average response time"
  - Score: 3 = clean | 1 = some triggers | 0 = heavy promotional language

---

## Category 4: Content Freshness (10 pts)

AI content relevance decays in approximately 14 days. Freshness signals are critical.

- [ ] **dateModified in schema markup on all pages (3 pts)**
  - Every page's JSON-LD includes dateModified with a recent, accurate date
  - Score: 3 = all pages | 1 = some pages | 0 = none

- [ ] **Visible "Last updated" date on all content pages (3 pts)**
  - Human-readable update date visible on the page (not just in schema)
  - Score: 3 = all pages | 1 = some pages | 0 = none

- [ ] **Content updated within last 30 days (2 pts)**
  - At least homepage and key service pages updated with substantive changes
  - Not just date changes — actual content updates
  - Score: 2 = updated within 30 days | 1 = within 90 days | 0 = stale

- [ ] **Blog publishing cadence (2 pts)**
  - New blog content published at least twice per month
  - Score: 2 = 2+/month | 1 = 1/month | 0 = no recent posts

---

## Category 5: E-E-A-T Signals (15 pts)

Experience, Expertise, Authoritativeness, Trustworthiness — weighted heavily by AI for source selection.

- [ ] **Author/founder bio page with credentials (3 pts)**
  - Dedicated about page with name, photo, years of experience, relevant background
  - Person schema markup on the author
  - Score: 3 = complete bio + schema | 2 = bio without schema | 0 = no bio page

- [ ] **Author attribution on all content (2 pts)**
  - Every blog post and content page shows author name and links to bio
  - Score: 2 = all content attributed | 1 = some | 0 = none

- [ ] **Google reviews (3 pts)**
  - Active Google review profile with recent reviews
  - Score: 3 = 10+ reviews, 4.5+ stars | 2 = 5-9 reviews | 1 = 1-4 reviews | 0 = none

- [ ] **Contact information visible (2 pts)**
  - Phone number, email, and location on every page (header/footer)
  - Score: 2 = on every page | 1 = on some pages | 0 = hard to find

- [ ] **Privacy policy and terms pages (1 pt)**
  - Both exist and are linked from footer
  - Score: 1 = both present | 0 = missing

- [ ] **HTTPS with valid SSL (1 pt)**
  - Site loads securely, no mixed content warnings
  - Score: 1 = clean HTTPS | 0 = issues

- [ ] **Citations to authoritative sources in content (2 pts)**
  - Blog posts and content pages cite primary sources (studies, official docs, industry data)
  - No circular citations
  - Score: 2 = regular citations | 1 = occasional | 0 = none

- [ ] **Social proof signals (1 pt)**
  - Active social media profiles linked from site (sameAs in schema)
  - Score: 1 = 2+ active profiles linked | 0 = none or inactive

---

## Category 6: Brand Signal & Mentions (10 pts)

Brand mentions correlate 3x more strongly with AI visibility than backlinks. AI systems weight third-party validation heavily.

- [ ] **NAP consistency across directories (3 pts)**
  - Business name, address, phone identical across GBP, Yelp, BBB, Facebook, and all citation sources
  - Score: 3 = 100% consistent | 2 = minor variations | 0 = inconsistent or few citations

- [ ] **Google Business Profile fully optimized (3 pts)**
  - Complete profile: description, all categories, services, photos, hours, posts
  - Score: 3 = fully complete | 2 = mostly complete | 1 = basic | 0 = unclaimed

- [ ] **Third-party brand mentions (2 pts)**
  - Business mentioned on sites other than own (directories, articles, partner sites, BBB)
  - Score: 2 = 5+ third-party mentions | 1 = 1-4 | 0 = none found

- [ ] **Wikipedia or high-authority source mentions (2 pts)**
  - Wikipedia = 47.9% of ChatGPT's top cited sources. Any high-DA mention helps.
  - Score: 2 = mentioned on Wikipedia or DA 70+ site | 1 = DA 40-69 mentions | 0 = none

---

## Category 7: Technical SEO Foundation (10 pts)

AEO builds on SEO. 74.2% of AI-cited content also ranks in traditional search.

- [ ] **Unique title tags on all pages (2 pts)**
  - 50-60 characters, primary keyword near beginning, unique per page
  - Score: 2 = all unique and optimized | 1 = mostly | 0 = duplicate or missing

- [ ] **Unique meta descriptions on all pages (1 pt)**
  - 150-160 characters, includes CTA, unique per page
  - Score: 1 = all optimized | 0 = missing or duplicate

- [ ] **XML sitemap submitted to GSC (1 pt)**
  - sitemap.xml exists, submitted, and pages are being indexed
  - Score: 1 = submitted and indexing | 0 = missing or not submitted

- [ ] **Canonical URLs set on all pages (1 pt)**
  - rel="canonical" prevents duplicate content issues
  - Score: 1 = set on all pages | 0 = missing

- [ ] **Mobile-friendly and responsive (2 pts)**
  - Passes Google Mobile-Friendly Test
  - Score: 2 = fully responsive | 1 = mostly | 0 = not mobile-friendly

- [ ] **Core Web Vitals passing (2 pts)**
  - LCP < 2.5s, INP < 200ms, CLS < 0.1
  - Score: 2 = all passing | 1 = some failing | 0 = poor

- [ ] **Open Graph tags on all pages (1 pt)**
  - og:title, og:description, og:image, og:url set
  - Score: 1 = all pages | 0 = missing

---

## Category 8: AI Platform Presence (10 pts)

The ultimate measure — does AI actually cite this business today?

- [ ] **ChatGPT mentions business when prompted (3 pts)**
  - Test 5 prompts: "[service] in [city]", "best [service] near [location]", "who does [service] in [area]"
  - Score: 3 = mentioned in 3+ responses | 2 = 1-2 mentions | 0 = not mentioned

- [ ] **Perplexity cites business (2 pts)**
  - Test same 5 prompts in Perplexity
  - Score: 2 = cited with source link | 1 = mentioned without link | 0 = not mentioned

- [ ] **Google AI Overview includes business (3 pts)**
  - Business appears in AI Overview for target keywords
  - Score: 3 = appears in AI Overview | 1 = appears in related results | 0 = not appearing

- [ ] **Other AI platforms (Claude, Gemini, Copilot) (2 pts)**
  - Test across additional AI platforms
  - Score: 2 = mentioned on 2+ platforms | 1 = mentioned on 1 | 0 = not mentioned

---

## How to Use This Checklist

### For Snap Flow Solutions (Client #1)
1. Run the full audit now — document baseline score
2. Execute fixes in priority order: Crawler Access → Structured Data → Citability → Freshness
3. Re-audit monthly and track score progression in Search Atlas + Notion

### For Client Onboarding
1. Run audit during discovery call or immediately after
2. Present score in AEO audit report (use audit-report-template.html)
3. Build remediation plan prioritized by point value
4. Re-audit at 30/60/90 days to show progress

### For Monthly Reporting
1. Re-run Categories 4 (Freshness), 6 (Brand Signal), and 8 (AI Presence) monthly
2. Re-run full audit quarterly
3. Track trends in measurement dashboard

---

## Test Prompts for Category 8

Use these exact prompts across ChatGPT, Perplexity, Google AI, Claude, and Gemini. Replace [Business Type] and [City] with client specifics.

1. "What is the best [business type] in [city]?"
2. "Who offers [primary service] in [city]?"
3. "I need a [business type] near [location] — who do you recommend?"
4. "[Business name] reviews — is this a good company?"
5. "What does [business name] do?"

Screenshot every response. Save to /aeo/reports/ with filename format: `[platform]-[date]-[prompt-number].png`

---

## Scoring Notes

- This checklist measures AI search visibility readiness, not traditional SEO rank
- Categories are weighted by their measured impact on AI citation likelihood
- Category 3 (Content Citability) is weighted highest because content structure is the #1 factor in whether AI extracts and cites a source
- Category 8 (AI Platform Presence) measures current state — the other 7 categories drive future improvement
- A business can score 90/100 on Categories 1-7 and still score 0/10 on Category 8 if the site is new — AI indexing takes time
- Run the audit before and after every optimization sprint to measure impact
