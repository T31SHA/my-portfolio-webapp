export function Sparkle({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 1.5 14.7 9.3 22.5 12l-7.8 2.7L12 22.5l-2.7-7.8L1.5 12l7.8-2.7L12 1.5Z" fill={color} />
    </svg>
  )
}

export function Starburst({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  const rays = Array.from({ length: 24 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 24
    const inner = index % 2 === 0 ? 23 : 30
    const outer = index % 2 === 0 ? 51 : 43
    return {
      x1: 60 + Math.cos(angle) * inner,
      y1: 60 + Math.sin(angle) * inner,
      x2: 60 + Math.cos(angle) * outer,
      y2: 60 + Math.sin(angle) * outer,
    }
  })
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false">
      {rays.map((ray, index) => (
        <line key={index} {...ray} stroke={color} strokeWidth={index % 3 === 0 ? 2 : 1.3} strokeLinecap="round" />
      ))}
      <circle cx="60" cy="60" r="4" fill={color} />
    </svg>
  )
}

export function RotatingBadge({ id, className = '' }: { id: string; className?: string }) {
  return (
    <svg className={`rotating-badge ${className}`} viewBox="0 0 160 160" role="img" aria-label="Nairobi, Kenya, data and machine learning">
      <defs>
        <path id={id} d="M80 80m-59 0a59 59 0 1 1 118 0a59 59 0 1 1-118 0" />
      </defs>
      <circle cx="80" cy="80" r="76" fill="var(--paper)" stroke="var(--line)" />
      <circle cx="80" cy="80" r="50" fill="none" stroke="var(--line)" />
      <path d="m80 58 5 17 17 5-17 5-5 17-5-17-17-5 17-5 5-17Z" fill="var(--rust)" />
      <text className="badge-text">
        <textPath href={`#${id}`} startOffset="0%">NAIROBI • KENYA • DATA • ML • </textPath>
      </text>
    </svg>
  )
}

export function WireGlobe({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 220" fill="none" aria-hidden="true" focusable="false">
      <circle cx="110" cy="110" r="89" />
      <ellipse cx="110" cy="110" rx="40" ry="89" />
      <ellipse cx="110" cy="110" rx="71" ry="89" />
      <ellipse cx="110" cy="110" rx="89" ry="36" />
      <ellipse cx="110" cy="110" rx="89" ry="66" />
      <path d="M22 110h176M110 21v178" />
    </svg>
  )
}

