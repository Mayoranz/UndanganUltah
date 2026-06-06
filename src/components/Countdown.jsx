import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-06-13T18:20:00+07:00').getTime()

function calculateTimeLeft() {
  const now = Date.now()
  const diff = TARGET_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="glass glow countdown-unit"
      style={{ padding: '14px 8px', minWidth: 68, borderRadius: 16 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.span
        className="countdown-number"
        key={value}
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="countdown-label">{label}</span>
    </motion.div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      <CountdownUnit value={timeLeft.days} label="Days" delay={0} />
      <motion.span
        className="font-heading text-xl"
        style={{ color: 'var(--maroon)', opacity: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.3 }}
      >
        :
      </motion.span>
      <CountdownUnit value={timeLeft.hours} label="Hours" delay={0.1} />
      <motion.span
        className="font-heading text-xl"
        style={{ color: 'var(--maroon)', opacity: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.4 }}
      >
        :
      </motion.span>
      <CountdownUnit value={timeLeft.minutes} label="Minutes" delay={0.2} />
      <motion.span
        className="font-heading text-xl"
        style={{ color: 'var(--maroon)', opacity: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5 }}
      >
        :
      </motion.span>
      <CountdownUnit value={timeLeft.seconds} label="Seconds" delay={0.3} />
    </div>
  )
}
