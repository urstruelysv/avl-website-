# AVL scoped content and interaction pass

This pass uses Elaya's redesign/landing-page guidance and preserves the existing Stageshow service illustration. The user specifically authorized nav/button/headline corrections alongside copy, metadata and small contact additions. Team visibility remains off. Selected-work display, the extra slogan block and the floating motion toggle are removed.

Stageshow story, timing, compact composition and kit internals are unchanged. Process labels match Discover, Build, Launch and the external heading is How we work. Reduced-motion behavior stays automatic with a complete delivery poster. The prior scene review found no material visual issue; this pass verifies the host changes and preserves that illustration rather than redesigning it.

Contact and metadata were implemented in parallel agents with separate file ownership. No dependencies were added. Contact route checks used a mocked delivery provider: bot honeypot bypass, malformed JSON, invalid fields, missing credentials and valid mocked delivery passed without sending email. Agent type checks and whitespace checks passed.

Final integrated production/browser results are appended after verification. The inherited ESLint configuration references an unavailable Next 14 preset, so production build lint is disabled; TypeScript remains enabled.

Integrated production build and TypeScript passed. Browser checks confirmed the exact title, en-IN, canonical, no keywords, ProfessionalService JSON-LD, no work/team display and no floating motion toggle. OG image, robots and sitemap returned 200 with expected content types; a missing page returned the custom 404. Booking, WhatsApp and form-click browser events fired with only action/location data. Clipboard was mocked for verification; the copy action produced the exact email and visible confirmation. Required-field validation, intercepted delivery-error and success states passed. A direct honeypot POST returned success before provider use. No email or external appointment/message was sent.

Desktop and phone screenshots were inspected together. At 320/390/768/1024/1440 the page had no horizontal overflow. Mobile menu scroll-lock and Escape dismissal passed, reduced motion showed the final delivery scene, the footer rendered Hyderabad time, and no browser page errors occurred. The final removal of an unsupported geographic-reach tagline is a plain-copy change.

Remaining user-data TODOs: next project slot, starting INR price, confirmed Work projects, public profile links for sameAs, and connection of the local avl:contact events to an analytics provider.
