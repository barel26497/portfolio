import { useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const base = import.meta.env.BASE_URL;

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="hero__media">
          <motion.div
            className="hero__frame"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {!imgError ? (
              <img
                src={`${base}Images/0Z8A7938.png`}
                alt="Barel Hajbi"
                className="hero__photo"
                onError={() => setImgError(true)}
                fetchPriority="high"
                loading="eager"
              />
            ) : (
              <div className="hero__fallback">BH</div>
            )}
          </motion.div>
        </div>
        <div className="hero__body">
          <motion.p
            className="hero__kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Barel Hajbi
          </motion.h1>
          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Junior Full Stack Developer
          </motion.p>
          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            Computer Science graduate with a passion for building secure, scalable applications.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/barelhajbi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--main"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/barel26497"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--outline"
            >
              GitHub
            </a>
            <a
              href={`${base}resources/BarelHajbiResume2025_V9.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--outline"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <motion.span
          className="hero__scroll-icon"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </div>
    </section>
  )
}
