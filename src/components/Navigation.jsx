const topNavLinks = [
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'story', label: 'Our Story', href: '#story' },
  { id: 'locations', label: 'Locations', href: '#locations' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
]

export default function Navigation() {
  return (
    <>
      {/* Desktop top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden border-b border-white/5 backdrop-blur-2xl lg:block bg-ink/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-fraunces text-xl font-bold text-cream">
            Wild<span className="text-peach">Sugar</span>
          </a>
          <div className="flex items-center gap-1">
            {topNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="touch-manipulation rounded-full px-4 py-1.5 text-sm font-medium transition-colors text-sage hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 h-5 w-px bg-white/10" />
            <a
              href="#menu"
              className="touch-manipulation ml-2 rounded-full px-5 py-1.5 text-sm font-semibold transition-colors bg-peach text-ink-soft hover:bg-peach-dark"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile floating pill dock — Home + Menu only */}
      <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 lg:hidden">
        <div className="flex items-center gap-1 rounded-full border border-white/10 backdrop-blur-xl bg-white/10 px-5 py-2 shadow-2xl shadow-black/40">
          {[
            { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            { id: 'menu', label: 'Menu', icon: 'M4 6h16M4 12h16M4 18h16' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
                else if (item.id === 'menu') document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="touch-manipulation flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-sage hover:text-cream active:scale-95 transition-all"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-white/10" />
          <a
            href="https://www.zomato.com/belgaum/wild-sugar-patisserie-cafe-1-belgaum-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
            style={{ backgroundColor: '#E23744', color: 'white' }}
          >
            Zomato
          </a>
          <a
            href="https://www.swiggy.com/city/belgaum/wild-sugar-ayodhya-nagar-rest102475"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
            style={{ backgroundColor: '#FC8019', color: 'white' }}
          >
            Swiggy
          </a>
        </div>
      </nav>
    </>
  )
}
