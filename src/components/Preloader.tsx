import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-paper"
          aria-hidden="true"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.p
              className="font-display text-[clamp(28px,4vw,44px)] font-light uppercase tracking-[0.3em]"
              initial={{ opacity: 0, letterSpacing: '0.18em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Sharahbil Abdi
            </motion.p>
            <motion.span
              className="mt-5 h-px w-40 origin-left bg-ochre"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
