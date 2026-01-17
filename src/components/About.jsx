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
            Computer Science graduate and aspiring Full Stack Developer with a strong passion for learning and applying new technologies. Experienced in building a secure file-sharing system as a final project. Skilled in both front-end and back-end development, with excellent teamwork, problem-solving, and self-learning abilities.
          </p>
          <p className="about__text">
            I'm seeking a <strong>Junior Developer</strong> position to grow professionally and contribute to meaningful projects. With a background in engineering, leadership, and operations from my previous roles, I bring strong communication skills and a collaborative mindset to every team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
