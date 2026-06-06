import { motion } from 'framer-motion'
import { IoCalendarOutline, IoTimeOutline, IoLocationOutline, IoShirtOutline, IoNavigateOutline } from 'react-icons/io5'
import Countdown from '../components/Countdown'
import DecorativeElements, { MountainSilhouette } from '../components/DecorativeElements'

const GOOGLE_MAPS_LINK = 'https://share.google/rWUVaZHeZwTr1gAC5'

// Secret Garden Cianjur embed
const MAP_EMBED_URL = 'https://maps.google.com/maps?q=Secret+Garden+Cianjur&t=&z=16&ie=UTF8&iwloc=&output=embed'

function SectionCard({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`glass-strong p-6 ${className}`}
      style={{ borderColor: 'rgba(107, 45, 56, 0.2)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

function DetailRow({ icon: Icon, label, value, sub = null }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--maroon-light)] flex items-center justify-center text-[var(--maroon)] opacity-80 mb-1">
        <Icon size={20} />
      </div>
      <div>
        <p className="font-body text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
          {label}
        </p>
        <p className="font-heading italic text-lg mt-1" style={{ color: 'var(--maroon)' }}>
          {value}
        </p>
        {sub && (
          <p className="font-body text-xs mt-1" style={{ color: 'var(--text-muted)', fontWeight: 300 }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}

export default function EventScreen({ guestName }) {
  return (
    <motion.div
      className="sky-bg min-h-dvh w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <DecorativeElements variant="full" />

      {/* Scrollable content */}
      <div className="relative w-full flex flex-col items-center pb-40" style={{ zIndex: 10 }}>

        {/* Header */}
        <div className="w-full pt-16 pb-10 text-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full border border-[var(--maroon-light)] opacity-30 scale-[1.15]" />
              <img
                src="/MukaAcha.png"
                alt="Qeysha"
                className="w-28 h-28 object-cover rounded-full relative z-10"
                style={{
                  border: '4px solid #fff',
                  boxShadow: '0 10px 30px rgba(107, 45, 56, 0.15)',
                }}
              />
            </div>
          </motion.div>

          <motion.p
            className="font-body text-[10px] uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join Us to Celebrate
          </motion.p>

          <motion.h1
            className="font-heading italic text-3xl mb-3 leading-snug"
            style={{ color: 'var(--maroon)' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Qeysha Habibbah Aulya Putri
          </motion.h1>

          <motion.div
            className="fine-line-horizontal"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          />
        </div>

        {/* Content cards with elegant spacing */}
        <div className="w-full max-w-md px-6 space-y-8">

          {/* Date & Time Card */}
          <SectionCard delay={0.1}>
            <div className="flex justify-around items-start">
              <DetailRow
                icon={IoCalendarOutline}
                label="Date"
                value="13 June 2026"
                sub="Saturday"
              />
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-[var(--maroon-light)] to-transparent opacity-20" />
              <DetailRow
                icon={IoTimeOutline}
                label="Time"
                value="18:30 WIB"
                sub="Onwards"
              />
            </div>
          </SectionCard>

          {/* Dress Code Card */}
          <SectionCard delay={0.2}>
            <DetailRow
              icon={IoShirtOutline}
              label="Dress Code"
              value="Cream & Black"
              sub="Cahya jangan pake kaos putih celana pendek pliss"
            />
          </SectionCard>
          <br />

          {/* Countdown Section */}
          <SectionCard delay={0.3} className="text-center pb-8">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--text-muted)' }}>
              Counting Down The Days
            </p>
            <Countdown />
          </SectionCard>

          {/* Location Card */}
          <SectionCard delay={0.4}>
            <DetailRow
              icon={IoLocationOutline}
              label="Location"
              value="Secret Garden"
              sub="Cianjur, West Java"
            />

            {/* Elegant Map Embed */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/60 shadow-lg">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="200"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Secret Garden Cianjur"
              />
            </div>

            <motion.a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 flex items-center justify-center gap-2 w-full text-sm"
              style={{ display: 'flex', textDecoration: 'none' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IoNavigateOutline size={18} />
              Open Google Maps
            </motion.a>
          </SectionCard>
          <br />

          {/* Closing message */}
          <motion.div
            className="text-center pt-8 pb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              Your presence means the world to us, <span className="font-medium text-[var(--maroon)]">{guestName}</span>.
              <br />See you on this special day!
            </p>
            <div className="mt-6 text-[var(--maroon)] opacity-60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mountain at bottom */}
      <MountainSilhouette />
    </motion.div>
  )
}
