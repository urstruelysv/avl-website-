# AVL workflow illustration and process refinement

The incumbent AVL site supplies the black canvas, blue accent, retro grid, rotating headline, and content. The Aeos Labs process section informed editorial scale, illustrated phases, and expandable details; its branding, imagery, client claims, and copy were not copied.

Stageshow source: `benjitaylor/skills`, `stageshow/examples/dark-hero`. The browser window, dark surface hierarchy, compact crop, and status pill anatomy are retained. The scene is a deliberately static, illustrative enquiry-to-draft workflow; no performance figures or live product claims are made. Only the Stage, Window, Bar, Badge, Spinner and Collapse modules are exported so unused phone styles do not enter the host page.

Final verification includes TypeScript, production bundling with lint disabled because the inherited ESLint config references an unavailable Next 14 preset, and responsive Chrome checks. The build uses a placeholder Resend key only to satisfy the inherited email client's build-time initialization; no email is sent. The initial development film passed the mobile visual gate but reported the filming tool's pre-hydration data attribute as an extra-attribute warning; production filming is the final check. No animation is shipped by the illustration, so there is no loop or cursor rehearsal to claim.

Final results: production `film.mjs --still --gate` returned exit 0 and `rehearsal passed` at desktop and 390px. No issues detected in the still captures. TypeScript passed. The final production build passed with lint disabled as described above. Browser checks at 320, 390, 768, 1024 and 1440px reported document widths matching the viewport; the process accordion expanded successfully. Desktop and phone screenshots were reviewed.
