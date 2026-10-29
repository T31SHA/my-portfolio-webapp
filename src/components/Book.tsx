import { ArrowUpRight } from 'lucide-react'
import { book, site } from '@/lib/site'

export function Book() {
  return (
    <section id="book" aria-labelledby="book-title" className="overflow-hidden bg-navy py-[clamp(4.5rem,11vw,8rem)] text-paper">
      <div className="wrap grid items-center gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        {/* Typeset cover, not the published artwork. */}
        <div
          aria-hidden="true"
          className="group mx-auto block w-full max-w-[19rem] [perspective:1200px]"
          data-reveal
        >
          <div className="relative aspect-[2/3] rounded-r-[0.6rem] rounded-l-[0.2rem] bg-paper p-7 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out group-hover:[transform:rotateY(-8deg)_translateX(4px)]">
            <span className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-ink/25 to-transparent" />
            <div className="flex h-full flex-col">
              <span className="label text-signal-ink">A book</span>
              <span className="mt-auto block h-1.5 w-14 bg-signal" />
              <span className="display mt-5 block text-[2.9rem] uppercase leading-[0.88]">
                Wired
                <br />
                for
                <br />
                Disci&shy;pline
              </span>
              <span className="label mt-8 block text-muted">{site.name}</span>
            </div>
          </div>
        </div>

        <div data-reveal>
          <p className="label text-signal">03 — Writing</p>
          <h2 id="book-title" className="display mt-6 text-[clamp(2.75rem,6.5vw,5.25rem)]">
            {book.title}
          </h2>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-mist">
            My book on discipline and following through, published on Amazon in {book.published}. The same habit that gets a
            model from notebook to live app.
          </p>
          <a href={book.href} target="_blank" rel="noopener noreferrer" className="btn btn-signal mt-9">
            Read it on Amazon
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
