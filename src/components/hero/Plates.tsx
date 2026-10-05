// The hero's data plate. Geometry is computed at module load, so the server and client render identical markup.

const f = (n: number) => n.toFixed(1)

/* ---------- z5 · data plate ---------- */

function contour(cx: number, cy: number, r: number, k: number) {
  const pts: string[] = []
  for (let i = 0; i <= 72; i++) {
    const a = (i / 72) * Math.PI * 2
    const rr = r * (1 + 0.13 * Math.sin(3 * a + k * 0.45) + 0.06 * Math.sin(5 * a - k * 0.3))
    pts.push(`${f(cx + Math.cos(a) * rr * 1.25)} ${f(cy + Math.sin(a) * rr)}`)
  }
  return `M${pts.join(' L')} Z`
}

const contours = [
  ...Array.from({ length: 15 }, (_, k) => contour(380, 300, 34 + k * 30, k)),
  ...Array.from({ length: 13 }, (_, k) => contour(1260, 760, 30 + k * 34, k + 5)),
]

const NOW = 1040
const series = Array.from({ length: 81 }, (_, i) => {
  const x = 160 + i * 16
  const y = 640 - 64 * Math.sin(x / 130) - 30 * Math.sin(x / 47 + 1) - 0.13 * (x - 160)
  return { x, y }
})
const history = series.filter((p) => p.x <= NOW)
const forecast = series.filter((p) => p.x >= NOW)
const toPath = (pts: { x: number; y: number }[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${f(p.x)} ${f(p.y)}`).join(' ')
const band = (() => {
  const spread = (x: number) => 8 + (x - NOW) * 0.22
  const upper = forecast.map((p) => ({ x: p.x, y: p.y - spread(p.x) }))
  const lower = [...forecast].reverse().map((p) => ({ x: p.x, y: p.y + spread(p.x) }))
  return `${toPath(upper)} ${toPath(lower).replace('M', 'L')} Z`
})()

export function DataPlate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="data-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a1f16" />
          <stop offset="1" stopColor="#140e09" />
        </linearGradient>
        <pattern id="data-dots" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ede4d4" opacity="0.09" />
        </pattern>
      </defs>
      <rect width="1600" height="1000" fill="url(#data-fill)" />
      <rect width="1600" height="1000" fill="url(#data-dots)" />
      <g fill="none" stroke="#6b4a32" strokeWidth="1.2" opacity="0.6">
        {contours.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g stroke="#ede4d4" strokeOpacity="0.12">
        {[340, 460, 580, 700, 820].map((y) => (
          <line key={y} x1="160" x2="1440" y1={y} y2={y} />
        ))}
      </g>
      <path d={band} fill="#2e5c8a" opacity="0.34" />
      <path d={toPath(history)} fill="none" stroke="#ede4d4" strokeWidth="2.4" />
      <path d={toPath(forecast)} fill="none" stroke="#b08b5c" strokeWidth="2.4" strokeDasharray="7 7" />
      <line x1={NOW} x2={NOW} y1="300" y2="860" stroke="#b08b5c" strokeOpacity="0.6" />
      <circle cx={NOW} cy={f(history[history.length - 1].y)} r="5" fill="#b08b5c" />
      <g fill="#ede4d4" opacity="0.5" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="600" letterSpacing="3.4">
        <text x="160" y="318">OBSERVED</text>
        <text x={NOW + 14} y="318">NOW</text>
        <text x="1440" y="318" textAnchor="end">FORECAST</text>
      </g>
    </svg>
  )
}
