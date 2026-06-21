import { useState } from 'react'
import PageLoader from './components/PageLoader'
import Hero from './components/Hero'
import Categories from './components/Categories'
import OurStory from './components/OurStory'
import LocationsSection from './components/LocationsSection'
import ReviewsSection from './components/ReviewsSection'
import Navigation from './components/Navigation'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { menuItems, bestsellers } from './data/menu'

export default function App() {
  const [ready, setReady] = useState(false)
  const [activeCategory, setActiveCategory] = useState('cakes')

  return (
    <>
      {!ready && <PageLoader onLoaded={() => setReady(true)} />}

      <div className="relative min-h-screen overflow-x-hidden font-inter bg-ink">
        {/* Main content */}
        <div className="relative z-10">
          <div className="lg:pt-14">
            <Hero />
          </div>

          {/* Menu */}
          <main className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                menuItems={menuItems}
                bestsellers={bestsellers}
              />
            </div>
          </main>

          <section id="story"><OurStory /></section>
          <section id="locations"><LocationsSection /></section>
          <section id="reviews"><ReviewsSection /></section>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 px-4 py-10 text-center sm:px-6 bg-ink-soft">
          <p className="font-fraunces text-lg font-bold text-cream">
            Wild<span className="text-peach">Sugar</span>
          </p>
          <p className="mt-1 text-xs text-sage">
            Belagavi&rsquo;s premium patisserie since 2020
          </p>
          <p className="mt-4 text-[10px] text-sage">
            &copy; {new Date().getFullYear()} Wild Sugar. All rights reserved.
          </p>
        </footer>

        {/* Floaters */}
        <FloatingWhatsApp />
        <Navigation />
      </div>
    </>
  )
}
