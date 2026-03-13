# Southern Bro Enterprises Website Improvement Plan

## Purpose

This document is a professional working plan for auditing and improving the Southern Bro Enterprises website in Squarespace while keeping the current brand identity intact.

It is built around the current logo inventory in `public/LOGOS`, the existing site structure in this project, and the internship tasks provided by management.

## Active Brand and Service Inventory

Based on the logos currently available in `C:\Southern\southern-bro-request-hub\public\LOGOS`, the website should be structured around these active brands and services for now:

| Logo File | Brand / Service | Recommended Website Role | Notes |
| --- | --- | --- | --- |
| `SouthernBro-Enterprises-Logo.png` | Southern Bro Enterprises LLC | Parent company page / brand overview | Main umbrella brand |
| `SouthernBro-Creations-Logo.png` | Southern Bro Creations / Wax Melt Bros | Dedicated product or creations page | Distinct creative/product identity |
| `SouthernBro-Delivery-Catering-Logo.png` | Southern Bro Delivery & Catering | Dedicated service page | Matches current delivery request flow |
| `SouthernBro-Handyman-Services-Logo.png` | Southern Bro Handyman Services | Dedicated service page | Home and property repair / maintenance |
| `SouthernBro-Landscaping-Logo.png` | Southern Bro Landscaping | Dedicated service page | Lawn care and outdoor property service |
| `TicketVibez-Logo.png` | Ticket Vibez | Dedicated event service page | Ticketing and event support brand |
| `VA-Recovery-Services-Logo.png` | VA Recovery Services | Community programs page and dedicated brand page | Includes HOPE Grant mission emphasis |

### Important note

VaBizHelp was mentioned in the company description, but it does not currently appear in the logo folder provided for this project. Based on your instruction to use the logos folder as the active list for now, I did not place VaBizHelp in the primary proposed navigation. It can be added later once branding assets and page content are approved.

## Brand Direction to Keep Consistent

- Keep Southern Bro as the parent identity across the site.
- Use one shared page structure across all brands so the site feels unified.
- Let each brand keep its own accent style from the logo while preserving one overall Southern Bro layout system.
- Use bold CTA buttons consistently: `Request Service`, `Book Now`, `Get Help`, or `Contact Us`.

## Supervisor Visual Direction

Based on the reference graphics provided, the website design should follow this visual direction:

- Dark, high-contrast background style instead of a plain white business layout
- Strong purple and magenta glow effects that match the Southern Bro master branding
- Accent colors drawn from the service logos, especially electric blue and gold
- Large logo visibility on the homepage and service overview sections
- A dramatic, premium, energetic look rather than a basic corporate template
- Service sections that visually group each brand with its logo and a short service summary
- Strong contrast between text and background so the site still feels readable and professional

### Design interpretation for Squarespace

The goal is not to copy the flyer exactly. The goal is to translate that same energy into a cleaner website version that is easier to read, easier to navigate, and better for customers using phones or desktops.

### Recommended design rules

- Use a deep black-purple background in hero and CTA sections
- Use bright magenta or violet for buttons, highlights, dividers, and glow effects
- Use blue as a supporting accent mainly for Ticket Vibez and secondary highlight areas
- Use gold sparingly for premium borders, icons, thin dividers, or special emphasis
- Keep body text white or light gray for readability
- Avoid placing too much text directly over busy backgrounds
- Use background overlays on image sections so content stays readable

## Current Website Snapshot

### Existing pages found in the project

- Home
- Delivery
- Services
- Thank You
- Admin

### Current observations

- The current navigation is still set up like a request hub, not a full multi-brand company site.
- There are no dedicated public pages yet for each brand shown in the logos folder.
- The homepage focuses on request forms more than explaining the company structure.
- The service cards are broad categories and do not clearly introduce all active brands.
- The delivery and service forms currently simulate submission and redirect to the thank-you page, but they do not save data to a live system.
- The admin page is a demo view with mock request data.
- There are visible text-encoding issues in the current content, such as broken characters in the hero and footer copy.

### Current functionality check

