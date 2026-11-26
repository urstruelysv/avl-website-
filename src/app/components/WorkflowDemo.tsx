"use client";

import { Bar, Stage, Text, Window, Row, Avatar } from '@/components/stageshow/kit'
import './workflow-demo.css'

// A feature card (400 × 300) with the product masked inside it: the window is
// pinned top-left, runs off the right and bottom, and a detail card straddles
// its left edge over the sidebar, about half outside. Real words only on the
// selected customer, its neighbors and the total; bars everywhere else.

// Three real rows (the selected one and its neighbors), bars only on the
// rows the crop takes
const ROWS: { selected?: boolean; name?: number | string; amount?: number | string }[] = [
  { name: 'Brand strategy', amount: 'Ready' },
  { selected: true },
  { name: 'Content delivery', amount: 'Scheduled' },
  { name: 84, amount: 38 },
  { name: 64, amount: 48 },
  { name: 78, amount: 40 },
]
const NAV = ['Workspace', 'Projects', 'Assets', 'Activity']

export default function WorkflowDemo() {
  return (
    <Stage width={500} height={370} theme="dark" accent="#ff7448" compact={{ below: 440, width: 358, height: 300 }} className="sc-card">
      {() => (
        <>
          <Window url="studio.aethoscompany.in" className="sc-window">
            {/* The sidebar is what the detail card covers, so the rows stay readable */}
            <aside className="sc-sidebar">
              <Bar w={20} h={20} r={6} tone={4} style={{ marginBottom: 10 }} />
              {NAV.map((label, i) => (
                // The active item is marked by weight, not a pill: a pill would peek out beside the detail card
                <div key={i} className="sc-nav" data-on={i === 1 || undefined}>
                  <Bar w={10} h={10} r={3} tone={i === 1 ? 4 : 3} />
                  <Text className="sc-nav__label">{label}</Text>
                </div>
              ))}
            </aside>
            <div className="sc-main">
              <div className="sc-header">
                <Text className="sc-title">Project pipeline</Text>
                <Bar w={52} h={22} r={6} tone={2} />
              </div>
              <div className="sc-list">
                {ROWS.map((row, i) =>
                  row.selected ? (
                    <Row key={i} pad={0} selected className="sc-row" data-target="selected" lead={<Avatar name="Website launch" tone="accent" size={18} />} title={<Text className="sc-name">Website launch</Text>}>
                      <Text className="sc-rowamount">Approved</Text>
                    </Row>
                  ) : (
                    <Row key={i} pad={0} className="sc-row" lead={<Bar w={18} h={18} r={9} tone={2} />} title={typeof row.name === 'string' ? <Text className="sc-rowname">{row.name}</Text> : <Bar w={row.name!} tone={3} />}>
                      {typeof row.amount === 'string' ? <Text className="sc-rowamount">{row.amount}</Text> : <Bar w={row.amount!} tone={2} />}
                    </Row>
                  ),
                )}
              </div>
            </div>
          </Window>

          <div className="sc-detail">
            <div className="sc-detail-head">
              <Avatar name="Website launch" tone="accent" size={26} className="sc-avatar-large" />
              <div className="sc-detail-who">
                <Text className="sc-detail-name">Website launch</Text>
                <Text className="sc-rowamount">Design → build → ship</Text>
              </div>
            </div>
            {[48, 36].map((w, i) => (
              <div key={i} className="sc-detail-row">
                <Bar w={w} h={5} tone={3} />
                <Bar w={w - 12} h={5} tone={2} />
              </div>
            ))}
            <div className="sc-detail-row total">
              <Text className="sc-detail-label">Status</Text>
              <Text className="sc-detail-total">Live</Text>
            </div>
          </div>
        </>
      )}
    </Stage>
  )
}
