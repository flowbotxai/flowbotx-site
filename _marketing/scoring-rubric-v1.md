# Snap Flow Solutions — Audit Scoring Rubric
## Version 1.0 · April 3, 2026 · Internal Only (Estimator Agent Brain File)

---

# How This Document Works

This rubric is the logic layer between the audit and the estimate. For each of the 9 audit categories:

1. **What to observe** — specific, verifiable things to check during the audit
2. **How to score** — Strong / Weak / Missing, based on observable evidence (not opinions)
3. **What to recommend** — which services map to each score level
4. **Why it matters** — revenue impact reasoning the estimator uses in client-facing copy
5. **Priority level** — Missing = High, Weak = Medium, Strong = No Action

**Core Principle:** Every score must be backed by evidence. Every recommendation must trace to a finding. We never sell fluff — only solutions that are mandatory for the client's success, trust, and authority.

**Combo Rules:**
- **Map Pack Combo:** When 3+ services from Category 2 (Google Presence) + Category 6 (Reviews & Reputation) are recommended together, present as "Local Map Pack" solution at $349/mo + $497 setup instead of individual line items.
- **Bundle Discounts:** Applied to monthly fees only. 1–2 services = full price, 3–4 = 10% off, 5–6 = 15% off, 7+ = 20% off. Setup fees always full price.

**Service ID Reference:** All service IDs below match `service_menu.json` and `service_catalog_v2.md`.

---

# CATEGORY 1 — WEBSITE

## What to Observe

| Check | How to Verify |
|-------|---------------|
| Does a website exist? | Search "[Business Name] [City]" on Google. Check GBP for website link. |
| Is there a clear CTA above the fold? | Load site on mobile. Is there a phone number, "Call Now" button, or form visible without scrolling? |
| Is it mobile-responsive? | Load on phone or use Chrome DevTools mobile view. Does layout break? Text too small? Buttons too close? |
| Page speed | Run Google PageSpeed Insights. Score below 50 = slow. |
| Contact form working? | Submit a test inquiry. Does it go through? Does the business get notified? |
| Content accuracy | Are hours, phone number, services, and address correct and current? |
| SSL certificate | Does the URL show https:// or does the browser show "Not Secure"? |
| Chat widget present? | Is there a chat bubble on the site? Does it respond? Is it AI or just a dead form? |

## Scoring

### Missing (Priority: HIGH)
**Evidence:** No website exists. Google search returns only GBP listing, social media, or directory pages. No owned web property.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Landing Page Design | `landing_page` | $497 | — | No web presence = invisible to anyone searching outside Maps. A focused landing page captures leads immediately. |
| Website Chat Widget | `chat_widget` | $0 | $49 | Once page exists, chat widget captures visitors 24/7 without owner involvement. |

**Client-facing reasoning:** "You have no website. When someone searches for your services and finds your Google listing, there's nowhere to send them to learn more. A conversion-focused landing page with a lead capture form gets you online and capturing leads within a week."

### Weak (Priority: MEDIUM)
**Evidence:** Website exists but has one or more critical issues: no CTA above the fold, broken mobile layout, page speed below 50, no contact form or form doesn't work, outdated information, no SSL, no click-to-call on mobile.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Website Optimization | `website_opt` | $297 | — | Fix the conversion killers — speed, mobile, CTA, forms. One-time fix. |
| Website Chat Widget | `chat_widget` | $0 | $49 | Add 24/7 lead capture if no chat exists. |

**Client-facing reasoning:** "Your website exists but it's not converting visitors into leads. [Specific issues found: no phone number above the fold / broken on mobile / takes 8 seconds to load / contact form doesn't work]. Every day this goes unfixed, you're paying for traffic that bounces."

### Strong (Priority: NO ACTION)
**Evidence:** Website loads fast (PageSpeed 70+), mobile-responsive, clear CTA above the fold, working contact form, accurate information, SSL active, click-to-call works on mobile.

**Recommend:** No website services needed. Note in audit: "Website is solid — no action required."

---

# CATEGORY 2 — GOOGLE PRESENCE

## What to Observe

