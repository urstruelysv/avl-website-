# AVL — a services studio with a pulse

## Direction
AVL sells design, development, AI/automation and content services. Visitors should understand the offer, see real work and start a project conversation. The approved black and blue visual world, pixel serif headlines and dither field remain. This update adds visible motion and project evidence; it does not turn AVL into a software product.

The user supplied Elaya's ai-design-skills and their portfolio. Elaya's landing-page and existing-project redesign skills are installed under `.agents/skills`, with the license. Explicit user choices preserve the existing display font and black palette over conflicting skill defaults. Stageshow authors a website commission walkthrough, not an app being offered for sale.

## Visual system
- Canvas: `#08090b`; process surface `#101215`; illustrated website `#181818`; overlay `#272727`.
- Foreground: `#f0f0ed`, supporting copy around `#a5afbd`. One blue accent, `#8cb9ff`.
- Body: locally loaded Geist Sans. Display: locally hosted Instrument Serif, rasterized into a pixel canvas with semantic text fallback. Font license remains in `public/fonts`.
- New content uses the Tailwind type scale and 8/12/16/24/32/40/48/64/80/96px spacing steps. Approved incumbent pixel display sizes stay intact.
- Desktop content is capped at 1200px. Corners are restrained, rules are 1px, and any elevated object has an offset, blurred shadow.
- Phosphor icons carry the visible studio UI. Existing unused kit components retain their own icon implementation.

## Page and proof
Hero → selected work → word reveal statement → services → process → contact → footer. The founders section is removed from the home page. The service list uses horizontal ruled passages rather than three equal cards. Project previews lead the page after the hero.

Selected work is sourced from https://saivamshi.aethoscompany.in/projects and explicitly attributed to founder Sai Vamshi Gannoju's portfolio. Indo Global School, Cirro and Alpha Fitness use real website captures and live links. SaaS contract work and personal experiments are excluded. Client testimonials remain unpublished because no actual client quotes were supplied or found.

## Motion thesis
The focal sequence is a commissioned website: a brief arrives over a coherent website preview, design work takes shape, then a blue delivery note completes the story. This is one illustrative project, not a client engagement claim.

The dither field now visibly evolves through curved Bayer threshold fields, at no more than one redraw per 55ms. Its phase persists across pause/resume. Hidden or offscreen canvases skip work. Three quiet hero labels drift; the hero settles once. The separate studio statement activates words in reading order through IntersectionObserver, with no unthrottled scroll listener. Work images respond to hover and keyboard focus.

The Stageshow sequence plays once when visible, advances after 1.8s and 4.6s, and holds the final delivery state. The three retained overlays move as whole opaque objects. External Discover/Create/Deliver controls allow direct inspection, stopping automatic playback; Replay explicitly starts a new sequence. Wide design area is 720×480. Below 560px, the 358×450 composition uses a website document card rather than a squeezed desktop browser window.

A persistent Pause motion control freezes the dither field, decorative CSS animation and current walkthrough phase. Reduced motion shows a complete delivery poster, static dither and fully readable statement. No control requires waiting for animation.

## Responsive and access
Work becomes a single column on phones, with useful project captions and visible visit links. The mobile navigation is a full-height panel with a morphing toggle, keyboard focus handling, body scroll lock and Escape dismissal. The page includes a skip link, focus styles, semantic headings and a branded 404. Contact validation and delivery stay intact. Metadata describes services, and the social preview is generated locally instead of pointing at an unrelated image host.

## Styling boundary
Global site styling belongs to `src/app/globals.css`. The original Stageshow CSS remains separate under `/kit`, linked once from the root layout. Project illustration geometry and retained scene transitions are scoped to `.project-stage` in `project-stage.css`; kit row/device internals are not reshaped.
