import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section__container contact__container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="contact__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm open to new opportunities. Reach out via email or connect on LinkedIn.
        </motion.p>
        <motion.div
          className="contact__links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="mailto:barel26497@gmail.com" className="contact__link">
            barel26497@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/barelhajbi/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/barel26497"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            GitHub
          </a>
        </motion.div>
        <motion.footer
          className="contact__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Barel Hajbi
        </motion.footer>
      </div>
    </section>
  )
}