| Check | How to Verify |
|-------|---------------|
| GBP claimed and verified? | Search business on Google Maps. Is the listing claimed? Does it show "Suggest an edit" (unclaimed) or owner-managed content? |
| Profile completeness | Check: business hours, phone, address, website, business description, categories (primary + secondary), services list, attributes, Q&A section. |
| Photo count and quality | Count photos. Are they professional? Storefront, team, work examples? Or just 1-2 blurry pics? |
| GBP posts | Has the business posted in the last 30 days? Last 90 days? Ever? |
| Categories correct? | Is the primary category the most relevant? Are secondary categories used? |
| NAP consistency | Does the Name, Address, Phone on GBP match the website and top 5 directories (Yelp, Facebook, BBB, Apple Maps, Bing)? |
| Citation health | Spot-check 5 major directories. Is the business listed? Is info correct? |
| City/service area pages | Does the website have dedicated pages for each city/area they serve? |

## Scoring

### Missing (Priority: HIGH)
**Evidence:** GBP unclaimed or not created. No Google Maps presence. Business is invisible on Google for local searches.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| GBP Optimization | `gbp` | $197 | $79 | Must claim and fully optimize from scratch. This is the #1 priority for any local business. |
| GBP Weekly Posts | `gbp_posts` | $0 | $49 | Keep the listing active and signaling to Google. |
| Citation Cleanup | `citation_cleanup` | $210 | — | Establish NAP across 40+ directories to build Google trust signals. |
| Citation Monitoring | `citation_monitoring` | $0 | $29 | Prevent citation drift after cleanup. |

**Check for Map Pack Combo:** If 3+ services from this category + Category 6 are recommended, trigger Map Pack pricing ($349/mo + $497 setup).

**Client-facing reasoning:** "You don't exist on Google Maps. When someone searches '[service] near me' or '[service] in [city],' you're not showing up at all. Your competitors with complete Google profiles are getting every one of those calls. This is the single highest-impact fix we can make."

### Weak (Priority: MEDIUM)
**Evidence:** GBP exists and is claimed but incomplete. Common issues: fewer than 10 photos, no posts in 90+ days, missing service list, no business description, wrong or missing categories, NAP inconsistencies across directories.

**Recommend (select based on specific gaps found):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| GBP Optimization | `gbp` | $197 | $79 | If profile is less than 70% complete (missing description, services, categories, or fewer than 10 photos). |
| GBP Weekly Posts | `gbp_posts` | $0 | $49 | If no posts in 90+ days. |
| Citation Cleanup | `citation_cleanup` | $210 | — | If NAP inconsistencies found across 2+ directories. |
| Citation Monitoring | `citation_monitoring` | $0 | $29 | If citation cleanup is recommended. |
| City Landing Pages | `city_pages` | $297/page | — | If business serves 2+ cities but has no area-specific pages. |

**Client-facing reasoning:** "Your Google listing exists but it's only [X]% complete. Google rewards complete, active listings with higher placement in the map pack. Right now, [specific issues: only 3 photos / no posts since January / wrong category / your Yelp listing has an old phone number]. Every missing element is a reason Google ranks your competitors above you."

### Strong (Priority: NO ACTION)
**Evidence:** GBP fully optimized (15+ photos, complete service list, correct categories, business description, recent posts within 30 days), NAP consistent across major directories, schema markup on website.

**Recommend:** No Google Presence services needed. Note: "Google Presence is strong — listing is complete and active."

---

# CATEGORY 3 — PHONE & COMMUNICATION

## What to Observe

| Check | How to Verify |
|-------|---------------|
| Call handling | Call the business number. Does someone answer? Does it go to voicemail? Is there a professional greeting? |
| After-hours handling | Call after business hours. What happens? Voicemail? Nothing? |
| Missed call recovery | Ask the owner: "When you miss a call, what happens? Do you call back same day?" |
| Text capability | Text the business number. Do they respond? Can they even receive texts? |
| Unified communications | Ask: "Where do your leads come from? How many different apps/inboxes do you check?" |
| Response time | Ask: "When a new lead comes in — form fill, call, or message — how fast do you typically respond?" |
| Booking system | Can customers book online? Is there a scheduling link anywhere (website, GBP, social)? |

