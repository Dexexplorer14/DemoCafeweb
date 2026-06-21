import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="fixed bottom-28 left-1/2 z-[60] -translate-x-1/2 lg:bottom-6"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-white/10 px-5 py-2.5 text-sm shadow-xl shadow-black/30 backdrop-blur-xl bg-ink/95 text-cream">
            <svg className="h-4 w-4 shrink-0 text-peach" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
