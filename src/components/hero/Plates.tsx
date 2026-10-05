// Illustrated plates for the hero, stacked back to front.
// Random detail is seeded so the server and client render identical markup.

function seeded(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const f = (n: number) => n.toFixed(1)

/* ---------- z0 · sky ---------- */

const skyRand = seeded(7)
const stars = Array.from({ length: 80 }, () => ({
  x: f(skyRand() * 1600),
  y: f(skyRand() * 440),
  r: f(skyRand() * 1.3 + 0.3),
  o: (skyRand() * 0.55 + 0.15).toFixed(2),
}))
// A faint scatter with its fitted line: data in the dusk sky.
const scatter = Array.from({ length: 18 }, (_, i) => {
  const x = 220 + i * 68 + skyRand() * 30
  return { x: f(x), y: f(392 - (x - 220) * 0.21 + (skyRand() - 0.5) * 70) }
})

export function SkyPlate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1828" />
          <stop offset="0.32" stopColor="#1d3654" />
          <stop offset="0.56" stopColor="#56607a" />
          <stop offset="0.74" stopColor="#b88a62" />
          <stop offset="0.9" stopColor="#e2bb8a" />
          <stop offset="1" stopColor="#edcf9f" />
        </linearGradient>
        <radialGradient id="sky-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f6dfb4" stopOpacity="0.75" />
          <stop offset="0.35" stopColor="#e9b980" stopOpacity="0.3" />
          <stop offset="1" stopColor="#e9b980" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#sky-fill)" />
      <circle cx="800" cy="700" r="460" fill="url(#sky-sun)" />
      <circle cx="800" cy="702" r="64" fill="#f7e2bb" opacity="0.9" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#ede4d4" opacity={s.o} />
      ))}
      <g opacity="0.22" fill="#ede4d4">
        {scatter.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="1.8" />
        ))}
      </g>
      <line x1="200" y1="398" x2="1460" y2="133" stroke="#ede4d4" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="2 7" />
    </svg>
  )
}

/* ---------- z1 · Ngong Hills ridge ---------- */

export function RidgePlate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1600 400" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="ridge-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c3a58" />
          <stop offset="0.45" stopColor="#4d5470" />
          <stop offset="1" stopColor="#8a7570" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ridge-fill)"
        d="M0 400 L0 262 C120 250 220 228 320 206 C410 186 470 160 520 128 C548 108 566 96 584 102 C604 110 618 126 646 118
           C672 110 690 80 716 72 C740 66 758 98 786 104 C812 110 836 92 864 80 C884 70 898 66 914 72 C934 80 950 100 978 98
           C1004 96 1024 70 1048 62 C1072 56 1092 84 1124 108 C1180 148 1250 176 1340 204 C1430 230 1520 246 1600 252 L1600 400 Z"
      />
    </svg>
  )
}

/* ---------- z2 · savannah hills with acacias ---------- */

const acacias = [
  { x: 470, y: 352, w: 130 },
  { x: 610, y: 400, w: 84 },
  { x: 1690, y: 368, w: 150 },
  { x: 1860, y: 404, w: 92 },
  { x: 300, y: 300, w: 70 },
  { x: 2050, y: 318, w: 64 },
  { x: 980, y: 262, w: 46 },
]

export function HillsPlate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 2400 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="hills-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a07a54" />
          <stop offset="1" stopColor="#7a573a" />
        </linearGradient>
        <linearGradient id="hills-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7b5638" />
          <stop offset="1" stopColor="#5a3e29" />
        </linearGradient>
        <symbol id="acacia" viewBox="0 0 200 160">
          <path d="M95 160 L98 96 L76 72 L81 69 L99 86 L102 58 L108 58 L106 88 L126 70 L130 74 L108 96 L106 160 Z" />
          <path d="M6 64 C26 42 70 32 102 34 C138 32 176 42 196 60 C184 68 164 64 150 70 C124 64 86 70 54 68 C36 70 18 70 6 64 Z" />
        </symbol>
      </defs>
      <path
        fill="url(#hills-back)"
        d="M0 700 L0 352 C260 304 520 326 760 292 C990 260 1190 300 1410 282 C1660 262 1920 300 2400 326 L2400 700 Z"
      />
      <g fill="#3c2a1c" opacity="0.55">
        {acacias.slice(4).map((t, i) => (
          <use key={i} href="#acacia" x={t.x - t.w / 2} y={t.y - t.w * 0.8} width={t.w} height={t.w * 0.8} />
        ))}
      </g>
      <path
        fill="url(#hills-mid)"
        d="M0 700 L0 468 C260 420 600 452 900 412 C1150 380 1350 430 1600 420 C1900 406 2150 442 2400 430 L2400 700 Z"
      />
      <g fill="#2f2117">
        {acacias.slice(0, 4).map((t, i) => (
          <use key={i} href="#acacia" x={t.x - t.w / 2} y={t.y - t.w * 0.8 + 6} width={t.w} height={t.w * 0.8} />
        ))}
      </g>
      <path fill="#43301f" d="M0 700 L0 594 C400 562 800 602 1200 578 C1600 552 2000 592 2400 572 L2400 700 Z" />
    </svg>
  )
}