## Scoring

### Missing (Priority: HIGH)
**Evidence:** Calls go unanswered regularly (owner reports missing 5+ calls/day). No voicemail or unprofessional voicemail. No system to capture missed calls. No text capability on business number. No way for customers to book online. Owner reports leads "falling through the cracks."

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Missed Call Text-Back | `missed_call` | $0 | $39 | Immediate safety net — every missed call gets a text within 10 seconds. Cheapest, fastest win. |
| Voice AI Receptionist | `voice_ai` | $197 | $149 | AI answers every call 24/7, collects info, books appointments. Replaces the need for a human receptionist. |
| Online Booking | `booking` | $97 | $39 | Give customers a way to book without calling. Reduces phone dependency. |
| Unified Inbox | `unified_inbox` | $197 | $49 | If leads come from 3+ channels (phone, text, Facebook, email, forms) and owner is checking multiple apps. |

**Client-facing reasoning:** "You told us you're missing [X] calls a day while you're on jobs. 80% of people who hit voicemail never leave a message — they just call the next business on Google. Every missed call is a lost job. Missed Call Text-Back catches them in 10 seconds. Voice AI answers every call 24/7 so you never lose another lead."

### Weak (Priority: MEDIUM)
**Evidence:** Some calls are answered but after-hours coverage is nonexistent. Owner returns missed calls but not same-day. Texts go to personal phone with no tracking. No online booking. Response time is hours, not minutes.

**Recommend (select based on specific gaps):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Missed Call Text-Back | `missed_call` | $0 | $39 | If any calls go unanswered during business hours. |
| Voice AI Receptionist | `voice_ai` | $197 | $149 | If after-hours calls are missed entirely. |
| Online Booking | `booking` | $97 | $39 | If no way for customers to self-schedule. |
| SMS AI Assistant | `sms_ai` | $197 | $129 | If business receives texts but response time is slow or inconsistent. |

**Client-facing reasoning:** "You're catching most calls during the day, but [specific gap: after-hours calls go to voicemail / it takes you 3-4 hours to return missed calls / customers can't book online]. The businesses winning right now respond in under 60 seconds. Let's close that gap."

### Strong (Priority: NO ACTION)
**Evidence:** Calls are answered live or by a professional system during business hours. After-hours has a clear process (voicemail returned next morning, or answering service). Owner responds to texts within 30 minutes. Online booking exists and works. Leads from all channels are tracked in one place.

**Recommend:** No Phone & Communication services needed. Note: "Call handling and communication systems are solid."

---

# CATEGORY 4 — LEAD FOLLOW-UP

## What to Observe

| Check | How to Verify |
|-------|---------------|
| Speed to lead | Ask: "When a new lead comes in, how fast do you reach out?" Look for anything over 5 minutes. |
| Follow-up system | Ask: "If someone fills out a form or calls but doesn't book, what happens next? Do you have an automated follow-up?" |
| Email follow-up | Does the business send any automated emails after initial contact? |
| SMS follow-up | Does the business send text follow-ups to leads who didn't convert? |
| Lead tracking | Ask: "How do you track which leads you've followed up with?" (Spreadsheet? Memory? CRM? Sticky notes?) |
| Past customer outreach | Ask: "Do you reach back out to past customers? Seasonal reminders? Maintenance offers?" |

## Scoring

### Missing (Priority: HIGH)
**Evidence:** No automated follow-up of any kind. Owner relies on memory to call people back. No email sequences. No text follow-up. Leads that don't convert immediately are forgotten. No outreach to past customers.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Speed-to-Lead | `speed_to_lead` | $97 | $39 | Instant response (<60 seconds) to every new lead. 7x more likely to convert. |
| Email Nurture | `email_nurture` | $197 | $59 | Automated email sequence for leads who don't convert immediately. |
| SMS Nurture | `sms_nurture` | $197 | $59 | Text follow-up (98% open rate vs 20% for email). |

