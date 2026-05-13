# AkamaiPOS Figma Blueprint

This document maps the current website into one Figma file with all screens, shared components, and prototype flows in a single place.

## Goal

Build one Figma file that contains:

- desktop and mobile versions of every route
- shared components and variants
- light and dark theme references
- prototype links for the main user journeys

## Current App Surface

The React client currently has four public routes:

- `/` Home
- `/hardware` POS Hardware
- `/suppliers` Suppliers
- `/contact` Contact Us

Shared site-level UI:

- sticky header with brand, nav links, Book a Demo CTA, theme toggle, and mobile menu
- ambient background with dot matrix wave, blobs, and grid overlay
- shared footer with Contact Support link
- live chat floating action button via Tawk widget
- scroll reveal animation on section content

## Recommended Single Figma File Structure

Create one Figma file named `AkamaiPOS Website Prototype` with these Figma pages:

1. `00 Cover`
2. `01 Foundations`
3. `02 Components`
4. `03 Desktop Screens`
5. `04 Mobile Screens`
6. `05 Prototype Flows`
7. `06 Notes and Handoff`

## Foundations

### Frame sizes

- Desktop: `1440 x variable height`
- Tablet reference: `1024 x variable height`
- Mobile: `390 x variable height`

### Typography

- Heading font: `Outfit`
- Body font: `Manrope`

Suggested text styles:

- `Display / Hero`: 72, 700, -2%
- `H1 / Page`: 56, 700, -2%
- `H2 / Section`: 40, 700, -1%
- `H3 / Card`: 24, 700
- `Body / Large`: 20, 500, 175%
- `Body / Default`: 16, 500, 170%
- `Label / Eyebrow`: 12, 700, 7% uppercase
- `Button / Default`: 16, 700

### Core color tokens

Light theme:

- `Primary Blue`: `#00A8C5`
- `Secondary Orange`: `#FF5733`
- `Tropical Teal`: `#00E0C8`
- `Palm Green`: `#1B8C5A`
- `Deep Ocean Navy`: `#001E2B`
- `Background`: `#EAF9F7`
- `Text Main`: `#001E2B`
- `Text Soft`: `#2D6070`
- `Sand Beige`: `#FDF0DC`
- `White`: `#FFFFFF`

Dark theme:

- `Primary Blue Dark`: `#00D4F0`
- `Secondary Orange Dark`: `#FF6B47`
- `Tropical Teal Dark`: `#00FFE8`
- `Background Dark`: `#071418`
- `Text Main Dark`: `#D8F4F7`
- `Text Soft Dark`: `#6BB8C8`

### Radii

- `Radius LG`: 28
- `Radius MD`: 18
- `Radius SM`: 12
- `Pill`: 999

### Effects

- `Shadow Soft`: `0 20 45 0 rgba(0, 30, 43, 0.12)`
- `Shadow Elevated`: `0 34 60 0 rgba(0, 30, 43, 0.20)`
- glass border: `1px rgba(0, 51, 77, 0.10 to 0.22)`
- nav blur: `14px`

### Background system

Recreate these as editable decorative components:

- full-page gradient background
- three blurred radial blobs
- faint grid overlay
- dot matrix wave illustration layer

## Component Library

Build the following as reusable components with variants where noted.

### Navigation

- Header / Desktop / Light
- Header / Desktop / Dark
- Header / Mobile Closed / Light
- Header / Mobile Open / Light
- Header / Mobile Closed / Dark
- Header / Mobile Open / Dark
- Brand mark with palm icon
- Nav link default
- Nav link active
- Theme toggle light
- Theme toggle dark

### Buttons

- Button / Primary / Default
- Button / Primary / Hover
- Button / Ghost / Default
- Button / Nav CTA / Default
- Button / Phone CTA / Default

### Common UI

- Eyebrow pill
- Footer
- Section split layout with media left
- Section split layout with media right
- KPI card
- Badge chip
- Coverage chip
- Brand chip
- Service card
- Supplier logo card
- Contact info card
- Input field
- Select field
- Textarea field
- Floating chat FAB

### Visual modules

- Finance analytics card
- Experience orbit graphic
- Hawaii map module
- Brand cloud grid
- Code editor visual
- Cloud support rack visual
- Monitor support status visual
- Services curve graphic
- Ticker band
- Coverage band
- Dev band
- CTA band
- Support stats band

## Desktop Screen Inventory

Use one long frame per route, plus one or two state frames when interaction changes the layout.

### `Home / Desktop / Light`

Sections in order:

1. Sticky header
2. Hero with headline, supporting copy, primary CTA, secondary CTA
3. Ticker band with product/service pills
4. Cost Saving Revenue Growth split section with analytics visual
5. Our Experience split section with orbit visual
6. Coverage band with location chips
7. Service Area split section with Hawaii map
8. Third-party Systems split section with partner brand chips
9. Dev band with four service highlights
10. Custom Programming split section with code visual
11. Computer Support split section with cloud/server visual
12. Support stats band
13. Services grid with curve illustration
14. CTA band with phone number
15. Expert Support split section with monitor visual
16. Footer
17. Floating Live Chat button

### `Home / Desktop / Dark`

Duplicate the light frame and swap color styles only. Keep structure identical.

### `Hardware / Desktop / Light`

Sections in order:

1. Sticky header
2. Page hero
3. Six hardware showcase sections alternating image and text
4. Footer CTA area with `Ask About Hardware Pricing`
5. Footer
6. Floating Live Chat button

