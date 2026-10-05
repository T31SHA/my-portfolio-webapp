import { Send } from 'lucide-react'
import { type FormEvent, useEffect, useRef, useState } from 'react'
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
    <section id="contact" className="bg-ink px-[6vw] py-[16vh] text-paper">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">04 &middot; Contact</p>
          <h2 className="display mt-6 text-[clamp(44px,6.2vw,92px)]">
            Got a dataset,
            <br />
            <em className="text-ochre">or a question?</em>
          </h2>
          <p className="mt-6 max-w-xl text-paper/70">Leave a message for work and collaborations, or sign the guestbook.</p>
        </Reveal>

        <div className="mt-[10vh] grid gap-16 md:grid-cols-2 md:gap-20">
          <Reveal delay={0.08}>
            <h3 className="display text-[34px] font-normal">Get in touch</h3>
            <p className="mt-2 text-sm leading-6 text-paper/60">Direct line to my inbox.</p>
            <form className="mt-8 space-y-3" onSubmit={submitMessage}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input required name="name" type="text" placeholder="Name" className="field-line" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input required name="email" type="email" placeholder="Email" className="field-line" />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea required name="message" placeholder="Message" rows={4} className="field-line resize-none" />
              </label>
              <button type="submit" className="btn-ink focus-ring mt-6 !bg-paper !text-ink hover:!bg-ochre">
                <Send className="h-4 w-4" strokeWidth={1.5} />
                Send message
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.16}>
            <h3 className="display text-[34px] font-normal">Guestbook</h3>
            <p className="mt-2 text-sm leading-6 text-paper/60">New comments appear as pending until reviewed.</p>
            <form className="mt-8 space-y-3" onSubmit={submitComment}>
              <label className="block">
                <span className="sr-only">Name</span>
                <input value={guestName} onChange={(event) => { setGuestName(event.target.value); guardGuestbook() }} type="text" placeholder="Name (optional)" className="field-line" />
              </label>
              <label className="block">
                <span className="sr-only">Comment</span>
                <textarea required value={guestComment} onChange={(event) => { setGuestComment(event.target.value); guardGuestbook() }} placeholder="Leave a comment" rows={3} className="field-line resize-none" />
              </label>
              <button type="submit" disabled={cooldown} className="btn-line focus-ring mt-6 disabled:cursor-not-allowed disabled:opacity-50">
                {cooldown ? 'Please wait…' : 'Post comment'}
              </button>
            </form>

            <div className="mt-10 space-y-6 border-t border-paper/15 pt-6">
              {comments.map((comment, index) => (
                <article key={`${comment.time}-${index}`} className="border-l-2 border-ochre pl-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-sm font-semibold">{comment.name}</p>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50">{comment.time}</span>
                    {comment.pending ? <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ochre">Pending</span> : null}
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-paper/70">{comment.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
