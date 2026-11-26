# AVL scoped content and interaction pass

This pass uses Elaya's redesign/landing-page guidance and preserves the existing Stageshow service illustration. The user specifically authorized nav/button/headline corrections alongside copy, metadata and small contact additions. Team visibility remains off. Selected-work display, the extra slogan block and the floating motion toggle are removed.

Stageshow story, timing, compact composition and kit internals are unchanged. Process labels match Discover, Build, Launch and the external heading is How we work. Reduced-motion behavior stays automatic with a complete delivery poster. The prior scene review found no material visual issue; this pass verifies the host changes and preserves that illustration rather than redesigning it.

Contact and metadata were implemented in parallel agents with separate file ownership. No dependencies were added. Contact route checks used a mocked delivery provider: bot honeypot bypass, malformed JSON, invalid fields, missing credentials and valid mocked delivery passed without sending email. Agent type checks and whitespace checks passed.

Final integrated production/browser results are appended after verification. The inherited ESLint configuration references an unavailable Next 14 preset, so production build lint is disabled; TypeScript remains enabled.

Integrated production build and TypeScript passed. Browser checks confirmed the exact title, en-IN, canonical, no keywords, ProfessionalService JSON-LD, no work/team display and no floating motion toggle. OG image, robots and sitemap returned 200 with expected content types; a missing page returned the custom 404. Booking, WhatsApp and form-click browser events fired with only action/location data. Clipboard was mocked for verification; the copy action produced the exact email and visible confirmation. Required-field validation, intercepted delivery-error and success states passed. A direct honeypot POST returned success before provider use. No email or external appointment/message was sent.

Desktop and phone screenshots were inspected together. At 320/390/768/1024/1440 the page had no horizontal overflow. Mobile menu scroll-lock and Escape dismissal passed, reduced motion showed the final delivery scene, the footer rendered Hyderabad time, and no browser page errors occurred. The final removal of an unsupported geographic-reach tagline is a plain-copy change.

Remaining user-data TODOs: next project slot, starting INR price, confirmed Work projects, public profile links for sameAs, and connection of the local avl:contact events to an analytics provider.

## Reference finish and Lucide icons

Visually compared Aeos Labs hero, service presentation and process at https://labs.aeoscompany.com/. Applied the reference's restraint and outline-icon treatment within AVL's existing section structure and black/blue pixel-serif identity. Used Elaya for targeted surface/interaction diagnosis and retained the Stageshow kit scene and choreography. No reference assets or business claims were copied. An independent agent handled the Lucide migration and reviewed the scoped changes. Lucide was already installed; no dependencies added.

Removed floating hero labels and redundant process detail/slogan copy. Larger thin Lucide icons distinguish websites, automation, content and the three process steps. Navigation has a quiet hairline and hover underline; the primary button has a lighter arrow treatment. Service rows respond to hover/focus; below-fold headings/rows reveal once without hiding content when JavaScript or reduced-motion animation is unavailable. Fine-pointer movement gently bends the existing dither field; offscreen and reduced-motion behavior remain automatic.

Production build (with inherited broken lint preset disabled) and TypeScript passed. One integrated browser pass confirmed moving normal dither, static reduced dither, reduced scene poster phase 2, manual phase selection 0/1/2, mobile menu scroll lock/Escape, no horizontal overflow at 320/390/768/1024/1440 and no page errors. Desktop hero/services/process and phone hero/process screenshots were inspected. Corrected an inherited service-row left border found during that review.

A fresh compact Stageshow film used --gate. It printed rehearsal passed for the required gate, but exited 2 because two frame-sampling gaps made motion coverage inconclusive. Existing compact decorative orb/ring cropping and initial responsive-layout handoff were also reported. This is not a claim of complete automated motion approval. Scene geometry and timing were not changed in this pass; the visible frames and phase controls were reviewed directly.

No new TODOs. Remaining user-data TODOs are next slot, starting price, confirmed projects, sameAs profile links, and connection to an analytics provider.
