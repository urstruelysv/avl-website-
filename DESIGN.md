# AVL — signal from the noise

## Purpose and content
Help visitors understand Aethos Vision Labs and submit a project enquiry. PRODUCT.md is the factual source: a Hyderabad engineering and creative team offering digital presence, AI and automation, and video/content services. Preserve the existing contact delivery behavior, founder identities and hello@aethoscompany.in address.

The user pinned the black surface, pixel serif, dithering and staged second section. unfair.so informed the visual direction; the implementation uses original composition and AVL content, with no copied assets, proprietary type, invented clients, testimonials or performance metrics.

## Tokens and typography
- Canvas: `--ink: #08090b`; process surface `#101215`; workspace surface `#15171c`.
- Type: `--paper: #f0f0ed`; `--soft: #8b9099`; readable supporting text and form placeholders use lighter local values around `#939faf`.
- Single chromatic accent: `--blue: #8cb9ff`, shared by actions, selection, focus outlines and active process states.
- Rules are 1px; corners are restrained (typically 5–8px). The primary CTA has a 1px pale-blue border and softly blurred `0 7px 20px #0004` shadow.
- Body: locally loaded Geist Sans. Display: locally hosted Instrument Serif, registered as AVL Serif; its SIL Open Font License 1.1 is retained in `public/fonts/InstrumentSerif-OFL.txt`.
- PixelHeading rasterizes that serif into a low-resolution canvas with pixelated scaling. Semantic h1/h2 text remains in the DOM, provides the initial fallback, and stays available to assistive technology; the decorative canvas is aria-hidden.
- Hero display scales from roughly 64–82px on phones to 144px on desktop; other headings use responsive clamps. Wide content is capped at 1200px, with 48px desktop and 20px phone side gutters.

## Composition and behavior
The hero centers “Magic, at your service.” within a clear reading area, surrounded by a genuine canvas dither field and small discipline labels. One filled enquiry CTA and a quieter process link lead into the page. Services use ruled columns, the founders provide a human section, and the enquiry form closes the flow.

DitherField uses a 4×4 Bayer threshold matrix over curved density fields, drawn in 5–6px cells. Slow drift is throttled to approximately one redraw per 130ms. Reduced motion produces a static field; offscreen and hidden-document states skip rendering. Resizing redraws the field. Other reduced-motion rules remove scene transitions and smooth scrolling.

Discover, Build and Launch are user-controlled buttons with aria-pressed state and a shared preview target. They switch one retained Stageshow workspace between a brief, a connected enquiry workflow and a handover with a reviewable follow-up draft. The caption explicitly identifies this as an illustrative project; it is not evidence of a client engagement or a functional automation product.

The desktop stage uses a 720×480 design area so the handover outcome stays visible. Below 560px, the stage switches to a 358×450 compact layout with a document card instead of desktop window chrome. At phone widths, compact step controls precede the selected explanation and the workspace; the explanation announces changes politely. Supporting copy and the contact link have separate lines below the illustration.

At 800px the process becomes a single column and navigation collapses to a menu. At 520px services become stacked ruled passages, founder entries stack, and the footer wraps. Decorative hero labels disappear on smaller screens. Focus-visible outlines remain blue throughout.

## Styling boundary and final disposition
`src/app/globals.css` owns site tokens, typography, layout and responsive rules. The Stageshow kit stays separate under `src/components/stageshow/kit` and is served through `public/kit/avl-stage.css`, linked once in the root layout. Project-specific `.project-stage` overrides live in `src/app/components/project-stage.css`.

Final review disposition: ship. The four review fixes are resolved: supporting-text contrast, the mobile preview-footer action boundary, the CTA’s 1px border, and its softly blurred shadow. The final desktop stage height is 480px to preserve the handover footer.
