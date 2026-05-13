# AkamaiPOS Figma Naming Guide

Use these names exactly so the single Figma file stays clean, searchable, and easy to hand off.

## Figma File Name

- `AkamaiPOS Website Prototype`

## Figma Page Names

- `00 Cover`
- `01 Foundations`
- `02 Components`
- `03 Desktop Screens`
- `04 Mobile Screens`
- `05 Prototype Flows`
- `06 Notes and Handoff`

## Naming Rules

- Use Title Case for frame names.
- Use ` / ` to separate hierarchy levels.
- Keep route, breakpoint, and theme in the frame name.
- Keep reusable components named by category first, then state.
- Prefix one-off annotation frames with `Note /`.
- Prefix prototype helper frames with `Flow /`.
- Prefix hidden support frames with `_Archive /` only if you need to keep old versions.

## Foundations Names

Create top-level frames inside `01 Foundations` with these names:

- `Foundations / Color Styles`
- `Foundations / Type Styles`
- `Foundations / Effects`
- `Foundations / Radius and Spacing`
- `Foundations / Background Recipes`
- `Foundations / Icon and Illustration Notes`

Inside `Foundations / Color Styles`, use these style group names:

- `Color / Light / Primary Blue`
- `Color / Light / Secondary Orange`
- `Color / Light / Tropical Teal`
- `Color / Light / Palm Green`
- `Color / Light / Deep Ocean Navy`
- `Color / Light / Background`
- `Color / Light / Text Main`
- `Color / Light / Text Soft`
- `Color / Light / White`
- `Color / Dark / Primary Blue`
- `Color / Dark / Secondary Orange`
- `Color / Dark / Tropical Teal`
- `Color / Dark / Background`
- `Color / Dark / Text Main`
- `Color / Dark / Text Soft`

Inside `Foundations / Type Styles`, use these text style names:

- `Type / Display / Hero`
- `Type / Heading / H1`
- `Type / Heading / H2`
- `Type / Heading / H3`
- `Type / Body / Large`
- `Type / Body / Default`
- `Type / Label / Eyebrow`
- `Type / Button / Default`
- `Type / Caption / Small`

Inside `Foundations / Effects`, use these effect style names:

- `Effect / Shadow / Soft`
- `Effect / Shadow / Elevated`
- `Effect / Blur / Nav Glass`

## Component Names

Build the component set in `02 Components` using these exact names.

### Shell

- `Shell / Header / Desktop / Light`
- `Shell / Header / Desktop / Dark`
- `Shell / Header / Mobile Closed / Light`
- `Shell / Header / Mobile Open / Light`
- `Shell / Header / Mobile Closed / Dark`
- `Shell / Header / Mobile Open / Dark`
- `Shell / Footer / Default`
- `Shell / Floating Chat / Default`
- `Shell / Floating Chat / Hover`

### Navigation

- `Nav / Brand / Default`
- `Nav / Link / Default`
- `Nav / Link / Active`
- `Nav / Menu Toggle / Closed`
- `Nav / Menu Toggle / Open`
- `Nav / Theme Toggle / Light`
- `Nav / Theme Toggle / Dark`

### Buttons

- `Button / Primary / Default`
- `Button / Primary / Hover`
- `Button / Ghost / Default`
- `Button / Nav CTA / Default`
- `Button / Phone CTA / Default`

### Inputs

- `Form / Input / Default`
- `Form / Select / Default`
- `Form / Textarea / Default`
- `Form / Label / Default`

### Cards and chips

- `Card / KPI / Default`
- `Card / Service / Default`
- `Card / Supplier Logo / Default`
- `Card / Contact Info / Default`
- `Chip / Eyebrow / Default`
- `Chip / Coverage / Default`
- `Chip / Brand / Default`
- `Chip / Badge / Default`

### Visual modules

- `Visual / Analytics Dashboard / Default`
- `Visual / Experience Orbit / Default`
- `Visual / Hawaii Map / Default`
- `Visual / Third Party Brands / Default`
- `Visual / Code Editor / Default`
- `Visual / Cloud Rack / Default`
- `Visual / Support Monitor / Default`
- `Band / Ticker / Default`
- `Band / Coverage / Default`
- `Band / Dev / Default`
- `Band / Support Stats / Default`
- `Band / CTA / Default`
- `Graphic / Services Curve / Default`
- `Background / Ambient / Light`
- `Background / Ambient / Dark`

## Desktop Frame Names

Create these top-level frames inside `03 Desktop Screens`:

- `Screen / Home / Desktop / Light`
- `Screen / Home / Desktop / Dark`
- `Screen / Hardware / Desktop / Light`
- `Screen / Suppliers / Desktop / Light`
- `Screen / Contact / Desktop / Light`
- `State / Header / Mobile Nav Open`
- `State / Contact / Filled Form`
- `State / Contact / Mail App Handoff`
- `State / Chat / Hover`

## Mobile Frame Names

Create these top-level frames inside `04 Mobile Screens`:

