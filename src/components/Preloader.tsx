import { AnimatePresence, motion } from 'motion/react'
import { BarChart3, BrainCircuit, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden="true"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex items-center gap-5 text-muted-foreground">
              {[Terminal, BarChart3, BrainCircuit].map((Icon, index) => (
                <motion.div
                  key={Icon.displayName ?? index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
            >
              Welcome to my
            </motion.p>
            <motion.p
              className="mt-1 text-lg text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55 }}
            >
              Portfolio Website
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
