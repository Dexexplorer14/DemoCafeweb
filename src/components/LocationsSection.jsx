import { motion } from 'framer-motion'
import { locations } from '../data/locations'

function getStatus(hours) {
  const hour = new Date().getHours()
  const day = new Date().getDay()
  const range = day === 0 ? hours.weekend : hours.weekday
  const isOpen = hour >= range.open && hour < range.close
  const closeStr = range.close % 1 === 0 ? `${range.close}:00` : `${Math.floor(range.close)}:30`
  const openStr = range.open % 1 === 0 ? `${range.open}:00` : `${Math.floor(range.open)}:30`
  return isOpen
    ? { label: `Open Now · Closes ${closeStr}`, active: true }
    : { label: `Closed · Opens ${openStr}`, active: false }
}

export default function LocationsSection() {
  return (
    <section id="locations" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl"
      >
        <div className="bracket-corners mb-6 inline-block px-4 py-1">
          <span className="font-cormorant text-sm italic tracking-wider text-peach">LOCATIONS</span>
        </div>

        <h2 className="font-fraunces text-2xl font-bold sm:text-3xl text-cream">
          Find us
        </h2>
        <p className="mt-1 text-sm text-sage">
          Two locations in Belagavi. One of them is probably closer than you think.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {locations.map((loc) => {
            const status = getStatus(loc.hours)
            return (
              <div
                key={loc.id}
                className="group rounded-2xl border border-white/10 p-5 backdrop-blur-lg transition-colors sm:p-6 bg-white/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-fraunces text-lg font-semibold text-cream">
                      {loc.name}
                    </h3>
                    <p className="mt-1 text-sm text-sage">{loc.address}</p>
                    <p className="mt-0.5 text-xs text-sage">{loc.landmark}</p>
                  </div>
                  {loc.isNearest && (
                    <span className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-peach/15 text-peach">
                      Nearest to you
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${status.active ? 'bg-green-500' : 'bg-sage'}`} />
                  <span className={`text-xs font-medium ${status.active ? 'text-green-400' : 'text-sage'}`}>
                    {status.label}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`tel:${loc.phone}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium transition-colors text-sage hover:bg-white/5"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <a
                    href={loc.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium transition-colors text-sage hover:bg-white/5"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Directions
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
