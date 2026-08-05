import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import './CursorGlow.css'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const glow = glowRef.current

    if (!glow || reduceMotion || window.matchMedia('(pointer: coarse)').matches) {
      return undefined
    }

    let frameId = null
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY

    const render = () => {
      currentX += (targetX - currentX) * 0.14
      currentY += (targetY - currentY) * 0.14

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      frameId = window.requestAnimationFrame(render)
    }

    const handlePointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      glow.dataset.visible = 'true'
    }

    const handlePointerLeave = () => {
      glow.dataset.visible = 'false'
    }

    frameId = window.requestAnimationFrame(render)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [reduceMotion])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}
