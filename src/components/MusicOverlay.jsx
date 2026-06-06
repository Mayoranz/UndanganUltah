import { motion } from 'framer-motion'
import { IoMusicalNotes } from 'react-icons/io5'

export default function MusicOverlay({ onEnter }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center sky-bg"
      style={{ zIndex: 200 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Decorative sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + (i % 3) * 3,
            height: 4 + (i % 3) * 3,
            background: i % 2 === 0 ? 'rgba(135,206,235,0.6)' : 'rgba(128,0,32,0.3)',
            top: `${15 + (i * 11) % 70}%`,
            left: `${10 + (i * 13) % 80}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Logo / Face */}
      <motion.img
        src="/MukaAcha.png"
        alt="Qeysha"
        className="w-28 h-28 object-cover rounded-full mb-6"
        style={{
          border: '3px solid rgba(255,255,255,0.6)',
          boxShadow: '0 8px 30px rgba(135,206,235,0.25)',
        }}
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
      />

      <motion.h1
        className="font-heading text-2xl text-center mb-2"
        style={{ color: 'var(--maroon)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Sweet Seventeen
      </motion.h1>

      <motion.p
        className="font-body text-sm text-center mb-8 px-8"
        style={{ color: 'var(--text-muted)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Qeysha Habibbah Aulya Putri
      </motion.p>

      <motion.button
        onClick={onEnter}
        className="btn-primary flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        id="enter-button"
      >
        <IoMusicalNotes />
        Tap to Enter
      </motion.button>

      <motion.p
        className="font-body text-xs mt-4"
        style={{ color: 'var(--text-muted)', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
      >
        🎵 with music
      </motion.p>
    </motion.div>
  )
}
