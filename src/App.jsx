import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import WelcomeScreen from './screens/WelcomeScreen'
import EnvelopeScreen from './screens/EnvelopeScreen'
import LetterScreen from './screens/LetterScreen'
import EventScreen from './screens/EventScreen'
import BackgroundPattern from './components/BackgroundPattern'
import MusicPlayer from './components/MusicPlayer'
import MusicOverlay from './components/MusicOverlay'

function App() {
  const [screen, setScreen] = useState(1)
  const [guestName, setGuestName] = useState(() => {
    return localStorage.getItem('guestName') || ''
  })
  const [musicStarted, setMusicStarted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/music.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.4
    }

    // Try autoplay
    const tryAutoplay = async () => {
      try {
        await audioRef.current.play()
        setMusicStarted(true)
        setShowOverlay(false)
      } catch {
        // Browser blocked autoplay, show overlay
        setShowOverlay(true)
      }
    }

    tryAutoplay()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const handleOverlayClick = async () => {
    try {
      await audioRef.current.play()
      setMusicStarted(true)
    } catch {
      // Silent fail
    }
    setShowOverlay(false)
  }

  const handleNameSubmit = (name) => {
    setGuestName(name)
    localStorage.setItem('guestName', name)
    setScreen(2)
  }

  const handleEnvelopeOpen = () => {
    setScreen(3)
  }

  const handleViewDetails = () => {
    setScreen(4)
  }

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      {/* Global Background Pattern */}
      <BackgroundPattern />

      {/* Music Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <MusicOverlay onEnter={handleOverlayClick} />
        )}
      </AnimatePresence>

      {/* Screens */}
      {!showOverlay && (
        <AnimatePresence mode="wait">
          {screen === 1 && (
            <WelcomeScreen key="welcome" onSubmit={handleNameSubmit} />
          )}
          {screen === 2 && (
            <EnvelopeScreen key="envelope" onOpen={handleEnvelopeOpen} guestName={guestName} />
          )}
          {screen === 3 && (
            <LetterScreen key="letter" guestName={guestName} onViewDetails={handleViewDetails} />
          )}
          {screen === 4 && (
            <EventScreen key="event" guestName={guestName} />
          )}
        </AnimatePresence>
      )}

      {/* Floating Music Control */}
      {!showOverlay && (
        <MusicPlayer audioRef={audioRef} musicStarted={musicStarted} setMusicStarted={setMusicStarted} />
      )}
    </div>
  )
}

export default App
