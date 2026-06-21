import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader({ onLoaded }) {
  useEffect(() => {
    const timer = setTimeout(() => onLoaded?.(), 1500)
    return () => clearTimeout(timer)
  }, [onLoaded])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink"
      >
        <div className="relative flex flex-col items-center">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="loader-bracket"
              d="M8 8 H52 M8 8 V36"
              stroke="#FCC48B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              className="loader-bracket"
              d="M132 8 H88 M132 8 V36"
              stroke="#FCC48B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <text
              className="loader-monogram"
              x="70" y="60"
              textAnchor="middle"
              fill="#FCC48B"
              fontFamily="Fraunces, serif"
              fontSize="48"
              fontWeight="600"
              letterSpacing="2"
            >
              WS
            </text>
          </svg>
          <p
            className="loader-script mt-2 text-lg tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#F5EDE2',
            }}
          >
            patisserie &amp; cafe
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
