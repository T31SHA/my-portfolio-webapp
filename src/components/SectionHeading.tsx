import type { ReactNode } from 'react'
import { Sparkle } from '@/components/EditorialMarks'

export function SectionHeading({ label, action }: { label: string; action?: ReactNode }) {
  return (
    <div className="section-kicker">
      <p className="eyebrow"><Sparkle /> {label}</p>
      <span className="section-rule" aria-hidden="true" />
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  )
}
