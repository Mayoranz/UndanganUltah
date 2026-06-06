import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMusicalNotes, IoMusicalNote, IoPause } from 'react-icons/io5'

export default function MusicPlayer({ audioRef, musicStarted, setMusicStarted }) {
  const [isPlaying, setIsPlaying] = useState(musicStarted)

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      setMusicStarted(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setMusicStarted(true)
      } catch {
        // Silent fail
      }
    }
  }

  return (
    <motion.button
      className={`music-btn ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
      id="music-toggle"
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <IoMusicalNotes />
          </motion.div>
        ) : (
          <motion.div
            key="paused"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <IoMusicalNote style={{ opacity: 0.5 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