**Client-facing reasoning:** "Right now, if a lead doesn't book on the first call, they disappear. You have no system to follow up. Studies show it takes 5-8 touchpoints before most people buy. An automated follow-up sequence keeps you top of mind and converts leads that would otherwise go to a competitor."

### Weak (Priority: MEDIUM)
**Evidence:** Owner does some manual follow-up but it's inconsistent. Maybe sends a text back but no structured sequence. No email automation. Follows up with some leads but not all. No system for past customer outreach.

**Recommend (select based on specific gaps):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Speed-to-Lead | `speed_to_lead` | $97 | $39 | If response time is over 5 minutes. |
| Email Nurture | `email_nurture` | $197 | $59 | If no email follow-up exists. |
| SMS Nurture | `sms_nurture` | $197 | $59 | If text follow-up is manual/inconsistent. |

**Client-facing reasoning:** "You're doing some follow-up, but it's manual and things slip through. [Specific: you texted back 3 of the last 10 leads / no email sequence exists / you haven't contacted past customers in over a year]. Automating this means every lead gets followed up with — even when you're on a job."

### Strong (Priority: NO ACTION)
**Evidence:** Automated follow-up sequences in place (email and/or SMS). Leads that don't convert get a structured sequence. Response time under 5 minutes. Past customers receive regular outreach (seasonal, maintenance reminders).

**Recommend:** No Lead Follow-Up services needed. Note: "Follow-up systems are working — leads are being nurtured."

---

# CATEGORY 5 — SOCIAL MEDIA

## What to Observe

| Check | How to Verify |
|-------|---------------|
| Profiles exist? | Check Facebook business page and Instagram business profile. Do they exist? |
| Profile completeness | Are bios complete? Profile/cover photos professional? Contact info accurate? CTA buttons set up? |
| Posting frequency | When was the last post? How often do they post? Look at last 90 days. |
| Content quality | Are posts professional? Mix of content types? Or just random/sporadic? |
| Engagement | Any likes, comments, shares? Or posting to zero interaction? |
| Video content | Any Reels, TikToks, or Stories? Or only static posts? |

## Scoring

### Missing (Priority: MEDIUM)
**Evidence:** No Facebook business page or Instagram profile. Or profiles exist but have zero posts and look abandoned (no posts ever, or nothing in 6+ months).

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Social Profile Setup | `social_setup` | $147 | — | Create or fix profiles from scratch. Professional bios, photos, CTAs. |
| Social Media Posting | `social_posting` | $97 | $199 | 12-16 posts/month to build consistent presence. |

**Client-facing reasoning:** "You have no social media presence. When potential customers search for you on Facebook or Instagram — and they do — they find nothing, or an abandoned page. That signals 'this business might not be active.' A professional presence builds trust before someone ever calls you."

**Note:** Social media is important but rarely the #1 priority. Recommend after Website, Google Presence, and Phone are addressed. Priority = MEDIUM, not HIGH.

### Weak (Priority: LOW-MEDIUM)
**Evidence:** Profiles exist and have some posts, but posting is sporadic (less than 2x/month), content is low quality, or profiles are incomplete (missing bio, bad photos, no CTA buttons).

**Recommend (select based on specific gaps):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Social Profile Setup | `social_setup` | $147 | — | If profiles are incomplete (missing bio, bad photos, no CTA). |
| Social Media Posting | `social_posting` | $97 | $199 | If posting is less than 2x/month or content quality is poor. |
| Short-Form Video | `video` | $197 setup / $225/video | — | If no video content exists and competitors are posting Reels/TikTok. |

**Client-facing reasoning:** "Your social profiles exist but they're [specific: posting once a month / last post was 4 months ago / bio is incomplete / no video content]. Consistency matters more than perfection. 3-4 posts a week keeps you visible and builds trust."

### Strong (Priority: NO ACTION)
**Evidence:** Active profiles with consistent posting (2+ times/week), professional content, complete bios, engagement from followers, mix of content types.

**Recommend:** No Social Media services needed. Note: "Social media presence is active and professional."

---

# CATEGORY 6 — REVIEWS & REPUTATION

## What to Observe

