import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Nav.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu if we switch back to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav__inner">
        <a href="#" className="nav__logo">
          BH
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav__toggleBar" />
          <span className="nav__toggleBar" />
          <span className="nav__toggleBar" />

        </button>

        <ul className="nav__links">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="nav__link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                whileHover={{ color: '#00d4aa' }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              id="primary-navigation"
              className="nav__mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav__mobileLink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