- `Screen / Home / Mobile / Light`
- `Screen / Home / Mobile / Dark`
- `Screen / Hardware / Mobile / Light`
- `Screen / Suppliers / Mobile / Light`
- `Screen / Contact / Mobile / Light`
- `State / Mobile Nav / Closed`
- `State / Mobile Nav / Open`
- `State / Chat / Mobile Default`

## Prototype Flow Frame Names

Create these frames inside `05 Prototype Flows`:

- `Flow / Sitemap`
- `Flow / Primary CTA Paths`
- `Flow / Theme Toggle`
- `Flow / Contact Conversion`
- `Flow / External Actions`

## Notes Frame Names

Create these frames inside `06 Notes and Handoff`:

- `Note / Build Summary`
- `Note / External Dependencies`
- `Note / Responsive Behavior`
- `Note / Placeholder Content`
- `Note / Developer Handoff`

## Section Names Inside Each Screen

Use these exact section frame names inside the page frames.

## `Screen / Home / Desktop / Light`

- `Section / Background Ambient`
- `Section / Header`
- `Section / Hero`
- `Section / Ticker Band`
- `Section / Cost Saving Revenue Growth`
- `Section / Our Experience`
- `Section / Coverage Band`
- `Section / Service Area`
- `Section / Third Party Systems`
- `Section / Dev Band`
- `Section / Custom Programming`
- `Section / Computer Support`
- `Section / Support Stats Band`
- `Section / Services Grid`
- `Section / CTA Band`
- `Section / Expert Support`
- `Section / Footer`
- `Section / Floating Chat`

## `Screen / Hardware / Desktop / Light`

- `Section / Background Ambient`
- `Section / Header`
- `Section / Page Hero`
- `Section / Hardware Item / 01 Countertop Terminal`
- `Section / Hardware Item / 02 Mobile Handheld`
- `Section / Hardware Item / 03 Payment Hub`
- `Section / Hardware Item / 04 Back of House Display`
- `Section / Hardware Item / 05 Barcode Scanner`
- `Section / Hardware Item / 06 Cash Drawer`
- `Section / Page CTA`
- `Section / Footer`
- `Section / Floating Chat`

## `Screen / Suppliers / Desktop / Light`

- `Section / Background Ambient`
- `Section / Header`
- `Section / Page Hero`
- `Section / Supplier Logo Wall`
- `Section / Partner CTA Card`
- `Section / Footer`
- `Section / Floating Chat`

## `Screen / Contact / Desktop / Light`

- `Section / Background Ambient`
- `Section / Header`
- `Section / Page Hero`
- `Section / Contact Info`
- `Section / Contact Form`
- `Section / Footer`
- `Section / Floating Chat`

## Recommended Child Layer Names

Inside each section, keep the same small set of layer names whenever possible.

### Generic content stack

- `Content / Container`
- `Content / Copy`
- `Content / Media`
- `Content / Actions`

### Text layers

- `Text / Eyebrow`
- `Text / Heading`
- `Text / Body`
- `Text / Supporting`
- `Text / Label`

### Button layers

- `Action / Primary`
- `Action / Secondary`
- `Action / Phone`
- `Action / Submit`

### Lists and repeaters

- `List / KPI Cards`
- `List / Service Cards`
- `List / Logo Grid`
- `List / Coverage Chips`
- `List / Brand Chips`
- `List / Form Fields`

### Decorative layers

- `Decor / Dot Matrix Wave`
- `Decor / Blob A`
- `Decor / Blob B`
- `Decor / Blob C`
- `Decor / Grid Overlay`

## Hero Layer Template

Inside `Section / Hero`, use:

- `Content / Container`
- `Text / Eyebrow`
- `Text / Heading`
- `Text / Body`
- `Content / Actions`
- `Action / Primary`
- `Action / Secondary`

## Form Layer Template

Inside `Section / Contact Form`, use:

- `Content / Container`
- `List / Form Fields`
- `Field / First Name`
- `Field / Last Name`
- `Field / Company Name`
- `Field / Type of Business`
- `Field / Heard From`
- `Field / Phone Number`
- `Field / Message`
- `Action / Submit`

## Supplier Grid Layer Template

Inside `Section / Supplier Logo Wall`, use:

- `Content / Container`
- `List / Logo Grid`
- `Logo / Oracle`
- `Logo / NCR`
- `Logo / Toshiba`
- `Logo / Posiflex`
- `Logo / POSX`
- `Logo / Epson`
- `Logo / Honeywell`
- `Logo / Ingenico`

## Hardware Section Layer Template

Inside each hardware section, use:

- `Content / Container`
- `Content / Media`
- `Image / Product Placeholder`
- `Content / Copy`
- `Text / Category`
- `Text / Heading`
- `Text / SKU`
- `Text / Body`
- `List / Included Items`

## Prototype Connection Names

When naming interaction notes or flow connectors in labels, use:

- `Link / Home`
- `Link / Hardware`
- `Link / Suppliers`
- `Link / Contact`
- `Link / External Phone`
- `Link / External Mailto`
- `Link / External Tawk Widget`
- `Link / Theme Dark`
- `Link / Theme Light`

## Practical Rule

If a frame or layer name stops being useful in search, it is too vague. Prefer names that tell you the route, the section, and the purpose in one pass.