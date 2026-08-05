import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './SectionBackground.css'

const sectionIds = [
  'about',
  'experience',
  'education',
  'projects',
  'skills',
  'contact',
]

const projectCodeLines = [
  'const project = await build()',
  'docker compose up --build',
  'POST /api/orders',
  'queue.publish(order)',
  'SELECT * FROM projects;',
  'model.analyze(transcript)',
  'watchdog.observe(directory)',
  'return scalableArchitecture',
]

export default function SectionBackground() {
  const [activeSection, setActiveSection] = useState('hero')
  const backgroundRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    let frameId = null

    const updateActiveSection = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null

        const viewportFocus = window.innerHeight * 0.48
        const aboutSection = document.getElementById('about')

        if (
          !aboutSection ||
          aboutSection.getBoundingClientRect().top >
            window.innerHeight * 0.72
        ) {
          setActiveSection('hero')
          return
        }

        let nextSection = 'about'
        let smallestDistance = Number.POSITIVE_INFINITY

        sectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId)

          if (!section) {
            return
          }

          const rect = section.getBoundingClientRect()
          const visibleTop = Math.max(rect.top, 0)
          const visibleBottom = Math.min(rect.bottom, window.innerHeight)
          const isVisible = visibleBottom > visibleTop

          if (!isVisible) {
            return
          }

          const sectionCenter = rect.top + rect.height / 2
          const distance = Math.abs(sectionCenter - viewportFocus)

          if (distance < smallestDistance) {
            smallestDistance = distance
            nextSection = sectionId
          }
        })

        setActiveSection(nextSection)
      })
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    window.addEventListener('resize', updateActiveSection)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const background = backgroundRef.current

    if (
      !background ||
      reduceMotion ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return undefined
    }

    let frameId = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const renderParallax = () => {
      currentX += (targetX - currentX) * 0.075
      currentY += (targetY - currentY) * 0.075

      background.style.setProperty(
        '--background-parallax-x',
        `${currentX}px`,
      )

      background.style.setProperty(
        '--background-parallax-y',
        `${currentY}px`,
      )

      frameId = window.requestAnimationFrame(renderParallax)
    }

    const handlePointerMove = (event) => {
      const normalizedX = event.clientX / window.innerWidth - 0.5
      const normalizedY = event.clientY / window.innerHeight - 0.5

      targetX = normalizedX * 16
      targetY = normalizedY * 12
    }

    const resetParallax = () => {
      targetX = 0
      targetY = 0
    }

    frameId = window.requestAnimationFrame(renderParallax)

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })

    document.documentElement.addEventListener(
      'mouseleave',
      resetParallax,
    )

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('pointermove', handlePointerMove)

      document.documentElement.removeEventListener(
        'mouseleave',
        resetParallax,
      )
    }
  }, [reduceMotion])

  const isActive = (section) =>
    `section-background__scene section-background__scene--${section} ${
      activeSection === section
        ? 'section-background__scene--active'
        : ''
    }`

  return (
    <div
      ref={backgroundRef}
      className="section-background"
      aria-hidden="true"
    >
      <div className={isActive('hero')}>
        <motion.div
          className="
            section-background__orb
            section-background__orb--hero-primary
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 24, -12, 0],
                  y: [0, -18, 10, 0],
                  scale: [1, 1.05, 0.98, 1],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            section-background__orb
            section-background__orb--hero-secondary
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -18, 10, 0],
                  y: [0, 15, -12, 0],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={isActive('about')}>
        <div className="section-background__about-spotlight" />
        <div className="section-background__about-dots" />

        <motion.div
          className="
            section-background__orb
            section-background__orb--about
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [-16, 22, -16],
                  y: [12, -20, 12],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={isActive('experience')}>
        <div className="section-background__experience-grid" />

        <div
          className="
            section-background__experience-line
            section-background__experience-line--one
          "
        />

        <div
          className="
            section-background__experience-line
            section-background__experience-line--two
          "
        />

        <motion.div
          className="
            section-background__orb
            section-background__orb--experience
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 28, 0],
                  y: [-15, 18, -15],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={isActive('education')}>
        <div className="section-background__education-glow" />
        <div className="section-background__education-grid" />

        <div
          className="
            section-background__education-ring
            section-background__education-ring--one
          "
        />

        <div
          className="
            section-background__education-ring
            section-background__education-ring--two
          "
        />

        <motion.div
          className="
            section-background__orb
            section-background__orb--education-primary
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -24, 12, 0],
                  y: [0, 18, -10, 0],
                  scale: [1, 1.06, 0.98, 1],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            section-background__orb
            section-background__orb--education-secondary
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 20, -10, 0],
                  y: [0, -16, 12, 0],
                }
          }
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={isActive('projects')}>
        <div className="section-background__projects-grid" />
        <div className="section-background__projects-scan" />

        <motion.div
          className="section-background__code"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [-24, 24],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          {projectCodeLines.map((line, index) => (
            <span
              key={`${line}-${index}`}
              className={`section-background__code-line section-background__code-line--${
                (index % 8) + 1
              }`}
            >
              {line}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="
            section-background__orb
            section-background__orb--projects
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [-20, 26, -20],
                  y: [18, -24, 18],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={isActive('skills')}>
        <div className="section-background__skills-grid" />

        <div
          className="
            section-background__circuit
            section-background__circuit--one
          "
        />

        <div
          className="
            section-background__circuit
            section-background__circuit--two
          "
        />

        <div
          className="
            section-background__circuit
            section-background__circuit--three
          "
        />

        <motion.div
          className="
            section-background__orb
            section-background__orb--skills-primary
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 30, 0],
                  y: [0, -22, 0],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            section-background__orb
            section-background__orb--skills-secondary
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -22, 0],
                  y: [0, 18, 0],
                }
          }
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={isActive('contact')}>
        <motion.div
          className="
            section-background__aurora
            section-background__aurora--one
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ['-7%', '6%', '-7%'],
                  rotate: [-7, -2, -7],
                }
          }
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            section-background__aurora
            section-background__aurora--two
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ['7%', '-5%', '7%'],
                  rotate: [7, 2, 7],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="section-background__contact-focus" />
      </div>

      <div className="section-background__noise" />
      <div className="section-background__vignette" />
    </div>
  )
}
