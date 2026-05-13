# AkamaiPOS Figma Wireframe Checklist

Use this as the build checklist inside one Figma file. Each item below should become either a frame, a component, or a prototype connection.

## File Setup

- Create one Figma file named `AkamaiPOS Website Prototype`.
- Add Figma pages in this order: `00 Cover`, `01 Foundations`, `02 Components`, `03 Desktop Screens`, `04 Mobile Screens`, `05 Prototype Flows`, `06 Notes and Handoff`.
- Set desktop screen width to `1440`.
- Set mobile screen width to `390`.

## Foundations Checklist

- Add color styles for light theme.
- Add color styles for dark theme.
- Add text styles for hero, page title, section heading, body, label, and button text.
- Add radius tokens for `12`, `18`, `28`, and pill shapes.
- Add shadow styles for soft cards and elevated sections.
- Add one background recipe for light mode.
- Add one background recipe for dark mode.
- Add decorative assets for dot matrix wave, blurred blobs, and grid overlay.

## Components Checklist

### Shell

- Header desktop light
- Header desktop dark
- Header mobile closed light
- Header mobile open light
- Header mobile closed dark
- Header mobile open dark
- Footer

### Navigation

- Brand logo with palm mark
- Nav link default
- Nav link active
- Theme toggle light
- Theme toggle dark
- Mobile menu toggle closed
- Mobile menu toggle open

### Actions

- Primary button
- Ghost button
- Navigation CTA button
- Phone CTA treatment

### Shared content blocks

- Eyebrow pill
- Section split layout, media left
- Section split layout, media right
- KPI card
- Service card
- Supplier logo card
- Contact info card
- Input field
- Select field
- Textarea field
- Coverage chip
- Brand chip
- Badge chip

### Visual modules

- Analytics dashboard card
- Experience orbit illustration
- Hawaii map section
- Third-party brands grid
- Code editor panel
- Cloud/server support panel
- Support monitor panel
- Ticker band
- Coverage band
- Dev band
- Support stats band
- CTA band
- Services graph strip

## Desktop Screens

## `Home / Desktop / Light`

- Add sticky header.
- Add hero eyebrow.
- Add hero headline.
- Add hero support copy.
- Add primary CTA `Start Your Rollout`.
- Add secondary CTA `Explore Hardware`.
- Add service ticker band.
- Add analytics split section.
- Add experience split section.
- Add coverage band.
- Add Hawaii map split section.
- Add third-party systems split section.
- Add dev band with four feature items.
- Add custom programming split section.
- Add computer support split section.
- Add support stats band.
- Add services grid section.
- Add orange CTA band with phone number.
- Add expert support split section.
- Add footer.

## `Home / Desktop / Dark`

- Duplicate `Home / Desktop / Light`.
- Swap to dark color styles.
- Keep layout and copy identical.

## `Hardware / Desktop / Light`

- Add sticky header.
- Add page hero.
- Add six alternating product sections.
- Add bottom CTA `Ask About Hardware Pricing`.
- Add footer.

Product section list:

- Akamai Counter Pro
- Akamai Flex Mini
- Akamai Core Hub
- Akamai Kitchen Display
- Akamai Scanner Plus
- Akamai Drawer Secure

## `Suppliers / Desktop / Light`

- Add sticky header.
- Add page hero.
- Add supplier logo wall.
- Add coverage/support CTA card.
- Add footer.

## `Contact / Desktop / Light`

- Add sticky header.
- Add page hero.
- Add call-us info card.
- Add two-column form.
- Add submit button.
- Add footer.

## Mobile Screens

## `Home / Mobile / Light`

- Use mobile closed nav by default.
- Stack all split sections vertically.
- Keep both hero CTAs full width or near full width.
- Wrap ticker pills into multiple rows.
- Stack CTA band content.

## `Home / Mobile / Dark`

- Duplicate mobile light frame.
- Swap to dark styles.

## `Hardware / Mobile / Light`

- Stack all six product sections vertically.
- Keep product image on top and text below.
- Make CTA full width.

## `Suppliers / Mobile / Light`

- Use a tighter logo grid.
- Keep support CTA card stacked below the logos.

## `Contact / Mobile / Light`

- Convert form to one column.
- Keep labels above fields.
- Make submit button full width.

## State Frames

- `Header / Mobile Nav Open`
- `Theme Toggle / Light to Dark`
- `Chat FAB / Default`
- `Chat FAB / Hover`
- `Contact / Filled Form`
- `Contact / Mail App Handoff`

## Prototype Wiring Checklist

- Link brand logo to Home.
- Link Home nav item to Home.
- Link POS Hardware nav item to Hardware.
- Link Suppliers nav item to Suppliers.
- Link Contact Us nav item to Contact.
- Link footer `Contact Support` to Contact.
- Link `Book a Demo` to Contact.
- Link `Start Your Rollout` to Contact.
- Link `Explore Hardware` to Hardware.
- Link `Talk to an Expert` to Contact.
- Link `Get a Free Consultation` to Contact.
- Link `View Our Partners` to Suppliers.
- Link `Start a Project` to Contact.
- Link `Get IT Support` to Contact.
- Link `Ask About Hardware Pricing` to Contact.
- Link `Become a Partner` to Contact.
- Mark phone actions as external `tel:+18088438000`.
- Mark contact submit as external `mailto:` handoff.
- Link theme toggle between Home light and Home dark reference frames.

## Handoff Notes Checklist

- Note that the contact form opens the user's default mail app instead of showing an internal thank-you page.
- Note that product imagery on the Hardware page is placeholder-based in the current implementation.
- Note that Home is the primary storytelling page and contains most of the reusable visual language.