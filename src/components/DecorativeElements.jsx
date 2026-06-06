import { motion } from 'framer-motion'
import { useMemo } from 'react'

// SVG Cloud component
function Cloud({ style, delay = 0, duration = 30 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        ...style,
      }}
      initial={{ x: '-100%' }}
      animate={{ x: 'calc(100vw + 100%)' }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    >
      <svg viewBox="0 0 200 80" width={style.width || 150} fill="white" opacity={style.opacity || 0.4}>
        <ellipse cx="60" cy="50" rx="50" ry="25" />
        <ellipse cx="100" cy="40" rx="40" ry="30" />
        <ellipse cx="140" cy="50" rx="45" ry="22" />
        <ellipse cx="90" cy="55" rx="55" ry="20" />
      </svg>
    </motion.div>
  )
}

// Sparkle component
function Sparkle({ style, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: style.size || 4,
        height: style.size || 4,
        borderRadius: '50%',
        background: style.color || 'rgba(255,255,255,0.8)',
        pointerEvents: 'none',
        ...style,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.6, 1.4, 0.6],
      }}
      transition={{
        duration: 2 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}

// Floating particle
function Particle({ style, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        borderRadius: '50%',
        pointerEvents: 'none',
        ...style,
      }}
      animate={{
        y: [0, -60, -120],
        x: [0, style.drift || 15, style.drift || 10],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: style.speed || 8,
        repeat: Infinity,
        ease: 'easeOut',
        delay,
      }}
    />
  )
}

// Small flower SVG
function Flower({ style }) {
  return (
    <motion.div
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 30 30" width={style.size || 20} height={style.size || 20}>
        <circle cx="15" cy="15" r="4" fill="rgba(128,0,32,0.4)" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx="15"
            cy="6"
            rx="4"
            ry="6"
            fill="rgba(135,206,235,0.5)"
            transform={`rotate(${angle}, 15, 15)`}
          />
        ))}
      </svg>
    </motion.div>
  )
}

// Mountain silhouette
export function MountainSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
      <svg
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: '100px', display: 'block' }}
      >
        <defs>
          <linearGradient id="mountain1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(135,206,235,0.15)" />
            <stop offset="100%" stopColor="rgba(135,206,235,0.05)" />
          </linearGradient>
          <linearGradient id="mountain2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(176,212,232,0.2)" />
            <stop offset="100%" stopColor="rgba(176,212,232,0.08)" />
          </linearGradient>
        </defs>
        {/* Back mountains */}
        <path d="M0,120 L0,80 L50,40 L80,55 L120,25 L160,50 L200,30 L240,55 L280,35 L320,50 L360,20 L400,60 L400,120Z" fill="url(#mountain2)" />
        {/* Front mountains */}
        <path d="M0,120 L0,90 L30,65 L70,80 L100,50 L140,75 L180,45 L220,70 L260,55 L300,70 L340,45 L380,75 L400,65 L400,120Z" fill="url(#mountain1)" />
      </svg>
    </div>
  )
}

export default function DecorativeElements({ variant = 'full' }) {
  const sparkles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${5 + (i * 8) % 85}%`,
      left: `${3 + (i * 11) % 90}%`,
      size: 3 + (i % 4) * 2,
      color: i % 3 === 0 
        ? 'rgba(128,0,32,0.25)' 
        : i % 3 === 1 
          ? 'rgba(135,206,235,0.5)' 
          : 'rgba(255,255,255,0.7)',
      delay: i * 0.4,
    })),
  [])

  const particles = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      bottom: `${5 + (i * 15) % 20}%`,
      left: `${10 + (i * 17) % 80}%`,
      width: 6 + (i % 3) * 4,
      height: 6 + (i % 3) * 4,
      background: i % 2 === 0 
        ? 'rgba(135,206,235,0.25)' 
        : 'rgba(128,0,32,0.12)',
      drift: (i % 2 === 0 ? 1 : -1) * (10 + i * 5),
      speed: 6 + i * 2,
      delay: i * 1.5,
    })),
  [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Clouds */}
      {variant === 'full' && (
        <>
          <Cloud style={{ top: '5%', width: 120, opacity: 0.25 }} delay={0} duration={35} />
          <Cloud style={{ top: '12%', width: 180, opacity: 0.18 }} delay={8} duration={45} />
          <Cloud style={{ top: '20%', width: 100, opacity: 0.2 }} delay={15} duration={30} />
        </>
      )}

      {/* Sparkles */}
      {sparkles.map((s) => (
        <Sparkle key={s.id} style={s} delay={s.delay} />
      ))}

      {/* Particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p} delay={p.delay} />
      ))}

      {/* Flowers */}
      <Flower style={{ top: '8%', right: '5%', size: 18, opacity: 0.4 }} />
      <Flower style={{ bottom: '15%', left: '3%', size: 14, opacity: 0.3 }} />
      <Flower style={{ top: '40%', right: '8%', size: 12, opacity: 0.25 }} />
      <Flower style={{ bottom: '35%', left: '8%', size: 16, opacity: 0.35 }} />
    </div>
  )
}
