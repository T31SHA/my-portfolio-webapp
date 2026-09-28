import { AtSign, MessageCircle, Send, UserRound } from 'lucide-react'
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Reveal } from '@/components/Reveal'

type CommentEntry = {
  name: string
  text: string
  time: string
  pending?: boolean
}

const initialComments: CommentEntry[] = [
  {
    name: 'Placeholder Visitor',
    text: 'Clean portfolio — the churn prediction write-up was a great read.',
    time: '2 days ago',
  },
]

function FieldIcon({ children }: { children: ReactNode }) {
  return <span className="pointer-events-none absolute left-3 top-3 text-muted-foreground">{children}</span>
}

export function Contact() {
  const [comments, setComments] = useState<CommentEntry[]>(initialComments)
  const [guestName, setGuestName] = useState('')
  const [guestComment, setGuestComment] = useState('')
  const [cooldown, setCooldown] = useState(false)
  const cooldownTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (cooldownTimer.current) window.clearTimeout(cooldownTimer.current)
    }
  }, [])

  const guardGuestbook = () => {
    setCooldown(true)
    if (cooldownTimer.current) window.clearTimeout(cooldownTimer.current)
    cooldownTimer.current = window.setTimeout(() => setCooldown(false), 2000)
  }

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast.success("Message sent — I'll get back to you soon.")
    event.currentTarget.reset()
  }

  const submitComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (cooldown || !guestComment.trim()) return
    setComments((current) => [
      { name: guestName.trim() || 'Anonymous', text: guestComment.trim(), time: 'just now', pending: true },
      ...current,
    ])
    setGuestName('')
    setGuestComment('')
    toast.success('Comment submitted for review.')
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="text-center">
        <div className="relative inline-block">
          <span className="absolute left-1 top-1 text-4xl font-extrabold tracking-[-0.04em] text-foreground/15 sm:text-5xl" aria-hidden="true">Contact Me</span>
          <h2 className="relative text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Contact Me</h2>
        </div>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Got a project, a dataset, or a question? Leave a message or sign the guestbook.</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal delay={0.08}>
          <div className="card-surface h-full p-6 sm:p-7">
            <h3 className="text-xl font-semibold tracking-tight">Get in Touch</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Direct line to my inbox for work and collaborations.</p>
            <form className="mt-7 space-y-4" onSubmit={submitMessage}>
              <label className="relative block">
                <span className="sr-only">Name</span>
                <FieldIcon><UserRound className="h-4 w-4" strokeWidth={1.5} /></FieldIcon>
                <input required name="name" type="text" placeholder="Name" className="glass-field focus-visible:ring-2 focus-visible:ring-ring w-full rounded-xl py-3 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none" />
              </label>
              <label className="relative block">
                <span className="sr-only">Email</span>
                <FieldIcon><AtSign className="h-4 w-4" strokeWidth={1.5} /></FieldIcon>
                <input required name="email" type="email" placeholder="Email" className="glass-field focus-visible:ring-2 focus-visible:ring-ring w-full rounded-xl py-3 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none" />
              </label>
              <label className="relative block">
                <span className="sr-only">Message</span>
                <FieldIcon><MessageCircle className="h-4 w-4" strokeWidth={1.5} /></FieldIcon>
                <textarea required name="message" placeholder="Message" rows={5} className="glass-field focus-visible:ring-2 focus-visible:ring-ring w-full resize-none rounded-xl py-3 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none" />
              </label>
              <button type="submit" className="btn-pill focus-visible:ring-2 focus-visible:ring-ring w-full focus-visible:outline-none">
                <Send className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Send Message
              </button>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="card-surface h-full p-6 sm:p-7">
            <h3 className="text-xl font-semibold tracking-tight">Comments</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Public guestbook — new comments appear as pending until reviewed.</p>
            <form className="mt-7 space-y-4" onSubmit={submitComment}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input value={guestName} onChange={(event) => { setGuestName(event.target.value); guardGuestbook() }} type="text" placeholder="Name (optional)" className="glass-field focus-visible:ring-2 focus-visible:ring-ring w-full rounded-xl px-3 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none" />
              </label>
              <label className="block">
                <span className="sr-only">Comment</span>
                <textarea required value={guestComment} onChange={(event) => { setGuestComment(event.target.value); guardGuestbook() }} placeholder="Leave a comment" rows={4} className="glass-field focus-visible:ring-2 focus-visible:ring-ring w-full resize-none rounded-xl px-3 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none" />
              </label>
              <label className="sr-only">
                Attach image (optional)
                <input type="file" accept="image/*" />
              </label>
              <button type="submit" disabled={cooldown} className="btn-ghost focus-visible:ring-2 focus-visible:ring-ring w-full disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none">
                {cooldown ? 'Please wait…' : 'Post Comment'}
              </button>
            </form>

            <div className="divider-dashed mt-8 pt-5">
              <div className="space-y-5">
                {comments.map((comment, index) => (
                  <article key={`${comment.time}-${index}`} className="flex gap-3">
                    <div className="glass-surface flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs text-muted-foreground" aria-hidden="true">
                      {comment.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="text-sm font-semibold">{comment.name}</p>
                        <span className="text-xs text-muted-foreground">{comment.time}</span>
                        {comment.pending ? <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-muted-foreground">Pending</span> : null}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{comment.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
