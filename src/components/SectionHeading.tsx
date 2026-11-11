import type { ReactNode } from 'react'

export function SectionHeading({ label, action }: { label: string; action?: ReactNode }) {
  return (
    <div className="section-kicker">
      <p className="pill"><img src="/design/sparkle-rust.svg" width={10} height={10} alt="" />{label}</p>
      <span className="section-rule" aria-hidden="true" />
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  )
}
