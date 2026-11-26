# AVL — signal from the noise

User-pinned reference: unfair.so, adapted to AVL's requested black palette and its own business content. The hero is an actual canvas Bayer-dither field, with an accessible pixel-rendered open-source Instrument Serif headline. The source font and license are in public/fonts. Canvas animation pauses offscreen and under reduced motion the field renders once. Text has a normal HTML/font fallback.

Stageshow: `benjitaylor/skills`, using the dark-hero window/crop and panel-annotation composition principles. ProjectStage presents three retained, user-selected scenes: brief, connected workflow, and handover. This is illustrative project data, explicitly labeled. No invented client metrics, pricing or endorsements are used. The narrow composition is a kit Card document rather than a squeezed desktop window. No autonomous loop or cursor is shipped; selecting a process step causes the transition.

The runtime's original CSS is served separately under /kit for correct third-party style provenance. Host styling uses classes and documented row tokens; the kit's internal geometry stays intact. Only the component styles needed by AVL are loaded.

Verification: TypeScript, production build (lint disabled because the inherited ESLint config references an unavailable Next 14 preset), responsive Chrome at 320/390/768/1024/1440, menu open/Escape, and all three step controls. The contact route now constructs the email client only at request time and reports missing configuration; no email was sent during verification. The form retains server delivery and displays an inline error fallback.

Independent visual review requested four fixes: secondary-text contrast, mobile process footer separation, the process border thickness, and the CTA shadow. These were addressed in one batch before final screenshots and review. The small pixel texture transition flagged by the detector is an intentional part of the user's explicitly requested dithering direction.

Final production rehearsal: desktop and 390px Stageshow still/gate captures passed. All three scenes were inspected at desktop and phone widths. Responsive checks at 320/390/768/1024/1440 showed no horizontal page overflow; mobile menu open/Escape and required-field form validation passed; Chrome reported no runtime page errors. After increasing the desktop stage to 480px to expose the complete handover outcome, a fresh production build and desktop Stageshow gate passed again. Type checking and git diff whitespace checks passed. Email delivery was not exercised.

Independent finish review disposition: ship. All four requested finishing corrections are resolved.
