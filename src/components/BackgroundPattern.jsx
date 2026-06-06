import { useMemo } from 'react'

const PATTERN_COUNT = 20

export default function BackgroundPattern() {
  const items = useMemo(() => {
    return Array.from({ length: PATTERN_COUNT }, (_, i) => ({
      id: i,
      top: `${(i * 17.3) % 100}%`,
      left: `${(i * 23.7 + 5) % 100}%`,
      rotation: ((i * 37 + 15) % 30) - 15,
      size: 50 + (i % 4) * 15,
      opacity: 0.04 + (i % 3) * 0.015,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {items.map((item) => (
        <img
          key={item.id}
          src="/MukaAcha.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
            objectFit: 'contain',
            transform: `rotate(${item.rotation}deg)`,
            opacity: item.opacity,
            userSelect: 'none',
          }}
        />
      ))}
    </div>
  )
}