| Check | How to Verify |
|-------|---------------|
| Google review count | Check GBP. How many reviews? |
| Google average rating | What's the star rating? |
| Review recency | When was the last review? Are reviews coming in regularly or did they stop months ago? |
| Review responses | Does the business respond to reviews? All of them? Only some? Only negative? |
| Review velocity | How many reviews in the last 90 days? Steady flow or stagnant? |
| Other platform reviews | Check Yelp, Facebook, BBB. Any presence? |
| Negative review handling | Are there negative reviews? How were they handled? Professional response or ignored? |
| Review request system | Ask: "How do you ask customers for reviews?" (Manual? Automated? Not at all?) |

## Scoring

### Missing (Priority: HIGH)
**Evidence:** Fewer than 5 Google reviews. No reviews in the last 90 days. No system to request reviews. Reviews on other platforms (Yelp, Facebook) are absent or negative. No responses to any reviews.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Review Requests | `review_system` | $97 | $59 | Automated SMS/email requests after every job. This is how you go from 2 reviews to 50. |
| Review Responses | `review_responses` | $0 | $39 | Professional response to every review within 24 hours. Signals active, caring business. |
| Reputation Monitoring | `rep_monitoring` | $0 | $29 | Know the moment any review is posted anywhere. |

**Check for Map Pack Combo:** If 3+ services from this category + Category 2 are recommended together, trigger Map Pack pricing.

**Client-facing reasoning:** "You have [X] Google reviews. Your top 3 competitors have [Y, Z, W]. Google uses review count, rating, and recency as a major ranking factor. Without a system to ask for reviews after every job, you're relying on the rare customer who goes out of their way. Most happy customers will leave a review — they just need to be asked."

### Weak (Priority: MEDIUM)
**Evidence:** 5-20 Google reviews but review velocity has slowed (fewer than 2/month). Average rating below 4.5. Some reviews go unresponded. No automated system — owner asks manually sometimes. No monitoring of other platforms.

**Recommend (select based on specific gaps):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Review Requests | `review_system` | $97 | $59 | If no automated system exists or review velocity is below 2/month. |
| Review Responses | `review_responses` | $0 | $39 | If more than 20% of reviews go unresponded. |
| Reputation Monitoring | `rep_monitoring` | $0 | $29 | If business doesn't know when reviews are posted on non-Google platforms. |

**Client-facing reasoning:** "You have [X] reviews which is a decent start, but [specific: you've only gotten 2 in the last 3 months / 6 reviews have no response / your rating dropped to 4.2]. An automated system keeps reviews flowing in consistently and a response to every review shows Google — and customers — that you're engaged."

### Strong (Priority: NO ACTION)
**Evidence:** 20+ Google reviews with 4.5+ rating. Reviews coming in at 2+ per month. All reviews responded to within 48 hours. Active presence on secondary platforms.

**Recommend:** No Reviews & Reputation services needed. Note: "Review presence is strong — consistent flow, good rating, active responses."

---

# CATEGORY 7 — REPEAT BUSINESS

## What to Observe

| Check | How to Verify |
|-------|---------------|
| Past customer database | Ask: "Do you have a list of past customers with contact info?" (Spreadsheet, CRM, phone contacts, or nothing?) |
| Re-engagement outreach | Ask: "When was the last time you reached out to a past customer who hasn't called in a while?" |
| Seasonal campaigns | Ask: "Do you run any seasonal promotions — spring tune-ups, winter specials, holiday offers?" |
| Referral program | Ask: "Do you have a way to reward customers who refer friends?" |
| Customer lifetime value awareness | Ask: "What percentage of your business is repeat customers vs. new?" |

## Scoring

### Missing (Priority: MEDIUM)
**Evidence:** No customer database beyond phone contacts. No outreach to past customers ever. No seasonal campaigns. No referral program. Owner has no idea what percentage is repeat business.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Past Customer Reactivation | `reactivation` | $197 | $79 | Re-engage dormant customers. Cheapest revenue — these people already trust you. |
| Seasonal Campaigns | `seasonal` | $97 | $59 | Automated seasonal pushes tied to the business cycle. |
| Referral Program | `referral` | $197 | $49 | Systematic word-of-mouth with tracking and rewards. |

