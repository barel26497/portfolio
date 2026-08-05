import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function MagneticLink({ children, className, strength = 0.16, ...props }) {
  const linkRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 320, damping: 24, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 320, damping: 24, mass: 0.35 })

  const handlePointerMove = (event) => {
    if (reduceMotion || !linkRef.current || event.pointerType === 'touch') {
      return
    }

    const rect = linkRef.current.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)

    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const resetPosition = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={linkRef}
      className={className}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      onPointerCancel={resetPosition}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
