import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <>
      {/* Outer ring - very subtle */}
      <motion.div
        className="pointer-events-none fixed w-6 h-6 border border-primary/30 rounded-full z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Inner dot - tiny */}
      <motion.div
        className="pointer-events-none fixed w-1 h-1 bg-primary/60 rounded-full z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 2, y: mousePosition.y - 2 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
      />
    </>
  )
}
