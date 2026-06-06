import { motion } from 'framer-motion'
import DecorativeElements from '../components/DecorativeElements'

export default function LetterScreen({ guestName, onViewDetails }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="screen sky-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      transition={{ duration: 1 }}
    >
      <DecorativeElements variant="minimal" />

      <div className="relative w-full max-w-sm px-4" style={{ zIndex: 10 }}>
        
        {/* Elegant Letter Paper */}
        <motion.div
          className="letter-paper"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Subtle floral/decorative top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--maroon-light)] to-transparent opacity-30" />
          
          <div className="flex justify-center mb-6 opacity-40">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M20 0L23 6L40 6L26 8L30 12L20 9L10 12L14 8L0 6L17 6L20 0Z" fill="var(--maroon)" />
            </svg>
          </div>

          {/* Letter content */}
          <motion.div
            className="font-body space-y-5 text-center"
            style={{ color: 'var(--text-dark)', lineHeight: 1.8 }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg font-heading italic mb-2"
              style={{ color: 'var(--maroon)' }}
              variants={lineVariants}
            >
              Hai {guestName},
            </motion.p>

            <motion.p className="text-sm font-light" variants={lineVariants}>
              Dengan senang hati aku mengundang {guestName} untuk turut memeriahkan hari bahagia aku.
            </motion.p>

            <motion.p className="text-sm font-light" variants={lineVariants}>
              Aku sangat terhormat kalau kamu mau ikut datang ke ulangtahun aku yang ke tujuh belas,anjay aku sweet seventeen dan bukan bocil lagi
            </motion.p>

            <motion.p className="text-sm font-light" variants={lineVariants}>
              Jangan lupa datang yaaa {guestName}.
            </motion.p>

            <motion.div
              className="pt-6 mt-4"
              variants={lineVariants}
            >
              <div className="w-12 h-px bg-[var(--maroon-light)] opacity-20 mx-auto mb-4" />
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                salam hangat,
              </p>
              <p
                className="font-heading italic text-xl mt-2"
                style={{ color: 'var(--maroon)' }}
              >
                Acha
              </p>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            className="btn-primary"
            onClick={onViewDetails}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="view-details-btn"
          >
            View Event Details
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