- `npm run lint` passed on March 13, 2026.
- `npm run build` passed on March 13, 2026.
- Current internal navigation links point to existing routes.
- Form submit buttons currently work as front-end demo actions only.

## Immediate Priority Recommendations

- Rebuild the homepage around the full Southern Bro Enterprises brand story instead of only request forms.
- Create dedicated public pages for all seven active brands and services identified from the logo folder.
- Replace the current `Delivery` and `Services` navigation with a clearer `Brands & Services` structure.
- Remove internal admin access from public navigation and public confirmation pages.
- Replace demo-only form handling with approved Squarespace forms, email routing, or CRM collection before launch.
- Fix visible text-encoding issues and clean up public-facing copy before publishing.
- Shift the site visuals to match the supervisor's preferred dark purple neon brand direction.

## 1. Website Audit Template

Use one copy of this template for every page on the current site and every draft page you create before publishing.

### Page Review Template

**Page Name:**  
**Purpose of the Page:**  
**Current Content:**  
**Issues Found:**  
**Broken Links or Buttons:**  
**UX Problems:**  
**Content Improvements:**  
**Design Improvements:**  
**Priority Level:** High / Medium / Low  
**Status:** Not Started / In Review / Ready for Update / Completed  

### Suggested page list to audit

- Home
- About Southern Bro Enterprises
- Brands / Services Overview
- Southern Bro Enterprises
- Southern Bro Creations / Wax Melt Bros
- Southern Bro Delivery & Catering
- Southern Bro Handyman Services
- Southern Bro Landscaping
- Ticket Vibez
- VA Recovery Services
- Community Programs
- Contact
- Request Service
- Thank You / Confirmation page
- Footer links and contact links

## 2. Button / Link Testing Template

Use this table for every navigation item, button block, form button, social icon, phone link, email link, and footer link.

| Page | Button Text | Expected Destination | Actual Destination | Working (Yes/No) | Issue | Suggested Fix |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

## 3. Current Button and Functionality Snapshot

This is a starter reference based on the current project files.

| Page | Button Text | Expected Destination | Actual Destination | Working (Yes/No) | Issue | Suggested Fix |
| --- | --- | --- | --- | --- | --- | --- |
| Home | Start Delivery Request | `/delivery` | `/delivery` | Yes | None in current build | Keep until Squarespace delivery page is ready |
| Home | Start Service Request | `/services` | `/services` | Yes | None in current build | Replace with brand-aware request page later |
| Hero | Request Delivery / Pickup | `/delivery` | `/delivery` | Yes | Copy is narrower than current multi-brand scope | Update CTA after dedicated brand pages exist |
| Hero | Request a Service | `/services` | `/services` | Yes | Generic wording | Update to `Explore Services` or `Request Help` |
| Navbar | Home | `/` | `/` | Yes | None | Keep |
| Navbar | Delivery | `/delivery` | `/delivery` | Yes | Too narrow for full business structure | Move into Brands / Services dropdown |
| Navbar | Services | `/services` | `/services` | Yes | Too broad and not brand-specific | Replace with `Brands & Services` |
| Navbar | Admin | `/admin` | `/admin` | Yes | Public nav should not expose internal admin in live site | Remove from public navigation |
| Delivery Form | Submit Request | Thank-you confirmation | `/thank-you` | Yes | Demo-only flow, no live data save | Connect form to Squarespace form or CRM |
| Service Form | Submit Service Request | Thank-you confirmation | `/thank-you` | Yes | Demo-only flow, no live data save | Connect form to Squarespace form or CRM |
| Thank You | Back to Home | `/` | `/` | Yes | None | Keep |
| Thank You | View Admin Demo | `/admin` | `/admin` | Yes | Not suitable for public live flow | Remove from public confirmation page |

## 4. Standard Brand Page Structure

Create each brand page from the same layout so the site stays professional and consistent.

### Recommended layout

1. **Hero Section**
   Brand logo, clear headline, short tagline, and a primary CTA button.

   Example:
   `Reliable support from [Brand Name] for customers who need [main result].`

   Primary CTA:
   `Request Service` or `Book Now`

   Secondary CTA:
   `Contact Us` or `Learn More`

