import { useState } from 'react'
import { motion } from 'framer-motion'
import DecorativeElements from '../components/DecorativeElements'

export default function WelcomeScreen({ onSubmit }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Please enter your name first')
      return
    }
    onSubmit(trimmed)
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

      {/* Elegant Frame */}
      <div className="absolute inset-6 border border-white/40 rounded-3xl pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-8 border border-white/20 rounded-2xl pointer-events-none" style={{ zIndex: 1 }} />

      <div className="relative flex flex-col items-center justify-center w-full max-w-sm" style={{ zIndex: 10 }}>
        
        {/* Subtle top decoration */}
        <motion.div 
          className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--maroon-light)] to-transparent opacity-40 mb-8"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Face Portrait */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full border border-[var(--maroon-light)] opacity-20 scale-110" />
          <img
            src="/MukaAcha.png"
            alt="Qeysha"
            className="w-28 h-28 object-cover rounded-full"
            style={{
              border: '4px solid #fff',
              boxShadow: '0 15px 35px rgba(107, 45, 56, 0.1)',
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-muted)' }}>
            The Celebration of
          </p>
          <h1 className="font-heading italic text-3xl leading-relaxed px-4" style={{ color: 'var(--maroon)' }}>
            Sweet Seventeen
          </h1>
          <p className="font-body text-sm mt-3" style={{ color: 'var(--text-dark)' }}>
            Qeysha Habibbah Aulya Putri
          </p>
        </motion.div>

        <motion.div className="fine-line-horizontal" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 1 }} />

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-5 px-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-wider uppercase text-center" style={{ color: 'var(--text-muted)' }}>
            Dear,
          </p>
          
          <div className="w-full relative">
            <input
              type="text"
              className="input-elegant"
              placeholder="Guest Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError('')
              }}
              id="guest-name-input"
              maxLength={50}
            />
            {error && (
              <p className="absolute -bottom-6 left-0 right-0 text-center text-xs font-body" style={{ color: 'var(--maroon)' }}>
                {error}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            className="btn-primary w-full mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="open-invitation-btn"
          >
            Open Invitation
          </motion.button>
        </motion.form>

        <motion.div 
          className="w-px h-16 bg-gradient-to-t from-transparent via-[var(--maroon-light)] to-transparent opacity-40 mt-12"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
    </motion.div>
  )
}
