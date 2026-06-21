import { motion } from 'framer-motion'

function CornerBrackets({ className }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 8 H36 M8 8 V36" stroke="#FCC48B" strokeWidth="2" strokeLinecap="round" />
        <path d="M92 8 H64 M92 8 V36" stroke="#FCC48B" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 92 H36 M8 92 V64" stroke="#FCC48B" strokeWidth="2" strokeLinecap="round" />
        <path d="M92 92 H64 M92 92 V64" stroke="#FCC48B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8 bg-teal-800">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl bg-peach/10" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="bracket-corners mb-6 inline-block px-4 py-1">
          <span className="font-cormorant text-sm italic tracking-wider text-peach">OUR STORY</span>
        </div>

        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="shrink-0">
            <div className="relative mx-auto h-28 w-28 overflow-hidden md:h-36 md:w-36">
              <CornerBrackets className="z-10" />
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder of Wild Sugar Patisserie"
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold sm:text-3xl text-cream">
              Baking Belagavi&rsquo;s
              <span className="text-peach"> sweetest story</span>
            </h2>
            <p className="text-sm leading-relaxed sm:text-base text-sage/80">
              Wild Sugar started in a tiny Tilakwadi kitchen with a second-hand oven and a stubborn belief that
              Tier-2 cities deserve world-class desserts. No pre-mixes, no shortcuts — just European technique
              meets Indian warmth. Every cake, every burger, every cup of coffee is made from scratch by a team
              that genuinely loves feeding people.
            </p>
            <p className="text-sm font-medium text-peach">
              — Sameer &amp; the Wild Sugar crew
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
