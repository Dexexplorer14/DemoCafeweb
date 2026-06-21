import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories } from '../data/menu'

const tagMap = {
  veg: { label: 'Veg', color: 'bg-green-500' },
  nonveg: { label: 'Non-Veg', color: 'bg-red-500' },
  egg: { label: 'Contains Egg', color: 'bg-yellow-500' },
}

function MenuCardImage({ src, alt }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white/5">
        <svg className="h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  )
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5">
      <div className="aspect-[3/4] skeleton-shimmer" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-3/4 rounded skeleton-shimmer" />
        <div className="h-4 w-full rounded skeleton-shimmer" />
        <div className="h-4 w-1/2 rounded skeleton-shimmer" />
      </div>
    </div>
  )
}

function MenuCard({ item }) {
  const tags = item.tags.map((t) => tagMap[t]).filter(Boolean)
  const badges = []
  if (item.isBestseller) badges.push({ label: 'Bestseller', className: 'bg-peach text-ink-soft' })
  if (item.isNew) badges.push({ label: 'New', className: 'bg-peach/15 text-peach' })
  if (item.isSeasonal) badges.push({ label: 'Seasonal', className: 'bg-peach/15 text-peach' })

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <div className="card-bracket card-bracket-tl" />
        <div className="card-bracket card-bracket-tr" />
        <div className="card-bracket card-bracket-bl" />
        <div className="card-bracket card-bracket-br" />

        <MenuCardImage src={item.image} alt={item.name} />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold leading-none ${b.className}`}
            >
              {b.label}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm bg-black/50 text-sage"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${t.color}`} />
              {t.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div>
          <h3 className="font-fraunces text-base font-semibold leading-tight sm:text-lg text-cream line-clamp-2">
            {item.name}
          </h3>
          {item.price === null && (
            <span className="mt-1.5 inline-block text-[11px] font-medium uppercase tracking-wider text-peach">
              Price on request
            </span>
          )}
          <p className="mt-1.5 text-sm leading-relaxed line-clamp-2 text-sage">
            {item.description}
          </p>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          {item.price !== null && (
            <span className="text-base sm:text-lg font-semibold tabular-nums text-peach">
              &#x20B9;{item.price}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Categories({ activeCategory, setActiveCategory, menuItems, bestsellers }) {
  const [loading, setLoading] = useState(true)
  const filtered = menuItems.filter((item) => item.category === activeCategory)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const showBestsellers = bestsellers.length > 0 && activeCategory === 'cakes'

  return (
    <section id="menu">
      {/* Category pills */}
      <div className="mb-6 flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`touch-manipulation shrink-0 rounded-full px-5 py-2.5 text-sm whitespace-nowrap transition-colors duration-300 ${
                isActive ? 'bg-peach text-ink-soft font-semibold' : 'bg-white/5 text-sage border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Bestsellers carousel */}
      {showBestsellers && (
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-fraunces text-lg font-semibold sm:text-xl text-cream">
              Most Loved This Week
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {bestsellers.map((item) => (
              <div key={item.id} className="w-60 shrink-0 sm:w-72">
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu grid */}
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {!loading && filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-sage">
          Nothing here yet. Check back soon!
        </p>
      )}
    </section>
  )
}
