import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { Download } from 'lucide-react'
import { useEffect } from 'react'

const tags = ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'scikit-learn']

export function Hero() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const targetRotation = useTransform(pointerX, [-1, 1], [-7, -1])
  const rotation = useSpring(targetRotation, { stiffness: 90, damping: 14 })

  useEffect(() => {
    const onPointerMove = (event: MouseEvent) => {
      const normalized = (event.clientX / window.innerWidth) * 2 - 1
      pointerX.set(Math.max(-1, Math.min(1, normalized)))
    }
    window.addEventListener('mousemove', onPointerMove)
    return () => window.removeEventListener('mousemove', onPointerMove)
  }, [pointerX])

  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:pt-40">
      <div className="grid items-start gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Data Scientist · Nairobi, Kenya</p>
          <h1 className="mt-5 text-[clamp(3.5rem,12vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.065em]">
            Data
            <br />
            <span className="text-muted-foreground">Scientist</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I am a data-focused technologist with a strong interest in data science, machine learning, and building systems that solve real-world problems. I focus on transforming raw data into clear, actionable insights that support effective decision-making, grounded in simplicity, scalability, and impact.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/assets/sharahbil-abdi-cv.pdf" download className="btn-pill focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
              <Download className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Download CV
            </a>
            <a
              href="#contact"
              className="focus-ring text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>

        <div className="mx-auto w-full max-w-[300px] pt-14 md:mx-0 md:justify-self-end">
          <div className="relative flex flex-col items-center">
            <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 overflow-hidden" aria-hidden="true">
              {[
                { glyph: 'D', left: '8%', top: '18%', delay: 0, duration: 6.4 },
                { glyph: 'A', left: '82%', top: '12%', delay: 1.1, duration: 7.2 },
                { glyph: 'T', left: '12%', top: '72%', delay: 0.6, duration: 5.8 },
                { glyph: 'A·I', left: '84%', top: '66%', delay: 1.8, duration: 6.8 },
                { glyph: 'ML', left: '48%', top: '4%', delay: 2.3, duration: 7.6 },
              ].map(({ glyph, left, top, delay, duration }) => (
                <motion.span
                  key={glyph}
                  className="absolute font-mono text-xs tracking-[0.18em] text-foreground/30"
                  style={{ left, top }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={reduceMotion ? { opacity: 0.22 } : { opacity: [0, 0.42, 0.18, 0], y: [8, -4, -16, -24] }}
                  transition={{ duration, delay, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
                >
                  {glyph}
                </motion.span>
              ))}
            </div>
            <div className="h-16 w-px bg-hairline" aria-hidden="true" />
            <motion.div className="relative z-10 origin-top" style={{ rotate: rotation }}>
              <div className="polaroid-shadow relative bg-foreground p-3 pb-10 [border-radius:2px]">
                <span className="absolute -top-3 left-4 -rotate-6 bg-surface-2 px-3 py-1 font-mono text-[0.65rem] tracking-[0.18em] text-foreground shadow-sm">
                  T31SHA
                </span>
                <img
                  src="/assets/sharahbil-abdi.jpg"
                  alt="Sharahbil Abdi speaking at a podium in a navy academic gown and orange stole"
                  width={768}
                  height={960}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-20 hidden items-center gap-4 md:flex" aria-hidden="true">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.span
          className="h-px w-16 origin-left bg-hairline"
          animate={{ scaleX: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>
    </section>
  )
}
