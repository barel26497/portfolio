import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section__container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="about__text">
            Computer Science graduate and <strong>Full Stack Developer</strong> with hands-on experience building <strong>scalable backend systems</strong> and modern web applications. Particularly interested in <strong>backend design</strong>, <strong>system reliability</strong>, and <strong>AI-powered applications</strong>. Eager to contribute to impactful engineering teams while growing in <strong>production-grade software systems</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
