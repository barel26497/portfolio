import { motion } from 'framer-motion'
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
      </nav>
    </motion.header>
  )
}