2. **Brand Description**
   A short section explaining what the brand is, how it connects to Southern Bro Enterprises, and what makes it different.

3. **Services Offered**
   Use 3 to 6 service cards with simple titles and one-sentence explanations.

4. **Who the Service Is For**
   Explain the audience clearly, such as homeowners, business owners, event customers, or community members.

5. **How It Works**
   Use a 3-step section:
   `Submit Request`
   `We Review and Confirm`
   `Service Is Scheduled or Delivered`

6. **Request / Book Service Button**
   Repeat the CTA lower on the page so visitors do not have to scroll back up.

7. **Contact Section**
   Include phone, email, contact form, service area, and any preferred booking method.

### Reusable content block template

**Hero Headline:**  
`[Brand Name] helping [target audience] with [main service outcome].`

**Brand Description:**  
`[Brand Name] is part of Southern Bro Enterprises and provides [services] for [audience] in a simple, reliable, and professional way.`

**Services Offered:**  
- Service 1  
- Service 2  
- Service 3  
- Service 4  

**Who It Is For:**  
`This service is designed for [audience].`

**How It Works:**  
1. Customer submits request  
2. Team reviews details and confirms next steps  
3. Service is scheduled, delivered, or fulfilled  

**Primary CTA Button:**  
`Request Service`

**Contact Section:**  
`Phone | Email | Contact Form | Service Area`

## 5. Recommended Homepage Structure

The homepage should act as the front door to the full company, not only the request forms.

### Recommended section order

1. **Hero Section with Main CTA**
   Headline that introduces Southern Bro Enterprises as a multi-service and community support company.

   Recommended CTA buttons:
   `Explore Brands`
   `Request a Service`

   Recommended visual style:
   Large parent logo, dark cosmic or gradient background, soft purple glow, and one short line about serving Lynchburg, VA and surrounding Virginia areas.

2. **About Southern Bro Enterprises**
   Short overview of the parent company and its mission across business support, property help, delivery support, event services, and community programs.

3. **Overview of Brands / Services**
   A visual brand grid using the current logo set:
   - Southern Bro Enterprises
   - Southern Bro Creations / Wax Melt Bros
   - Southern Bro Delivery & Catering
   - Southern Bro Handyman Services
   - Southern Bro Landscaping
   - Ticket Vibez
   - VA Recovery Services

   Recommended visual style:
   Use card sections with logo on one side and 3 to 5 short service bullets on the other side, similar to the supervisor reference image but cleaner and easier to scan.

4. **Core Services Overview**
   Group the brands into easy customer categories:
   - Business and company support
   - Delivery and catering
   - Property and outdoor services
   - Event and ticket support
   - Community and recovery support

5. **How the Request System Works**
   A simple 3-step process that explains how customers contact the business, how requests are reviewed, and how service is scheduled.

6. **Community Programs Section**
   Feature VA Recovery Services and the HOPE Grant initiative as a highlighted community impact section.

   Recommended visual style:
   Gold and navy accents can be added here because the VA Recovery Services logo supports a more formal community-program look.

7. **Final Call to Action**
   End with a strong conversion section:
   `Need help from Southern Bro Enterprises? Start your request today.`

### Homepage goals

- Clarify what the company does within the first screen.
- Separate each brand without making the site feel disconnected.
- Make the next action obvious for every visitor.
- Keep the Southern Bro brand identity visible throughout the page.
- Match the boss-approved purple neon brand aesthetic in a cleaner website format.

## 5A. Homepage Section Draft Based on Supervisor Reference

This is the closest website version of the flyer layout you were shown.

### Section 1: Hero

Headline:
`Southern Bro Enterprises LLC`

Subheadline:
`Business services, property support, delivery solutions, event services, and community programs`

Support line:
`Serving Lynchburg, VA and the Virginia region`

Buttons:
- `Explore Brands`
- `Request Service`

### Section 2: Company Overview and Services Summary

