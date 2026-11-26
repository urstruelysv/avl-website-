# AVL current design

The website presents Aethos Vision Labs as a services studio. Confirmed business content is in PRODUCT.md. Use the installed Elaya landing-page/redesign skills and Stageshow for the existing illustrative process, subject to the user's explicit scope.

## Preserved system
- Black surface `#08090b`, process surface `#101215`, foreground `#f0f0ed`, single blue accent `#8cb9ff`.
- Local Geist body type and Instrument Serif display type. The source font license remains in public/fonts.
- PixelHeading keeps semantic HTML text and an aria-hidden canvas. Canvas glyphs now advance explicitly with a small positive gap and fit within their line, avoiding crowded or cut-off lettering.
- The responsive services, process and contact layouts stay as implemented. The team component stays hidden by explicit user choice; its source names and roles are corrected.

## Requested visible corrections
The navigation has a transparent header with Services, How we work and Get in touch, preserving the existing mobile menu behavior. The main and form actions use the same blue face, contained arrow, hover and press feedback. No new design dependency is added.

The selected-work display and extra slogan block are removed. WorkStrip renders null with a project-confirmation TODO. There are no links to a missing Work section. Headings use plain labels: What we do, How we work, Start a project. Hero copy states the actual services and audience. The requested availability and price placeholders stay visible beneath the main action.

## Motion
The existing dither atmosphere and Stageshow website-commission sequence remain. Discover, Build and Launch allow direct state selection; Replay restarts the once-in-view sequence. The wide stage remains 720×480, with a 358×450 compact website document below 560px.

The floating Play/Pause control is removed at the user's request. Operating-system reduced-motion preferences automatically stop decorative movement and show the complete delivery poster. Hidden/offscreen canvas drawing remains skipped. Buttons and menu transitions inherit the reduced-motion rules.

## Small additions
Three contact paths: existing form, supplied booking link and supplied WhatsApp link. Email remains a mailto link with a separate copy control and feedback. The form includes a honeypot, server validation and specific success/error states. Tracking emits typed local browser events only; no analytics service is installed.

The footer displays live Hyderabad time. Metadata, canonical, robots, sitemap, structured data and the local-logo social image use the confirmed domain and service facts. The 404 has one sentence and a home link.

## Boundaries
Only the specifically requested nav, button and headline treatments change visually. Other changes are copy, links, metadata, removal of rejected content, and small helpers. No unconfirmed projects, claims, quotes, prices, start dates or profile links are filled in. Original Stageshow CSS remains separate under /kit; no kit internals change.
