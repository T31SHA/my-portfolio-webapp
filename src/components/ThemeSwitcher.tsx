import { Moon, Sparkles, Waves } from 'lucide-react'
import type { BackgroundTheme } from '@/hooks/use-background-theme'
import { cn } from '@/lib/utils'

type ThemeSwitcherProps = {
  theme: BackgroundTheme
  setTheme: (theme: BackgroundTheme) => void
}

const themes: { id: BackgroundTheme; label: string; icon: typeof Moon }[] = [
  { id: 'quartz', label: 'Oryzo Darkroom', icon: Sparkles },
  { id: 'midnight', label: 'Midnight Slate', icon: Moon },
  { id: 'blue', label: 'Obsidian Ink', icon: Waves },
]

export function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <div className="glass-surface fixed bottom-4 right-4 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full p-1" aria-label="Background theme">
      {themes.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          aria-pressed={theme === id}
          title={label}
          onClick={() => setTheme(id)}
          className={cn(
            'focus-visible:ring-2 focus-visible:ring-ring flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-2 font-mono text-[0.575rem] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none',
            theme === id && 'bg-foreground/10 text-foreground shadow-sm shadow-black/10',
          )}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}