Short intro paragraph explaining that Southern Bro Enterprises is the parent company connecting multiple specialized brands under one trusted business umbrella.

### Section 3: Brand Overview Grid

Each block should include the logo, one-sentence description, and 3 to 5 bullet points.

Recommended order:

1. Southern Bro Enterprises
   - Business start-ups
   - Business consulting
   - Operational support
   - Logistics and management aid

2. Southern Bro Delivery & Catering
   - Event catering
   - Personal shopping
   - Logistics delivery
   - Food and scheduled delivery services

3. Southern Bro Handyman Services
   - Furniture assembly
   - Fixture installation
   - Property maintenance
   - Basic repair support

4. Southern Bro Landscaping
   - Lawn maintenance
   - Seasonal cleanup
   - Outdoor property maintenance
   - Recurring service contracts

5. Southern Bro Creations / Wax Melt Bros
   - Wax melt products
   - Custom fragrances
   - Gift bundles
   - Seasonal scent collections

6. Ticket Vibez
   - Event ticket support
   - Ticket bundles
   - Community event access support
   - Promotional campaigns

7. VA Recovery Services
   - Community support
   - Stability programs
   - Recovery assistance
   - Advocacy initiatives

### Section 4: How to Get Started

Use 3 simple columns:

1. Choose a brand or service
2. Submit a request or contact the team
3. Receive confirmation and next steps

### Section 5: Service Area and Contact

Include:
- Service area: Lynchburg, VA and Virginia service region
- Phone number
- Website
- Contact form button

### Section 6: Final Call To Action

Recommended CTA:
`Need help from Southern Bro Enterprises? Contact us today to get started.`

## 6. Navigation Structure Proposal

Keep the top navigation simple and easy to scan.

### Primary navigation

- Home
- About
- Brands & Services
- Community Programs
- Request Service
- Contact

### Suggested dropdown under `Brands & Services`

- Southern Bro Enterprises
- Southern Bro Creations / Wax Melt Bros
- Southern Bro Delivery & Catering
- Southern Bro Handyman Services
- Southern Bro Landscaping
- Ticket Vibez
- VA Recovery Services

### Suggested site map

- Home
- About Southern Bro Enterprises
- Brands & Services
- Southern Bro Enterprises
- Southern Bro Creations / Wax Melt Bros
- Southern Bro Delivery & Catering
- Southern Bro Handyman Services
- Southern Bro Landscaping
- Ticket Vibez
- VA Recovery Services
- Community Programs
- Request Service
- Contact

### Navigation cleanup recommendations

- Remove `Admin` from the public website navigation.
- Replace generic `Services` with `Brands & Services`.
- Add a visible `Request Service` button in the header.
- Keep footer navigation consistent with the main pages.

## 6A. Squarespace Style Guide

### Suggested color palette

These are recommended website colors based on the supervisor reference images and logo set.

| Use | Suggested Color | Hex |
| --- | --- | --- |
| Primary background | Deep space black | `#090312` |
| Secondary background | Dark purple | `#1A0830` |
| Primary brand color | Neon magenta-purple | `#C129FF` |
| Secondary brand color | Bright violet | `#8E2BFF` |
| Highlight glow | Electric pink | `#FF4FD8` |
| Accent blue | Ticket Vibez blue | `#1EA7FF` |
| Premium accent | Soft gold | `#D4A84F` |
| Main text | White | `#FFFFFF` |
| Secondary text | Light lavender gray | `#D9D1E8` |

### Suggested Squarespace usage

- Header background: dark purple or near-black
- Button color: neon purple with white text
- Button hover: brighter pink-purple glow
- Main page background: black-purple gradient
- Card background: dark translucent purple
- Card border: soft violet or gold line
- Section dividers: glow lines or thin gold separators
- Footer: dark background with high-contrast white text

### Suggested font direction

- Headings: bold, modern, high-impact sans serif
- Body text: clean sans serif with strong readability
- Avoid script fonts for main content blocks
- Use all-caps sparingly for labels and section headers

### Design warning