/* ---------- z3 · Nairobi skyline ---------- */

type Block = [x: number, w: number, h: number]

const farBlocks: Block[] = [
  [40, 46, 150], [92, 38, 210], [214, 44, 250], [350, 40, 230], [536, 52, 270],
  [604, 30, 196], [742, 44, 300], [800, 36, 220], [880, 54, 180], [946, 40, 140],
]
const nearBlocks: Block[] = [
  [0, 60, 96], [66, 54, 160], [258, 64, 330], [338, 48, 200], [516, 40, 150],
  [700, 52, 230], [760, 44, 190], [812, 66, 260], [884, 46, 150], [934, 66, 110],
]

const winRand = seeded(23)
const windows = nearBlocks.flatMap(([x, w, h]) => {
  const lit: { x: string; y: string }[] = []
  for (let wy = 520 - h + 14; wy < 506; wy += 12) {
    for (let wx = x + 7; wx < x + w - 7; wx += 9) {
      if (winRand() < 0.13) lit.push({ x: f(wx), y: f(wy) })
    }
  }
  return lit
})

export function CityPlate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1000 520" aria-label="Nairobi skyline at dusk with the KICC tower" role="img">
      <g fill="#3a2b1f">
        {farBlocks.map(([x, w, h], i) => (
          <rect key={i} x={x} y={520 - h} width={w} height={h} />
        ))}
      </g>
      <g fill="#241a12">
        {nearBlocks.map(([x, w, h], i) => (
          <rect key={i} x={x} y={520 - h} width={w} height={h} />
        ))}
        {/* Jamia mosque: dome and minarets */}
        <path d="M128 520 L128 452 L206 452 L206 520 Z M134 452 C134 412 200 412 200 452 Z" />
        <rect x="120" y="380" width="7" height="140" />
        <rect x="207" y="380" width="7" height="140" />
        <path d="M118 382 L123.5 364 L129 382 Z M205 382 L210.5 364 L216 382 Z" />
        {/* Times Tower */}
        <rect x="292" y="150" width="42" height="370" />
        <rect x="300" y="138" width="26" height="14" />
        {/* KICC: drum tower, saucer crown, conical amphitheatre */}
        <rect x="400" y="470" width="170" height="50" />
        <rect x="447" y="152" width="50" height="320" />
        <ellipse cx="472" cy="152" rx="48" ry="9" />
        <rect x="464" y="128" width="16" height="24" />
        <rect x="471" y="96" width="2" height="34" />
        <path d="M510 470 L510 452 L600 452 L600 470 Z M504 454 L555 412 L606 454 Z" />
        {/* Britam tower: tapering prism with a sloped crown */}
        <path d="M618 520 L618 120 L650 58 L688 96 L688 520 Z" />
        <rect x="651" y="22" width="2" height="40" />
        {/* Ground line so the plate sits flush to the bottom edge */}
        <rect x="0" y="506" width="1000" height="14" />
      </g>
      {/* KICC facade fins */}
      <g fill="#ede4d4" opacity="0.18">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x={452 + i * 5.6} y="160" width="1.4" height="306" />
        ))}
      </g>
      <g fill="#e9b980" opacity="0.85">
        {windows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width="3" height="4" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <rect key={`k${i}`} x={455 + (i % 3) * 14} y={190 + i * 27} width="3" height="4" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={`b${i}`} x={630 + (i % 2) * 34} y={150 + i * 46} width="3" height="4" />
        ))}
      </g>
      <circle cx="472" cy="94" r="2.4" fill="#d9573a" />
      <circle cx="652" cy="20" r="2.4" fill="#d9573a" />
    </svg>
  )
}

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
