import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DecorativeElements from '../components/DecorativeElements'

export default function EnvelopeScreen({ onOpen, guestName }) {
  const [sealBroken, setSealBroken] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [tapCount, setTapCount] = useState(0)

  const handleSealTap = () => {
    if (sealBroken) return

    setSealBroken(true)
    // Delay envelope open animation
    setTimeout(() => {
      setEnvelopeOpened(true)
      // Transition to letter after animation
      setTimeout(() => {
        onOpen()
      }, 1200)
    }, 400)
  }

  return (
    <motion.div
      className="screen sky-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8 } }}
      transition={{ duration: 1 }}
    >
      <DecorativeElements variant="minimal" />

      <div className="relative flex flex-col items-center justify-center w-full" style={{ zIndex: 10 }}>
        
        {/* Elegant Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="font-heading italic text-lg" style={{ color: 'var(--maroon)' }}>
            An Invitation
          </p>
          <div className="w-12 h-px bg-[var(--maroon-light)] opacity-30 mx-auto my-3" />
          <p className="font-body text-sm tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            For: <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{guestName}</span>
          </p>
        </motion.div>

        {/* Realistic Envelope */}
        <motion.div
          className="relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="envelope-body">
            <div className="envelope-inner" />

            {/* Top flap */}
            <motion.div
              className="envelope-flap"
              animate={envelopeOpened ? { 
                rotateX: 180,
                transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
              } : { rotateX: 0 }}
              style={{ transformOrigin: 'top center', zIndex: sealBroken ? 0 : 3 }}
            />

            {/* Bottom flap to hide the letter when closed */}
            <div className="envelope-bottom" />

            {/* Wax Seal sticker */}
            <AnimatePresence>
              {!sealBroken && (
                <motion.div
                  className="wax-seal"
                  style={{
                    x: "-50%",
                    y: "-50%",
                    zIndex: 10,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: "-50%", y: "-50%"
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.5, ease: 'easeIn' },
                  }}
                  onClick={handleSealTap}
                  whileTap={{ scale: 0.9, x: "-50%", y: "-50%" }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.8 }}
                  id="envelope-seal"
                >
                  <img src="/MukaAcha.png" alt="Buka surat" />
                  
                  {/* Subtle pulsing glow indicating it's clickable */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: '1px solid var(--maroon)' }}
                    animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Letter peeking out when opened */}
            <AnimatePresence>
              {envelopeOpened && (
                <motion.div
                  className="absolute left-4 right-4 bg-white rounded-md border border-[#eee]"
                  style={{
                    bottom: 15,
                    zIndex: 1, // Keep letter behind the front folds (which are z-index 2 and 3)
                    height: 150,
                    boxShadow: '0 -5px 15px rgba(0,0,0,0.05)',
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: -110 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="p-5 text-center flex flex-col items-center">
                    <p className="font-heading italic text-sm text-[var(--maroon)]">Sweet 17</p>
                    <div className="w-8 h-px bg-[#eee] my-2" />
                    <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                      {guestName}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Instruction text */}
        <motion.p
          className="font-body text-xs text-center mt-12 tracking-wider uppercase"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5 }}
        >
          {!sealBroken ? 'Tap the seal to open' : 'Opening invitation...'}
        </motion.p>

      </div>
    </motion.div>
  )
}