Because the flyer is visually dense, the live website should use more spacing, fewer words per block, and stronger mobile readability than the graphic examples.

## 7. Weekly Internship Work Plan

This version is structured for about 30 hours total.

| Day | Focus | Work Items | Time |
| --- | --- | --- | --- |
| Day 1 | Website audit | Review all current pages, note missing content, record UX issues, list pages that need restructuring | 4.5 hours |
| Day 2 | Button and link testing | Test all nav links, buttons, forms, contact links, and footer links; document failures and fixes | 4.0 hours |
| Day 3 | Brand and page planning | Organize active brands from logo inventory; draft page goals and content sections for each brand | 4.5 hours |
| Day 4 | Draft page creation | Build draft page outlines in Squarespace for each approved brand using one shared layout | 5.0 hours |
| Day 5 | Homepage and navigation improvements | Rework homepage section order, improve CTA flow, and update site navigation structure | 4.0 hours |
| Day 6 | Content cleanup and branding review | Fix wording, remove clutter, standardize button text, keep design aligned with Southern Bro branding | 4.0 hours |
| Day 7 | Final QA and proposal prep | Prepare final proposal, summarize findings, create before/after notes, and send supervisor update | 4.0 hours |
|  |  | **Total** | **30.0 hours** |

### If you need a 25-hour version

- Reduce Day 4 draft-page work from 5.0 hours to 3.0 hours.
- Reduce Day 6 cleanup work from 4.0 hours to 3.0 hours.

### If you need a 35-hour version

- Add more time to page drafting, image optimization, and final Squarespace QA.

## 8. Timesheet Template

| Date | Task Description | Hours | Minutes | Total Time |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

## 9. Proposal Document Outline

**Document Title:** `Southern Bro Enterprises Website Improvement Proposal`

1. Introduction
   Briefly explain the purpose of the website improvement project and the need for a clearer multi-brand structure.

2. Current Website Observations
   Summarize the current website structure, branding strengths, and major usability gaps.

3. Issues Found
   Document navigation problems, unclear page hierarchy, missing brand separation, broken links, weak CTA placement, and any functionality concerns.

4. Proposed Site Structure
   Present the new navigation, page hierarchy, and recommended page relationships.

5. Brand Page Improvements
   Explain the standard layout for each brand page and how each one will support booking or service requests.

6. Button and Functionality Fixes
   Summarize all link/button testing findings and the fixes needed before publishing.

7. User Experience Improvements
   Explain how the updated structure will improve clarity, ease of use, and conversion.

8. Next Steps
   Outline the implementation order, review process, and recommended approval steps.

## 10. Professional Update Email Draft

**Subject:** Southern Bro Enterprises Website Improvement Progress Update

Hello [Supervisor Name],

I wanted to share a progress update on the website improvement project.

So far, I have reviewed the current site structure, identified the active brands and services based on the approved logo folder, and organized a working improvement plan for the website. Based on the current logo assets, the site should presently be structured around Southern Bro Enterprises, Southern Bro Creations / Wax Melt Bros, Southern Bro Delivery & Catering, Southern Bro Handyman Services, Southern Bro Landscaping, Ticket Vibez, and VA Recovery Services.

I also prepared templates for page auditing, button and link testing, internship time tracking, and the final proposal document. In my initial review, I found that the current site structure is still centered mainly around request forms and does not yet fully separate the company brands into dedicated pages. I also noted that the public navigation can be improved to better organize the brands, community programs, and contact flow.

My next steps are to complete the page-by-page audit, test all buttons and links, create draft page structures for each brand, and prepare a more detailed recommendation for homepage and navigation improvements while keeping the Southern Bro branding consistent.

Please let me know if you would like me to prioritize any specific brand or service page first.

Thank you,

[Your Name]

## 11. Recommended Next Actions

- Start with the homepage, navigation, and brand overview because those changes affect the entire site structure.
- Build the brand pages next using one repeatable Squarespace page layout.
- Test every button again after each page is drafted, not only at the end.
- Keep a running issue log so your final proposal shows both problems found and solutions proposed.
