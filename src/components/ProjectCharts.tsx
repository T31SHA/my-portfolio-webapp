import type { ReactNode } from 'react'

const SANS = 'Archivo, Helvetica Neue, Arial, sans-serif'
const DISPLAY = 'Cormorant Garamond, Georgia, serif'
const INK = '#241a12'
const PAPER = '#ede4d4'
const OCHRE = '#b08b5c'
const COBALT = '#2e5c8a'

export type ChartId = 'behaviour' | 'churn' | 'nse' | 'drought' | 'flood' | 'cassava'

function ChartShell({
  title,
  note,
  label,
  children,
}: {
  title: string
  note: string
  label: string
  children: ReactNode
}) {
  return (
    <svg viewBox="0 0 320 200" className="aspect-[16/10] w-full" role="img" aria-label={label}>
      <rect width="320" height="200" fill={INK} />
      <text x="14" y="20" fill={OCHRE} fontFamily={SANS} fontSize="9" fontWeight="600" letterSpacing="1.5">
        {title.toUpperCase()}
      </text>
      <path d="M14 28 H38" stroke={OCHRE} strokeWidth="1.5" />
      <text x="14" y="44" fill={PAPER} fillOpacity="0.72" fontFamily={SANS} fontSize="10">
        {note}
      </text>
      {children}
    </svg>
  )
}

function Bars({
  rows,
  max,
  top = 62,
}: {
  rows: { name: string; value: number; label: string; accent?: boolean }[]
  max: number
  top?: number
}) {
  const x0 = 108
  const track = 148
  const step = rows.length > 4 ? 24 : 30
  return rows.map((row, index) => {
    const y = top + index * step
    const width = Math.max(2, (row.value / max) * track)
    return (
      <g key={row.name}>
        <text x="14" y={y + 11} fill={PAPER} fontFamily={SANS} fontSize="11">
          {row.name}
        </text>
        <rect x={x0} y={y} width={track} height="14" fill={PAPER} fillOpacity="0.08" />
        <rect x={x0} y={y} width={width} height="14" fill={row.accent ? OCHRE : COBALT} />
        <text x="306" y={y + 11} fill={PAPER} fontFamily={SANS} fontSize="11" textAnchor="end">
          {row.label}
        </text>
      </g>
    )
  })
}

function BehaviourChart() {
  return (
    <ChartShell
      title="Holdout scores"
      note="Weighted F1 · 80/20 stratified · 700 rows"
      label="Holdout accuracy 1.00 and weighted F1 1.00 on 700 rows. Classes were highly separable."
    >
      {Bars({
        rows: [
          { name: 'Accuracy', value: 1, label: '1.00', accent: true },
          { name: 'F1', value: 1, label: '1.00', accent: true },
        ],
        max: 1,
        top: 78,
      })}
      <text x="14" y="168" fill={PAPER} fillOpacity="0.55" fontFamily={SANS} fontSize="10">
        Classes were highly separable
      </text>
    </ChartShell>
  )
}

function ChurnChart() {
  const x = 14
  const width = 292
  const retained = width * 0.85
  return (
    <ChartShell
      title="Class balance"
      note="3,333 telecom accounts"
      label="About 85 percent retained and 15 percent churned across 3,333 accounts."
    >
      <rect x={x} y="72" width={retained} height="36" fill={COBALT} />
      <rect x={x + retained} y="72" width={width - retained} height="36" fill={OCHRE} />
      <rect x="14" y="128" width="8" height="8" fill={COBALT} />
      <text x="28" y="136" fill={PAPER} fontFamily={SANS} fontSize="11">
        Retained 85%
      </text>
      <rect x="150" y="128" width="8" height="8" fill={OCHRE} />
      <text x="164" y="136" fill={PAPER} fontFamily={SANS} fontSize="11">
        Churned 15%
      </text>
      <text x="14" y="172" fill={PAPER} fillOpacity="0.72" fontFamily={SANS} fontSize="10">
        Tuned for recall against a balanced logistic baseline
      </text>
    </ChartShell>
  )
}

function NseChart() {
  return (
    <ChartShell
      title="Forward test"
      note="Safaricom · first 80% train, last 20% test"
      label="Reported forward-test mean absolute error of 0.12 Kenyan shillings. Train on the first 80 percent, test on the last 20 percent."
    >
      <text x="14" y="96" fill={PAPER} fontFamily={DISPLAY} fontSize="52">
        0.12
      </text>
      <text x="14" y="118" fill={PAPER} fontFamily={SANS} fontSize="11">
        KES MAE · reported holdout
      </text>
      <rect x="14" y="140" width="230" height="16" fill={COBALT} />
      <rect x="244" y="140" width="58" height="16" fill={OCHRE} />
      <text x="14" y="178" fill={PAPER} fontFamily={SANS} fontSize="10">
        Train 80%
      </text>
      <text x="306" y="178" fill={PAPER} fontFamily={SANS} fontSize="10" textAnchor="end">
        Forward 20%
      </text>
    </ChartShell>
  )
}

function DroughtChart() {
  return (
    <ChartShell
      title="One-month R²"
      note="SPEI-12 · t+1 · northwestern Algeria"
      label="One-month SPEI-12 R-squared: Ridge 0.951, XGBoost 0.896, LSTM 0.884, SARIMA 0.247."
    >
      {Bars({
        rows: [
          { name: 'Ridge', value: 0.951, label: '0.951', accent: true },
          { name: 'XGBoost', value: 0.896, label: '0.896' },
          { name: 'LSTM', value: 0.884, label: '0.884' },
          { name: 'SARIMA', value: 0.247, label: '0.247' },
        ],
        max: 1,
      })}
    </ChartShell>
  )
}

function FloodChart() {
  return (
    <ChartShell
      title="County holdout"
      note="Calibrated XGBoost · spatial split"
      label="County-held-out scores: ROC AUC 0.889, recall 0.80, PR AUC 0.690, precision 0.57."
    >
      {Bars({
        rows: [
          { name: 'ROC AUC', value: 0.889, label: '0.889', accent: true },
          { name: 'Recall', value: 0.8, label: '0.80' },
          { name: 'PR AUC', value: 0.69, label: '0.690' },
          { name: 'Precision', value: 0.57, label: '0.57' },
        ],
        max: 1,
      })}
    </ChartShell>
  )
}

function CassavaChart() {
  const x0 = 108
  const track = 148
  const overallX = x0 + 0.752 * track
  return (
    <ChartShell
      title="Per-class recall"
      note="500 balanced images · overall 75.2%"
      label="Per-class recall on 500 balanced images: healthy 94%, CMD 83%, CGM 72%, CBB 66%, CBSD 61%. Overall accuracy 75.2%."
    >
      <line x1={overallX} x2={overallX} y1="56" y2="176" stroke={OCHRE} strokeDasharray="2 2" />
      {Bars({
        rows: [
          { name: 'Healthy', value: 94, label: '94%' },
          { name: 'CMD', value: 83, label: '83%' },
          { name: 'CGM', value: 72, label: '72%' },
          { name: 'CBB', value: 66, label: '66%' },
          { name: 'CBSD', value: 61, label: '61%' },
        ],
        max: 100,
        top: 58,
      })}
    </ChartShell>
  )
}

const charts = {
  behaviour: BehaviourChart,
  churn: ChurnChart,
  nse: NseChart,
  drought: DroughtChart,
  flood: FloodChart,
  cassava: CassavaChart,
}

export function ProjectChart({ id }: { id: ChartId }) {
  const Chart = charts[id]
  return <Chart />
}
