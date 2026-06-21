import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const heroImage = {
  src: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1200',
  alt: 'Triple Layered Chocolate Mousse Cake — Wild Sugar bestseller',
}

const mobileSlides = [
  {
    src: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Chocolate cake slice with layers',
  },
  {
    src: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cozy cafe interior with warm lighting',
  },
  {
    src: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Crispy chicken burger on dark surface',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const sectionRef = useRef(null)

  const next = useCallback(() => setCurrent((c) => (c + 1) % mobileSlides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + mobileSlides.length) % mobileSlides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (!touchStart) return
    const diff = e.changedTouches[0].clientX - touchStart
    if (Math.abs(diff) > 50) diff > 0 ? prev() : next()
    setTouchStart(null)
  }

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] overflow-hidden md:min-h-[85vh]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl bg-peach/5" />

      <div className="mx-auto flex h-full max-w-7xl flex-col-reverse lg:flex-row lg:items-center">
        {/* Left: copy */}
        <div className="relative z-10 flex w-full flex-col justify-center px-4 pb-10 pt-6 sm:px-6 lg:w-1/2 lg:pb-20 lg:pl-10 lg:pr-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1 text-xs font-medium backdrop-blur-sm bg-white/5 text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Accepting orders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mt-4 font-fraunces text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-cream"
          >
            Wild
            <span className="text-peach">Sugar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-3 max-w-md font-cormorant text-2xl italic leading-snug sm:text-3xl text-peach"
          >
            Life is short&hellip; eat dessert first!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-2 max-w-md text-base leading-relaxed text-sage"
          >
            Artisanal bakes, bold burgers &amp; comfort classics — made from scratch in Belagavi, delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://www.zomato.com/belgaum/wild-sugar-patisserie-cafe-1-belgaum-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-manipulation inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-150 active:scale-95 hover:shadow-[0_0_15px_rgba(252,196,139,0.4)]"
              style={{ backgroundColor: '#E23744', color: 'white' }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Zomato
            </a>
            <a
              href="https://www.swiggy.com/city/belgaum/wild-sugar-ayodhya-nagar-rest102475"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-manipulation inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150 active:scale-95 hover:shadow-[0_0_15px_rgba(252,196,139,0.4)]"
              style={{ backgroundColor: '#FC8019', color: 'white' }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Swiggy
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="mt-6 flex items-center gap-4 text-xs text-sage"
          >
            <span className="flex items-center gap-1">
              <span className="text-peach">&#9733;</span> 4.8 Rating
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span>6.8K+ Instagram</span>
            <span className="h-3 w-px bg-white/10" />
            <span>2 locations in Belagavi</span>
          </motion.div>
        </div>

        {/* Right: desktop — single floating product image */}
        <div className="relative hidden h-full w-1/2 items-center justify-center overflow-hidden lg:flex">
          <motion.div
            style={{ y: imageY }}
            className="relative w-full max-w-lg translate-x-8"
          >
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              fetchpriority="high"
              className="h-auto w-full object-contain drop-shadow-2xl shadow-2xl shadow-black/60"
            />
          </motion.div>

          {/* Decorative glow behind image */}
          <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl bg-teal-800/40" />
        </div>

        {/* Right: mobile — carousel */}
        <div
          className="relative h-[45vh] w-full overflow-hidden md:h-[50vh] lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={mobileSlides[current].src}
              alt={mobileSlides[current].alt}
              fetchpriority="high"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {mobileSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-peach' : 'w-1.5 bg-white/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
