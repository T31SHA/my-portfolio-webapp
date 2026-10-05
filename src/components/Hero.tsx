import { useEffect, useRef, useState } from 'react'
import { DataPlate } from '@/components/hero/Plates'

const TRACK = 3500
const LERP = 0.14

// [variable, start, end] in px of scroll into the track
const BEATS = [
  ['--b0', 0, 580], // the world settles
  ['--b1', 630, 1080], // the type leaves
  ['--b2', 990, 1640], // the diptych rises, the camera pushes
  ['--b3', 1900, 2600], // the diptych parts
  ['--b4', 1770, 2310], // the data plate settles in
  ['--b5', 2900, 3400], // the data plate defocuses
] as const

// Captions: fade in over [a, b], out over [c, d]
const CAPTIONS = [
  ['--c1', 2540, 2680, 2820, 2940],
  ['--c2', 2600, 2740, 2840, 2960],
  ['--c3', 2960, 3320, 1e9, 1e9 + 1], // holds to the end
] as const

// Keys 1–6: where each scene reads best
const STOPS = [0, 580, 1080, 1640, 2720, 3400]

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

const tags = ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'scikit-learn']

export function Hero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [activeStop, setActiveStop] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let target = 0
    let current = 0
    const pTarget = { x: 0, y: 0 }
    const pCurrent = { x: 0, y: 0 }
    let ticking = false
    let lastStop = -1
    let raf = 0

    const trackTop = () => track.getBoundingClientRect().top + window.scrollY
    const readScroll = () => {
      target = Math.min(TRACK, Math.max(0, window.scrollY - trackTop()))
    }

    const write = (p: number) => {
      for (const [name, a, b] of BEATS) stage.style.setProperty(name, smoothstep(a, b, p).toFixed(4))
      for (const [name, a, b, c, d] of CAPTIONS) {
        stage.style.setProperty(name, (smoothstep(a, b, p) * (1 - smoothstep(c, d, p))).toFixed(4))
      }
      stage.style.setProperty('--mx', pCurrent.x.toFixed(4))
      stage.style.setProperty('--my', pCurrent.y.toFixed(4))

      let idx = 0
      for (let i = 0; i < STOPS.length; i++) if (p >= STOPS[i] - 40) idx = i
      if (idx !== lastStop) {
        lastStop = idx
        setActiveStop(idx)
      }
    }

    const frame = () => {
      const k = reduced.matches ? 1 : LERP
      current += (target - current) * k
      pCurrent.x += (pTarget.x - pCurrent.x) * k
      pCurrent.y += (pTarget.y - pCurrent.y) * k

      const settled =
        Math.abs(target - current) < 0.1 &&
        Math.abs(pTarget.x - pCurrent.x) < 0.001 &&
        Math.abs(pTarget.y - pCurrent.y) < 0.001
      if (settled) {
        current = target
        pCurrent.x = pTarget.x
        pCurrent.y = pTarget.y
      }
      write(current)
      if (settled) ticking = false
      else raf = requestAnimationFrame(frame)
    }

    const kick = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(frame)
      }
    }

    const onScroll = () => {
      readScroll()
      kick()
    }
    const onPointer = (e: PointerEvent) => {
      if (reduced.matches || e.pointerType === 'touch') return
      pTarget.x = (e.clientX / window.innerWidth) * 2 - 1
      pTarget.y = (e.clientY / window.innerHeight) * 2 - 1
      kick()
    }
    const onLeave = () => {
      pTarget.x = 0
      pTarget.y = 0
      kick()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName ?? '')) return
      // Only while the hero is on screen, so the keys stay free elsewhere on the page.
      if (window.scrollY - trackTop() > TRACK + window.innerHeight * 0.5) return
      const n = Number.parseInt(e.key, 10)
      if (n >= 1 && n <= STOPS.length) {
        e.preventDefault()
        goTo(n - 1)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('keydown', onKey)

    readScroll()
    current = target
    write(current)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: track.getBoundingClientRect().top + window.scrollY + STOPS[i],
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  return (
    <section id="home" ref={trackRef} className="hero-track" aria-label="Introduction">
      <div ref={stageRef} className="hero-stage">
        {/* One photograph, used twice: the far peaks, and a masked copy of the treeline that moves faster */}
        <img
          className="plate plate-bleed plate-peaks"
          src="/assets/hero-peaks.webp"
          srcSet="/assets/hero-peaks-1100.webp 1100w, /assets/hero-peaks.webp 2000w"
          sizes="100vw"
          alt="Sunlit snow-streaked peaks above dark forested hills"
          fetchPriority="high"
        />
        <div className="plate plate-bleed plate-scrim" />
        <img
          className="plate plate-bleed plate-treeline"
          src="/assets/hero-peaks.webp"
          srcSet="/assets/hero-peaks-1100.webp 1100w, /assets/hero-peaks.webp 2000w"
          sizes="100vw"
          alt=""
        />

        <p className="hero-kicker eyebrow">Data Scientist &middot; Nairobi, Kenya</p>
        <h1 className="hero-title">
          Sharahbil<span className="sr-only"> Abdi, data scientist in Nairobi</span>
        </h1>
        <div className="hero-lede">
          <p className="text-[clamp(15px,1.35vw,19px)] leading-[1.55]">
            Abdi. Machine learning, forecasting and applied analytics: turning raw data into clear decisions, grounded in simplicity, scalability and impact.
          </p>
          <p className="mt-3.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-umber">
            Open to collaborations &middot; 1.2921&deg; S, 36.8219&deg; E
          </p>
        </div>

        <div className="plate plate-bleed plate-data">
          <DataPlate className="h-full w-full" />
        </div>
        <div className="plate plate-bleed plate-vignette" />

        <figure className="leaf leaf-l m-0 bg-paper p-3 pb-11 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.7)]">
          <span className="absolute -top-3 left-5 -rotate-3 bg-ochre px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-ink">T31SHA</span>
          <img
            src="/assets/sharahbil-abdi.jpg"
            alt="Sharahbil Abdi speaking at a podium in a navy academic gown and orange stole"
            width={640}
            height={640}
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute inset-x-3 bottom-3.5 hidden sm:flex justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-umber">
            <span>Sharahbil Abdi</span>
            <span>Nairobi</span>
          </figcaption>
        </figure>

        <div className="leaf leaf-r flex flex-col justify-center bg-paper p-[clamp(20px,3vw,44px)] text-ink shadow-[0_30px_60px_-28px_rgba(0,0,0,0.7)]">
          <p className="eyebrow !text-cobalt">01 &middot; Who I am</p>
          <h2 className="display mt-4 text-[clamp(28px,3.4vw,50px)]">Raw data, read closely.</h2>
          <p className="mt-5 text-[clamp(13px,1vw,15px)] leading-[1.65] text-umber">
            I am a data-focused technologist with a strong interest in data science, machine learning, and building systems that solve real-world problems. I turn raw data into clear, actionable insight.
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-ochre">{tags.join(' · ')}</p>
        </div>

        <aside className="hero-caption cap-1">
          <small className="eyebrow mb-2.5 block !text-cobalt">Based in &middot; Nairobi</small>
          <h2 className="display mb-2 text-[30px] font-normal leading-[1.05]">Where the data meets the ground.</h2>
          <p className="text-sm leading-[1.55] text-umber">Floods, drought, markets, crops: problems I can stand next to, modelled with care.</p>
        </aside>
        <aside className="hero-caption cap-2">
          <small className="eyebrow mb-2.5 block !text-cobalt">The practice</small>
          <h2 className="display mb-2 text-[30px] font-normal leading-[1.05]">Observe, model, forecast.</h2>
          <p className="text-sm leading-[1.55] text-umber">Time-series, classification and decision support, built to be read by the people who use it.</p>
        </aside>
        <div className="cap-3">
          <p className="eyebrow">In one line</p>
          <p className="display mt-5 text-[clamp(38px,6.4vw,104px)] text-paper">
            &ldquo;Turning raw data into
            <br />
            decisions that matter.&rdquo;
          </p>
        </div>

        <div className="hero-chrome">
          <span className="hero-hint eyebrow !text-paper">Scroll</span>
          <ol className="m-0 flex list-none gap-1.5 p-0" aria-label="Jump to scene (keys 1–6)">
            {STOPS.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  className="beat-btn"
                  aria-label={`Scene ${i + 1}`}
                  aria-current={activeStop === i}
                  onClick={() => goTo(i)}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
