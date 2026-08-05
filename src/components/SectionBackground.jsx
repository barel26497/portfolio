import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './SectionBackground.css'

const sectionIds = ['about', 'experience', 'education', 'projects', 'skills', 'contact']

export default function SectionBackground() {
  const [activeSection, setActiveSection] = useState('hero')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    let animationFrameId = null

    const updateActiveSection = () => {
      if (animationFrameId !== null) {
        return
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null

        const viewportHeight = window.innerHeight
        const detectionPoint = viewportHeight * 0.48
        const aboutSection = document.getElementById('about')

        if (
          !aboutSection ||
          aboutSection.getBoundingClientRect().top >
            viewportHeight * 0.72
        ) {
          setActiveSection((currentSection) =>
            currentSection === 'hero' ? currentSection : 'hero'
          )

          return
        }

        let closestSection = 'about'
        let closestDistance = Number.POSITIVE_INFINITY

        sectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId)

          if (!section) {
            return
          }

          const rect = section.getBoundingClientRect()

          const distanceToSection =
            detectionPoint < rect.top
              ? rect.top - detectionPoint
              : detectionPoint > rect.bottom
                ? detectionPoint - rect.bottom
                : 0

          if (distanceToSection < closestDistance) {
            closestDistance = distanceToSection
            closestSection = sectionId
          }
        })

        setActiveSection((currentSection) =>
          currentSection === closestSection
            ? currentSection
            : closestSection
        )
      })
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    window.addEventListener('resize', updateActiveSection)

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }

      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const getSceneClassName = (sectionName) => {
    const activeClassName =
      activeSection === sectionName
        ? ' section-background__scene--active'
        : ''

    return `section-background__scene section-background__scene--${sectionName}${activeClassName}`
  }

  return (
    <div className="section-background" aria-hidden="true">
      <div className={getSceneClassName('hero')}>
        <motion.div
          className="section-background__orb section-background__orb--hero-primary"
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
          className="section-background__orb section-background__orb--hero-secondary"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -18, 10, 0],
                  y: [0, 15, -12, 0],
                  scale: [1, 0.98, 1.04, 1],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={getSceneClassName('about')}>
        <div className="section-background__about-spotlight" />
        <div className="section-background__about-dots" />

        <motion.div
          className="section-background__orb section-background__orb--about"
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

      <div className={getSceneClassName('experience')}>
        <div className="section-background__experience-grid" />

        <div className="section-background__experience-line section-background__experience-line--one" />

        <div className="section-background__experience-line section-background__experience-line--two" />

        <motion.div
          className="section-background__orb section-background__orb--experience"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 28, 0],
                  y: [-15, 18, -15],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={getSceneClassName('education')}>
        <div className="section-background__education-grid" />
        <div className="section-background__education-ring section-background__education-ring--one" />
        <div className="section-background__education-ring section-background__education-ring--two" />

        <motion.div
          className="section-background__orb section-background__orb--education-primary"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -20, 12, 0],
                  y: [0, 16, -10, 0],
                  scale: [1, 1.05, 0.98, 1],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="section-background__orb section-background__orb--education-secondary"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 18, -8, 0],
                  y: [0, -14, 10, 0],
                  scale: [1, 0.97, 1.03, 1],
                }
          }
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={getSceneClassName('projects')}>
        <div className="section-background__projects-grid" />
        <div className="section-background__projects-scan" />

        <motion.div
          className="section-background__orb section-background__orb--projects"
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

        <motion.div
          className="section-background__orb section-background__orb--projects-secondary"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -22, 0],
                  y: [0, 20, 0],
                  scale: [1, 0.96, 1],
                }
          }
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={getSceneClassName('skills')}>
        <div className="section-background__skills-grid" />

        <div className="section-background__circuit section-background__circuit--one" />

        <div className="section-background__circuit section-background__circuit--two" />

        <div className="section-background__circuit section-background__circuit--three" />

        <motion.div
          className="section-background__orb section-background__orb--skills-primary"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 30, 0],
                  y: [0, -22, 0],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="section-background__orb section-background__orb--skills-secondary"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -22, 0],
                  y: [0, 18, 0],
                  scale: [1, 0.97, 1],
                }
          }
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className={getSceneClassName('contact')}>
        <motion.div
          className="section-background__aurora section-background__aurora--one"
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
          className="section-background__aurora section-background__aurora--two"
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
