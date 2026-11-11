export function MaskIcon({ src, size }: { src: string; size: number }) {
  return (
    <span
      className="mask-icon"
      style={{
        width: size,
        height: size,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
      aria-hidden="true"
    />
  )
}

export function RotatingBadge({
  id,
  text,
  center,
  className = '',
}: {
  id: string
  text: string
  center: 'burst' | 'spark'
  className?: string
}) {
  const radius = 52
  const length = Math.round(2 * Math.PI * radius)
  return (
    <svg className={`rotating-badge ${className}`} viewBox="0 0 128 128" role="img" aria-label={text}>
      <circle cx="64" cy="64" r="63.5" fill="#FBF6EC" stroke="#1E1A17" />
      <g transform="rotate(-18 64 64)">
        <defs>
          <path id={id} d={`M64 ${64 - radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`} />
        </defs>
        <text className="badge-ring-text">
          <textPath href={`#${id}`} startOffset="0%" textLength={length} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </g>
      {center === 'burst' ? (
        <image href="/design/starburst.svg" x="44" y="44" width="40" height="40" />
      ) : (
        <image href="/design/sparkle-rust-xs.svg" x="49" y="49" width="30" height="30" />
      )}
    </svg>
  )
}