**Client-facing reasoning:** "You have years of past customers who already know and trust you — but you're not reaching out to them. A reactivation campaign to your past customer list is the single cheapest way to generate revenue. These people don't need to be convinced you're good. They just need a reminder you exist."

### Weak (Priority: LOW-MEDIUM)
**Evidence:** Has some customer records but outreach is sporadic or manual. Maybe sends a text once in a while. No structured seasonal campaigns. No formal referral program.

**Recommend (select based on specific gaps):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| Past Customer Reactivation | `reactivation` | $197 | $79 | If no structured re-engagement in 6+ months. |
| Seasonal Campaigns | `seasonal` | $97 | $59 | If no seasonal promotions running. |
| Referral Program | `referral` | $197 | $49 | If no formal referral system. |

**Client-facing reasoning:** "You reach out to past customers occasionally, but there's no system. [Specific: you haven't contacted anyone from last year / no seasonal offers planned / customers refer friends but there's no tracking or reward]. Automating this means it happens every time, without you thinking about it."

### Strong (Priority: NO ACTION)
**Evidence:** Maintains customer database. Regular outreach to past customers (quarterly or better). Seasonal promotions planned and executed. Referral program in place with tracking.

**Recommend:** No Repeat Business services needed. Note: "Customer retention and re-engagement systems are working."

---

# CATEGORY 8 — CRM & PIPELINE

## What to Observe

| Check | How to Verify |
|-------|---------------|
| CRM exists? | Ask: "Where do you keep track of your leads and customers?" (CRM, spreadsheet, notepad, memory?) |
| Pipeline visibility | Ask: "Can you tell me right now how many open estimates or pending jobs you have?" |
| Lead source tracking | Ask: "Do you know where your leads come from — Google, Facebook, referrals, yard signs?" |
| Appointment reminders | Ask: "Do your customers get a reminder before their appointment?" |
| Integration with other tools | Ask: "Do you use QuickBooks, Jobber, or any other software? Does it talk to your lead tracking?" |

## Scoring

### Missing (Priority: MEDIUM)
**Evidence:** No CRM or lead tracking system. Leads tracked via memory, sticky notes, or scattered text messages. Owner cannot tell you how many open deals they have. No appointment reminders. No integration between tools.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| CRM Setup & Pipeline | `crm` | $497 | $79 | Central hub for every lead, customer, and deal. Visual pipeline so you always know where things stand. |
| Appointment Reminders | `appt_reminders` | $47 | $29 | Reduce no-shows by 60%. Automated SMS + email before every appointment. |

**Client-facing reasoning:** "Right now, your leads are scattered across texts, calls, and memory. You can't see at a glance how many estimates are pending or which leads need follow-up. A CRM with a visual pipeline means you see everything in one place — and nothing falls through the cracks."

### Weak (Priority: LOW-MEDIUM)
**Evidence:** Uses a basic system (spreadsheet, phone notes, or basic app) but it's not centralized. Some leads tracked, others forgotten. No pipeline stages. No appointment reminders. Tools don't integrate.

**Recommend (select based on specific gaps):**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| CRM Setup & Pipeline | `crm` | $497 | $79 | If no real pipeline exists or current system is a spreadsheet. |
| Appointment Reminders | `appt_reminders` | $47 | $29 | If no automated reminders before appointments. |
| Custom Integration | `integration` | $297 | $49 | If business uses other tools (QuickBooks, Jobber) that don't connect to lead tracking. |

**Client-facing reasoning:** "You're tracking some things in [spreadsheet/phone/app], but it's not giving you visibility into your pipeline. [Specific: you couldn't tell us how many open estimates you have / your QuickBooks doesn't know about your leads / customers aren't getting reminders]. A proper CRM connects everything so you can see and manage your business in one place."

### Strong (Priority: NO ACTION)
**Evidence:** Uses a CRM with pipeline stages. Can report on open deals and lead sources. Appointment reminders are automated. Tools are integrated where needed.

