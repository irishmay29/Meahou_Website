# How To Turn This Website Into A Figma File

This guide shows you how to take the existing AkamaiPOS website and rebuild it as one organized Figma file.

It assumes you already have these repo documents available:

- `docs/figma-blueprint.md`
- `docs/figma-wireframe-checklist.md`
- `docs/figma-content-sheet.md`
- `docs/figma-naming-guide.md`

## What You Are Building

You are building one Figma file named `AkamaiPOS Website Prototype` that contains:

- desktop screens
- mobile screens
- reusable components
- prototype links between pages
- notes for external behaviors like email handoff

## Before You Start

Open Figma and have these things ready:

1. A blank design file.
2. The four docs listed above.
3. Access to the website in a browser so you can visually compare spacing and layout.
4. The fonts `Outfit` and `Manrope` available in Figma.

If the fonts are not available, install them first. Do not substitute random defaults unless you are only making a rough wireframe.

## Step 1: Create The Figma File Structure

Create a new Figma file and rename it to:

- `AkamaiPOS Website Prototype`

Then create these Figma pages in this exact order:

1. `00 Cover`
2. `01 Foundations`
3. `02 Components`
4. `03 Desktop Screens`
5. `04 Mobile Screens`
6. `05 Prototype Flows`
7. `06 Notes and Handoff`

Use `docs/figma-naming-guide.md` as the source of truth for naming.

## Step 2: Set Up Foundations First

Go to `01 Foundations` and create frames for:

- `Foundations / Color Styles`
- `Foundations / Type Styles`
- `Foundations / Effects`
- `Foundations / Radius and Spacing`
- `Foundations / Background Recipes`
- `Foundations / Icon and Illustration Notes`

Now use `docs/figma-blueprint.md` to enter:

- light and dark colors
- typography styles
- radius tokens
- shadow styles
- background recipes

Recommended sequence:

1. Create all color styles first.
2. Create all text styles next.
3. Create shadow and blur effects.
4. Build a sample light background and a sample dark background.

Do this before any screen design. If you skip foundations, the rest of the file gets messy fast.

## Step 3: Build The Core Components

Go to `02 Components`.

Using `docs/figma-naming-guide.md`, create components in this order:

1. Header variants
2. Footer
3. Buttons
4. Nav links
5. Theme toggle
6. Eyebrow pill
7. Form fields
8. Cards and chips
9. Floating chat button
10. Visual modules and bands

Use `docs/figma-wireframe-checklist.md` to make sure you do not miss any component.

Keep all reusable elements as components or component sets. At minimum, make these reusable:

- header
- footer
- buttons
- form fields
- supplier logo card
- service card
- contact card
- floating chat button

## Step 4: Build The Desktop Home Screen First

Go to `03 Desktop Screens` and create:

- `Screen / Home / Desktop / Light`

Set the width to `1440`.

This should be your first full screen because Home contains most of the visual language used across the site.

Follow this exact build order:

1. Add the ambient background.
2. Add the sticky header.
3. Add the hero section.
4. Add the ticker band.
5. Add the analytics split section.
6. Add the experience split section.
7. Add the coverage band.
8. Add the service area section.
9. Add the third-party systems section.
10. Add the dev band.
11. Add the custom programming section.
12. Add the computer support section.
13. Add the support stats band.
14. Add the services grid.
15. Add the orange CTA band.
16. Add the expert support section.
17. Add the footer.

Use:

- `docs/figma-wireframe-checklist.md` for the section order
- `docs/figma-content-sheet.md` for real text
- `docs/figma-naming-guide.md` for section and layer names

## Step 5: Duplicate Home Into Dark Mode

After the light desktop Home screen is finished, duplicate it and rename it:

- `Screen / Home / Desktop / Dark`

Then swap:

- colors
- background treatment
- text styles where needed
- component variants like header and theme toggle

Do not redesign the layout. Dark mode is a theme variant, not a separate page concept.

## Step 6: Build The Other Desktop Screens

Now create the remaining desktop screens:

- `Screen / Hardware / Desktop / Light`
- `Screen / Suppliers / Desktop / Light`
- `Screen / Contact / Desktop / Light`

### Hardware page

Use the Hardware section in `docs/figma-content-sheet.md`.

Build:

1. Page hero
2. Six product sections
3. Bottom CTA
4. Footer
5. Floating chat button

### Suppliers page

Build:

1. Page hero
2. Supplier logo wall
3. Partner/support CTA card
4. Footer
5. Floating chat button

