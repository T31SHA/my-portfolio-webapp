import { useEffect, useRef, useState } from 'react'

export type BackgroundTheme = 'quartz' | 'midnight' | 'blue'

export function useBackgroundTheme() {
  const [theme, setTheme] = useState<BackgroundTheme>('quartz')
  const hydrated = useRef(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('bg-theme') as BackgroundTheme | null
    if (savedTheme === 'quartz' || savedTheme === 'midnight' || savedTheme === 'blue') {
      setTheme(savedTheme)
    }
    hydrated.current = true
  }, [])

  useEffect(() => {
    if (hydrated.current) window.localStorage.setItem('bg-theme', theme)
  }, [theme])

  return { theme, setTheme }
}