**Recommend:** No CRM services needed. Note: "CRM and pipeline management are in place and functional."

---

# CATEGORY 9 — AI SEARCH VISIBILITY

## What to Observe

| Check | How to Verify |
|-------|---------------|
| ChatGPT visibility | Ask ChatGPT: "Who is the best [service] in [city]?" and "Can you recommend a [service] company in [city]?" Does the business appear? |
| Perplexity visibility | Search on Perplexity: "[service] in [city]" and "best [service] near [city]." Is the business mentioned? |
| Google AI Overviews | Search on Google: "[service] in [city]." Does an AI Overview appear? Is the business cited in it? |
| Schema markup | Check website source code or use Google's Rich Results Test. Is there LocalBusiness schema? Service schema? FAQ schema? |
| Authoritative mentions | Beyond directories, does the business appear on any authoritative sites (local news, industry associations, chamber of commerce, guest articles)? |
| Content structure | Is the website content structured in a way AI can parse? Clear headings, FAQ sections, service descriptions with specifics? |

## Scoring

### Missing (Priority: LOW-MEDIUM)
**Evidence:** Business does not appear in any AI search results (ChatGPT, Perplexity, Google AI Overviews). No schema markup on website. No authoritative mentions beyond basic directory listings. Website content is not structured for AI parsing.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| AI Search Visibility (AEO/GEO) | `aeo` | $497 | $297 | Full AI search optimization — schema, content restructuring, entity building, ongoing monitoring. |

**Client-facing reasoning:** "More and more people are asking AI — ChatGPT, Perplexity, Google's AI — to recommend local businesses. Right now, when someone asks 'Who's the best [service] in [city]?' you don't come up. Your competitors who show up in AI search results are getting leads you'll never know about. This is the next frontier of local search."

**Note:** AI Search Visibility is an emerging channel. It's important but not urgent for most small businesses. Recommend AFTER Website, Google Presence, Phone, and Reviews are addressed. Priority = LOW-MEDIUM unless the client specifically asks about AI search or operates in a competitive market where competitors are already optimizing for it.

### Weak (Priority: LOW)
**Evidence:** Business appears occasionally in AI results but inconsistently. Some schema exists but is incomplete. Few authoritative mentions. Content is partially structured.

**Recommend:**
| Service | ID | Setup | Monthly | Reasoning |
|---------|-----|-------|---------|-----------|
| AI Search Visibility (AEO/GEO) | `aeo` | $497 | $297 | Improve existing AI presence with full optimization. |

**Client-facing reasoning:** "You're showing up in some AI searches but not consistently. [Specific: ChatGPT mentions you but with outdated info / your schema markup is missing service details / you have no FAQ content AI can pull from]. Full AEO optimization ensures you're cited accurately and frequently."

### Strong (Priority: NO ACTION)
**Evidence:** Business consistently appears in AI search results with accurate information. Schema markup is complete and validated. Authoritative mentions exist. Content is structured for AI parsing.

**Recommend:** No AI Search services needed. Note: "AI search visibility is strong."

---

# PRIORITY HIERARCHY

When multiple categories score Missing or Weak, recommend services in this priority order:

1. **Phone & Communication** (Category 3) — If they can't answer the phone, nothing else matters. Fix this first.
2. **Google Presence** (Category 2) — This is where 90% of local leads start. Must be solid.
3. **Reviews & Reputation** (Category 6) — Reviews directly impact map pack ranking and conversion.
4. **Website** (Category 1) — Gives leads somewhere to go and converts traffic.
5. **Lead Follow-Up** (Category 4) — Captures value from leads already coming in.
6. **CRM & Pipeline** (Category 8) — Organizes and tracks everything.
7. **Repeat Business** (Category 7) — Extracts more value from existing customer base.
8. **Social Media** (Category 5) — Builds trust and visibility but not where most leads originate.
9. **AI Search Visibility** (Category 9) — Emerging channel, important but not urgent for most.

**Estimator agent should present recommendations in this priority order**, not in category number order. The estimate should lead with the most impactful fixes.

---

# MAP PACK COMBO DETECTION

