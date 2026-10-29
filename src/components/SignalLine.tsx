// Decorative observed → forecast line behind the hero. Geometry is computed at module load,
// so server and client render identical markup.

const f = (n: number) => n.toFixed(1)

const NOW = 1080
const series = Array.from({ length: 91 }, (_, i) => {
  const x = i * 16
  const y = 300 - 54 * Math.sin(x / 140) - 26 * Math.sin(x / 51 + 1) - 0.09 * x
  return { x, y }
})
const history = series.filter((p) => p.x <= NOW)
const forecast = series.filter((p) => p.x >= NOW)
const toPath = (pts: { x: number; y: number }[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${f(p.x)} ${f(p.y)}`).join(' ')
const band = (() => {
  const spread = (x: number) => 6 + (x - NOW) * 0.32
  const upper = forecast.map((p) => ({ x: p.x, y: p.y - spread(p.x) }))
  const lower = [...forecast].reverse().map((p) => ({ x: p.x, y: p.y + spread(p.x) }))
  return `${toPath(upper)} ${toPath(lower).replace('M', 'L')} Z`
})()
const last = history[history.length - 1]

export function SignalLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeOpacity="0.07">
        {[120, 200, 280, 360, 440].map((y) => (
          <line key={y} x1="0" x2="1440" y1={y} y2={y} />
        ))}
      </g>
      <path className="signal-fade" d={band} fill="var(--color-signal)" fillOpacity="0.14" />
      <path
        className="signal-draw"
        d={toPath(history)}
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="signal-fade"
        d={toPath(forecast)}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        vectorEffect="non-scaling-stroke"
      />
      <line className="signal-fade" x1={NOW} x2={NOW} y1="60" y2="470" stroke="var(--color-signal)" strokeOpacity="0.5" vectorEffect="non-scaling-stroke" />
      <circle className="signal-fade" cx={NOW} cy={f(last.y)} r="4" fill="var(--color-signal)" />
    </svg>
  )
}