export function RetroTV({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 440 300" fill="none" role="img" aria-label="Retro television displaying a wireframe globe">
      <path d="m152 37 36 39M287 37l-36 39" stroke="var(--sand)" strokeWidth="2" />
      <path d="M71 73c0-13 11-24 24-24h250c13 0 24 11 24 24v149c0 13-11 24-24 24H95c-13 0-24-11-24-24V73Z" fill="var(--olive)" stroke="var(--sand)" strokeWidth="3" />
      <rect x="91" y="91" width="221" height="111" rx="13" fill="var(--charcoal)" />
      <g transform="translate(155 91) scale(.5)" stroke="var(--sand)" strokeOpacity=".55" strokeWidth="2">
        <circle cx="110" cy="110" r="89" />
        <ellipse cx="110" cy="110" rx="40" ry="89" />
        <ellipse cx="110" cy="110" rx="71" ry="89" />
        <ellipse cx="110" cy="110" rx="89" ry="36" />
        <ellipse cx="110" cy="110" rx="89" ry="66" />
        <path d="M22 110h176M110 21v178" />
      </g>
      <circle cx="342" cy="117" r="10" fill="var(--rust)" />
      <circle cx="342" cy="151" r="10" fill="var(--olive)" />
      <path d="m151 246-15 24m150-24 15 24" stroke="var(--sand)" strokeWidth="5" strokeLinecap="round" />
      <path d="M184 268h69" stroke="var(--sand)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export type ProjectThumbVariant = 'flood' | 'drought' | 'cassava' | 'handbook'

export function ProjectThumb({ variant }: { variant: ProjectThumbVariant }) {
  const labels: Record<ProjectThumbVariant, string> = {
    flood: 'Illustrated Nairobi ward map',
    drought: 'Illustrated drought forecast chart',
    cassava: 'Illustrated cassava leaf',
    handbook: 'Illustrated open handbook',
  }
  return (
    <svg className={`project-thumb thumb-${variant}`} viewBox="0 0 520 270" role="img" aria-label={labels[variant]}>
      {variant === 'flood' ? (
        <g stroke="var(--charcoal)" strokeWidth="3" strokeLinejoin="round">
          <path d="M0 0h111l20 70-42 63L0 115Z" fill="var(--olive)" />
          <path d="m111 0 120 0 9 73-109-3Z" fill="var(--olive-deep)" />
          <path d="m231 0 136 0-2 68-125 5Z" fill="var(--sand)" />
          <path d="m367 0h153v120l-115-11-11-41Z" fill="var(--olive)" />
          <path d="M0 115 89 133l17 67-106 19Z" fill="var(--sand)" />
          <path d="m89 133 42-63 109 3 5 76-139 51Z" fill="var(--olive)" />
          <path d="m240 73 125-5 40 41-9 74-136-34Z" fill="var(--rust)" />
          <path d="m405 109 115 11v75l-93-12-31-5Z" fill="var(--olive-deep)" />
          <path d="m0 221 106-21 42 70H0Z" fill="var(--olive-deep)" />
          <path d="m106 200 139-51 55 73-20 48h-132Z" fill="var(--rust-deep)" />
          <path d="m245 149 151 34 31 12-18 75H280l20-48Z" fill="var(--sand)" />
          <path d="m427 195 93 12v63H409Z" fill="var(--olive)" />
        </g>
      ) : null}
      {variant === 'drought' ? (
        <g>
          <path d="M28 229h462M28 34v195" stroke="var(--charcoal)" strokeOpacity=".28" strokeWidth="2" />
          {[70, 110, 150, 190].map((y) => <path key={y} d={`M28 ${y}h462`} stroke="var(--charcoal)" strokeOpacity=".12" />)}
          <path d="M32 147 67 132l37 27 35-52 33 22 35-48 35 19 32-36 40 23 30-42 36 17 31-29 31 14v72l-37-7-31 18-36-14-38 36-35-13-38 31-34-16-36 26-34-9-34 17-31-9Z" fill="var(--rust)" fillOpacity=".17" />
          <path d="m32 147 35-15 37 27 35-52 33 22 35-48 35 19 32-36 40 23 30-42 36 17 31-29 31 14" fill="none" stroke="var(--charcoal)" strokeWidth="4" strokeLinejoin="round" />
          <path d="m347 89 31 17 36-14 31 18 31-7" fill="none" stroke="var(--rust)" strokeWidth="4" strokeDasharray="4 8" strokeLinecap="round" />
          <circle cx="407" cy="92" r="5" fill="var(--rust)" />
        </g>
      ) : null}
      {variant === 'cassava' ? (
        <g stroke="var(--olive-deep)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
          <path d="M254 238c-13-45-20-100-14-177" fill="none" />
          <path d="M240 156c-58 14-123-6-157-48 50-21 103-11 157 30Z" fill="var(--paper)" />
          <path d="M242 131c-54-22-87-66-82-113 48 18 76 53 87 104Z" fill="var(--sand)" />
          <path d="M249 114c-14-57 6-106 47-133 17 51 6 98-27 143Z" fill="var(--paper)" />
          <path d="M254 137c25-52 72-78 120-70-24 49-60 74-112 81Z" fill="var(--sand)" />
          <path d="M250 166c50-31 105-28 143 4-41 35-89 43-143 16Z" fill="var(--paper)" />
          <path d="m240 156-115-48m119 23-84-85m88 68 47-95m-42 118 111-65m-109 94 128 9" fill="none" stroke="var(--sand)" strokeWidth="2.5" />
          <circle cx="83" cy="109" r="5" fill="var(--rust)" stroke="none" />
          <circle cx="160" cy="19" r="5" fill="var(--rust)" stroke="none" />
          <circle cx="294" cy="-10" r="5" fill="var(--rust)" stroke="none" />
          <circle cx="374" cy="69" r="5" fill="var(--rust)" stroke="none" />
          <circle cx="393" cy="171" r="5" fill="var(--rust)" stroke="none" />
        </g>
      ) : null}
      {variant === 'handbook' ? (
        <g stroke="var(--charcoal)" strokeWidth="3" strokeLinejoin="round">
          <path d="M60 63c70-25 132-18 199 22v133c-67-40-129-47-199-22V63Z" fill="var(--paper)" />
          <path d="M259 85c67-40 129-47 199-22v133c-70-25-132-18-199 22V85Z" fill="var(--cream-2)" />
          <path d="M259 85v133M84 94c44-10 83-3 130 14m-130 14c44-10 83-3 130 14m-130 14c44-10 83-3 130 14m70-56c44-27 83-34 130-31m-130 59c44-27 83-34 130-31m-130 59c44-27 83-34 130-31" fill="none" stroke="var(--rust)" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 220h373" stroke="var(--olive)" strokeWidth="8" strokeLinecap="round" />
          <path d="M316 188v-25h15v25m11 0v-42h15v42m11 0v-61h15v61m11 0v-78h15v78" fill="var(--olive)" stroke="none" />
        </g>
      ) : null}
    </svg>
  )
}