**Trigger:** 3 or more services recommended from Category 2 (Google Presence) + Category 6 (Reviews & Reputation) combined.

**Qualifying services:**
- From Category 2: `gbp`, `gbp_posts`, `citation_cleanup`, `citation_monitoring`, `city_pages`
- From Category 6: `review_system`, `review_responses`, `rep_monitoring`

**If triggered:**
- Replace individual line items with: **"Local Map Pack Solution"**
- Pricing: $349/mo + $497 setup
- Description: "Complete Google visibility package — full GBP optimization, weekly posts, citation management, automated review generation, review responses, and reputation monitoring. Everything you need to dominate the local map pack."

**If NOT triggered (fewer than 3 qualifying services):**
- List services individually with standard pricing
- Apply normal bundle discounts

---

# ESTIMATOR AGENT INPUT/OUTPUT FORMAT

## Input: Audit Scores JSON
```json
{
  "client_name": "Acme HVAC Services",
  "client_industry": "HVAC",
  "client_location": "Chattanooga, TN",
  "client_contact": "John Smith",
  "client_email": "john@acmehvac.com",
  "client_phone": "423-555-1234",
  "audit_date": "2026-04-03",
  "scores": {
    "website": { "score": "missing", "evidence": ["No website found."] },
    "google_presence": { "score": "weak", "evidence": ["GBP claimed but only 3 photos."] },
    "phone_communication": { "score": "missing", "evidence": ["Missing 5-10 calls daily."] },
    "lead_followup": { "score": "missing", "evidence": ["No follow-up system."] },
    "social_media": { "score": "weak", "evidence": ["Last post 4 months ago."] },
    "reviews_reputation": { "score": "missing", "evidence": ["Only 2 Google reviews."] },
    "repeat_business": { "score": "missing", "evidence": ["No past customer outreach."] },
    "crm_pipeline": { "score": "missing", "evidence": ["Leads tracked via memory."] },
    "ai_search": { "score": "missing", "evidence": ["Not in any AI search results."] }
  }
}
```

## Output: Recommended Services JSON
```json
{
  "client_name": "Acme HVAC Services",
  "estimate_id": "SF-20260403",
  "estimate_date": "2026-04-03",
  "valid_days": 30,
  "recommended_services": [
    {
      "id": "missed_call",
      "name": "Missed Call Text-Back",
      "description": "Automatic text sent within 10 seconds when a call goes unanswered",
      "setup_fee": 0,
      "monthly_fee": 39,
      "category": "phone_communication",
      "priority": "high",
      "reasoning": "Owner reports missing 5-10 calls daily."
    }
  ],
  "map_pack_combo": false,
  "subtotal_monthly": 425,
  "subtotal_setup": 1185,
  "service_count": 6,
  "discount_tier": "15%",
  "discount_amount": 63.75,
  "total_monthly": 361.25,
  "total_setup": 1185
}
```

---

# WHAT NOT TO RECOMMEND

1. **Never recommend AI Search Visibility if Website is Missing.** Can't optimize for AI search without a website.
2. **Never recommend Social Media Posting if Social Profiles are Missing.** Set up profiles first.
3. **Never recommend Citation Monitoring without Citation Cleanup.** Clean up first, then monitor.
4. **Never recommend more than 8-10 services in a single estimate.** Prioritize top 6-8 by hierarchy. Rest goes to Phase 2.
5. **Never recommend services for categories scored "Strong."**
6. **Google/Facebook Ads — ON HOLD.** No service recommendation until ad management added to catalog.
7. **Short-Form Video is an upsell, not a default recommendation.**

---

# PHASED RECOMMENDATION RULE

If total recommended services exceed 8, split into phases:

**Phase 1 (Immediate — first estimate):** Top 6-8 services by priority hierarchy.
**Phase 2 (30-60 days — follow-up estimate):** Remaining services.

Phase 2 services documented in JSON output but NOT shown on initial HTML estimate.

---

# Last Updated
April 3, 2026 — Scoring Rubric v1.0. Aligned with Service Catalog v2.1 and service_menu.json v2.1.