### Contact page

Build:

1. Page hero
2. Call-us info card
3. Two-column form
4. Submit button
5. Footer
6. Floating chat button

## Step 7: Build The Mobile Screens

Go to `04 Mobile Screens` and create:

- `Screen / Home / Mobile / Light`
- `Screen / Home / Mobile / Dark`
- `Screen / Hardware / Mobile / Light`
- `Screen / Suppliers / Mobile / Light`
- `Screen / Contact / Mobile / Light`

Set mobile width to `390`.

The fastest method is:

1. Duplicate the desktop screens.
2. Reduce the frame width to mobile size.
3. Restack each split section vertically.
4. Convert multi-column content into one-column layouts.
5. Swap in mobile header components.
6. Make buttons wider where needed.
7. Check that the floating chat button does not collide with the footer.

For mobile, focus on clarity rather than pixel-perfect duplication of every desktop proportion.

## Step 8: Add State Frames

Add the state frames listed in `docs/figma-wireframe-checklist.md` and `docs/figma-naming-guide.md`:

- `State / Header / Mobile Nav Open`
- `State / Contact / Filled Form`
- `State / Contact / Mail App Handoff`
- `State / Chat / Hover`
- `State / Mobile Nav / Closed`
- `State / Mobile Nav / Open`
- `State / Chat / Mobile Default`

These are not full routes. They are reference frames for interactions and edge states.

## Step 9: Wire The Prototype

Go to `05 Prototype Flows` and create these helper frames:

- `Flow / Sitemap`
- `Flow / Primary CTA Paths`
- `Flow / Theme Toggle`
- `Flow / Contact Conversion`
- `Flow / External Actions`

Now wire the actual screen frames:

1. Link logo to Home.
2. Link nav items to the correct screens.
3. Link `Book a Demo` to Contact.
4. Link `Explore Hardware` to Hardware.
5. Link all lead-generation CTAs to Contact unless the doc says otherwise.
6. Link `View Our Partners` to Suppliers.
7. Link the theme toggle between Home light and Home dark.

For non-page actions, do not fake a full page if the website does not have one.

Instead:

- annotate phone links as external `tel:` actions
- annotate contact submit as external `mailto:` behavior

## Step 10: Add Notes And Handoff Information

Go to `06 Notes and Handoff` and add frames for:

- `Note / Build Summary`
- `Note / External Dependencies`
- `Note / Responsive Behavior`
- `Note / Placeholder Content`
- `Note / Developer Handoff`

Document these three things clearly:

1. The contact form opens the user's mail app with a prefilled message.
2. The hardware images are placeholders in the current implementation.

## Fastest Build Path

If you want speed instead of perfect completeness, use this order:

1. Foundations
2. Header, footer, buttons, form fields
3. `Screen / Home / Desktop / Light`
4. `Screen / Home / Desktop / Dark`
5. `Screen / Contact / Desktop / Light`
6. `Screen / Hardware / Desktop / Light`
7. `Screen / Suppliers / Desktop / Light`
8. Mobile screens
9. Prototype links
10. Notes

That gives you the most useful prototype fastest.

## Quality Check Before You Finish

Before calling the file done, check these:

1. Every frame name matches `docs/figma-naming-guide.md`.
2. Every screen listed in `docs/figma-wireframe-checklist.md` exists.
3. The main copy matches `docs/figma-content-sheet.md`.
4. Buttons and forms are component-based, not one-off layers.
5. Theme toggle behavior is shown.
6. Contact submission is annotated as `mailto:`.
7. Desktop and mobile versions both exist.

## Practical Tips

- Build with Auto Layout wherever possible.
- Use components for repeated sections and cards.
- Do not flatten everything into raw groups.
- Keep illustrations and decorative layers locked after placement.
- Keep the Home page as your visual reference frame for the rest of the system.
- If time is short, prioritize structure, naming, and flows over perfect decorative fidelity.

## Which Doc To Use When

- Use `docs/figma-blueprint.md` when deciding what belongs in the file.
- Use `docs/figma-wireframe-checklist.md` when building frames and sections.
- Use `docs/figma-content-sheet.md` when adding real text and labels.
- Use `docs/figma-naming-guide.md` when naming pages, frames, layers, and components.

## Important Limitation

This repo can give you an implementation-grade Figma plan, but it does not directly export a native `.fig` file. The actual Figma document still needs to be assembled inside Figma using this guide.