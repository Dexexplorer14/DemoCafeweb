import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { reviews } from '../data/reviews'

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const r = reviews[current]

  return (
    <section id="reviews" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="bracket-corners mb-6 inline-block px-4 py-1">
          <span className="font-cormorant text-sm italic tracking-wider text-peach">REVIEWS</span>
        </div>

        <h2 className="font-fraunces text-2xl font-bold sm:text-3xl text-cream">
          What Belagavi says
        </h2>

        <div className="relative mt-8 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-xl"
            >
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-peach" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed sm:text-lg text-cream">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-medium text-sage">
                — {r.name}, <span className="text-peach">{r.location}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                backgroundColor: i === current ? '#FCC48B' : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