Hardware sample cards to include:

- Akamai Counter Pro
- Akamai Flex Mini
- Akamai Core Hub
- Akamai Kitchen Display
- Akamai Scanner Plus
- Akamai Drawer Secure

### `Suppliers / Desktop / Light`

Sections in order:

1. Sticky header
2. Page hero
3. Supplier logo grid
4. Coverage/support card with phone and CTA
5. Footer
6. Floating Live Chat button

Use a logo wall layout with repeated supplier logo card components. Current data includes Oracle, NCR, Toshiba, Posiflex, POSX, Epson, Zebra, Honeywell, Verifone, Ingenico, and many more.

### `Contact / Desktop / Light`

Sections in order:

1. Sticky header
2. Page hero
3. Contact info card for phone support
4. Two-column contact form
5. Footer
6. Floating Live Chat button

Form fields:

- First Name
- Last Name
- Company Name
- Type of Business
- How did you hear about us?
- Phone Number
- Message
- Submit button

### Interaction state frames

Add these extra desktop state frames:

- `Header / Mobile Nav Open Reference`
- `Contact / Form Filled`
- `Contact / Submit Intent` using a visual note that submission opens the default mail app
- `Chat FAB / Hover`

## Mobile Screen Inventory

Build mobile versions for the full route set.

### `Home / Mobile / Light`

- same content order as desktop
- collapsed navigation
- stacked split sections
- ticker pills wrapped instead of marquee-style motion
- CTA and support bands stacked vertically

### `Home / Mobile / Dark`

- duplicate mobile light and swap color styles

### `Hardware / Mobile / Light`

- stacked hardware sections
- full-width image cards
- compact CTA spacing

### `Suppliers / Mobile / Light`

- 2-column or single-column logo grid depending on readability
- stacked coverage card

### `Contact / Mobile / Light`

- single-column form
- full-width submit button

### Mobile interaction state frames

- `Mobile Nav / Closed`
- `Mobile Nav / Open`
- `Chat FAB / Default`

## Prototype Map

Wire these interactions in the `05 Prototype Flows` page.

### Primary navigation flow

- Brand logo -> Home
- Home nav -> Home
- POS Hardware nav -> Hardware
- Suppliers nav -> Suppliers
- Contact Us nav -> Contact
- Footer `Contact Support` -> Contact

### Primary CTA flow

- `Start Your Rollout` -> Contact
- `Talk to an Expert` -> Contact
- `Get a Free Consultation` -> Contact
- `View Our Partners` -> Suppliers
- `Start a Project` -> Contact
- `Get IT Support` -> Contact
- `Ask About Hardware Pricing` -> Contact
- `Become a Partner` -> Contact
- `Book a Demo` -> Contact

### Phone interactions

- every phone CTA should be marked as external action `tel:+18088438000`

### Theme interactions

- theme toggle should move between light and dark companion frames on Home
- in components, keep theme toggle as a two-state interactive component

### Chat interactions

- floating `Live Chat` FAB can open an overlay reference frame labelled `External Tawk Widget`
- note that the production widget is third-party and not fully represented inside the React route tree

### Contact form interaction

- button `Contact Our Team` -> `mailto:` handoff note frame
- annotate that the website opens the visitor's default mail client instead of submitting to an internal thank-you page

## Suggested Figma Page Layout

### `00 Cover`

- project title
- one desktop hero mock
- one mobile hero mock
- short summary of site purpose

### `01 Foundations`

- color styles
- text styles
- effect styles
- spacing and radius scale
- icon usage notes
- light and dark background recipes

### `02 Components`

- navigation
- buttons
- pills and chips
- cards
- form fields
- chat FAB
- decorative modules

### `03 Desktop Screens`

- Home light
- Home dark
- Hardware light
- Suppliers light
- Contact light
- optional desktop transition/state frames

### `04 Mobile Screens`

- Home light
- Home dark
- Hardware light
- Suppliers light
- Contact light
- mobile nav and chat states

### `05 Prototype Flows`

- sitemap row
- CTA flow row
- theme toggle row
- contact conversion row

### `06 Notes and Handoff`

- page purpose notes
- implementation notes
- external dependency notes for Tawk chat and mailto behavior

## Build Order In Figma

1. Create foundations and styles first.
2. Build header, footer, button, form, and card components.
3. Build the reusable split-section template.
4. Build the Home desktop frame because it contains nearly every visual pattern.
5. Reuse those components to assemble Hardware, Suppliers, and Contact.
6. Duplicate for mobile and restack layouts.
7. Add prototype links last.

## Content Notes

- Home is the main storytelling route and should be treated as the flagship prototype frame.
- Hardware content is data-driven and currently uses placeholder product imagery. In Figma, use neutral product placeholders or replace with real vendor imagery later.
- Suppliers is essentially a logo wall plus one CTA card.
- Contact is a lead capture form that hands off to the user's email client.
- The current site uses light and dark theme support globally, but only Home needs a full dark-mode prototype to communicate the system unless you want full dark duplicates for every route.

## Practical Recommendation

If you want speed, build one polished desktop Home frame, then derive the remaining route frames from the shared system. If you want full client handoff quality, include:

- 5 desktop route frames
- 5 mobile route frames
- 6 to 8 interaction/state frames
- 1 foundations page
- 1 component page

That keeps the entire prototype in one Figma file while still making it maintainable.