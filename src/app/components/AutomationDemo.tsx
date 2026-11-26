"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { GitBranch, GitCommit } from 'lucide-react'
import { Badge, Bar, Collapse, Spinner, Stage, Window } from '@/components/stageshow/kit'
import './automation-demo.css'

// A dark desktop hero: a deploy lands at the top of a project's deployments
// and goes live. Beats: the new deploy opens in at the top and pushes the
// list down, Building with a spinner; its timer counts; the badge turns to
// Ready on the same pill and the timer settles on the build's time; the
// row's Latest mark moves to it. After a 2s hold the new row closes the
// way it opened, handing Latest back, and resets while closed.
//
// What makes a dark hero read:
// - The window is a step lighter than the page, its chrome a step lighter
//   again, with a hairline on top, not a glow. Shadows don't show on black,
//   so depth comes from those steps.
// - One color is lit: the success green, once, on the new row. Everything
//   else is grays; the old rows' Ready pills are dimmed so the new one leads.
// - The status changes on one pill: the tone eases, the spinner and dot
//   crossfade in one cell, and the pill narrows to fit "Ready" from its
//   right edge only. The mark and the word never move; "Building" has faded
//   before the edge reaches it, so no letter is ever cut. No second pill.
// - The list moves by its height, so the old rows slide down as one, never
//   jump.
//
// Real strings: the project, the branch, the new commit, its status and time,
// and the row it replaced. The rest is placeholder at real line heights.

type S = { open: boolean; ready: boolean; t: number }

const OLD = [
  { msg: 'Content brief', when: 'Earlier', t: '—' },
  { msg: null, when: null, t: null },
  { msg: null, when: null, t: null },
  { msg: null, when: null, t: null },
]

export default function AutomationDemo() {
  return (
    <Stage<S> width={760} height={410} compact={{ below: 600, width: 358, height: 330 }} theme="dark" accent="#60a5fa" initial={{ open: true, ready: true, t: 0 }} className="dh">
      {(s, _rect, layout) => (
        <Window url="Workflow preview" className="dh-win" sidebarWidth={168} sidebar={layout === 'compact' ? undefined : <Side />}>
          <div className="dh-body">
            <header className="dh-head">
              <div className="dh-title">Automation runs</div>
              <span className="dh-proj">
                <Bar w={14} h={14} r={4} tone={3} />
                Enquiry follow-up
              </span>
            </header>
            <div className="dh-list">
              <Collapse open={s.open} reveal="drop">
                <Row
                  lead
                  msg="New enquiry"
                  hash="Email + CRM"
                  when="Just now"
                  status={
                    <Badge tone={s.ready ? 'accent' : 'neutral'} className="dh-badge" icon={<Mark ready={s.ready} />}>
                      <Label ready={s.ready} />
                    </Badge>
                  }
                  time=""
                  current={s.ready}
                />
              </Collapse>
              {OLD.map((r, i) =>
                r.msg ? (
                  <Row key={i} msg={r.msg} hash="Weekly digest" when={r.when!} status={<Badge tone="neutral" className="dh-badge dh-badge--old" icon={<Mark ready />}>Done</Badge>} time={r.t!} current={!(s.open && s.ready)} />
                ) : (
                  <div key={i} className="dh-row dh-row--filler">
                    <span className="dh-lines">
                      <Bar w={[180, 150, 200][i - 1]} h={8} r={4} tone={2} />
                      <Bar w={110} h={7} r={3.5} tone={1} />
                    </span>
                    <Bar w={52} h={18} r={9} tone={1} />
                  </div>
                ),
              )}
            </div>
          </div>
        </Window>
      )}
    </Stage>
  )
}

// The status mark: spinner and dot share one 8px cell and crossfade, so
// the word beside it never moves; the cell is the spinner's own size, so
// the pill's padding reads the same on both sides
function Mark({ ready }: { ready: boolean }) {
  return (
    <span className="dh-mark" data-ready={ready || undefined}>
      <Spinner size={8} />
      <i className="dh-dot" />
    </span>
  )
}

// The status word. The pill keeps its left edge and only its right edge
// moves: the cell eases to the width of the word that is showing. Getting
// shorter, the old word fades out before the edge reaches it; getting
// longer, the edge opens first and the new word fades into the room.
function Label({ ready }: { ready: boolean }) {
  const words = useRef<HTMLSpanElement[]>([])
  const [w, setW] = useState<number[]>([])
  useLayoutEffect(() => setW(words.current.map(e => e.offsetWidth)), [])
  const on = ready ? 1 : 0
  const shrink = w.length === 2 && w[on]! < w[1 - on]!
  return (
    <span className="dh-label" data-shrink={shrink || undefined} style={w.length ? { width: w[on] } : undefined}>
      {['Processing', 'Draft ready'].map((t, i) => (
        <span key={t} ref={e => { if (e) words.current[i] = e }} className="dh-word" data-on={i === on || undefined}>{t}</span>
      ))}
    </span>
  )
}

function Row({ lead, msg, hash, when, status, time, current }: { lead?: boolean; msg: string; hash: string; when: string; status: ReactNode; time: ReactNode; current: boolean }) {
  return (
    <div className="dh-row" data-lead={lead || undefined}>
      <span className="dh-lines">
        <span className="dh-msg">
          {msg}
          <span className="dh-current" data-on={current || undefined}>Latest</span>
        </span>
        {/* Each icon is held with its words, and the pairs sit a clear
            gap apart, so no word runs into the next icon */}
        <span className="dh-meta">
          <span className="dh-meta__item"><GitBranch size={12} strokeWidth={2} />Inbound</span>
          <span className="dh-meta__item"><GitCommit size={12} strokeWidth={2} />{hash}</span>
          <span className="dh-when">{when}</span>
        </span>
      </span>
      {status}
      <span className="dh-time">{time}</span>
    </div>
  )
}

function Side() {
  return (
    <nav className="dh-side">
      {[64, 88, 52, 76, 60].map((w, i) => (
        <span key={i} className="dh-nav" data-active={i === 1 || undefined}>
          <Bar w={12} h={12} r={3} tone={i === 1 ? 4 : 2} />
          <Bar w={w} h={6} tone={i === 1 ? 4 : 2} />
        </span>
      ))}
    </nav>
  )
}
