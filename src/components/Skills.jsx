import { motion } from 'framer-motion'
import './Skills.css'

const frontend = ['React', 'Vite', 'HTML', 'CSS', 'JavaScript']
const backend = ['Node.js', 'Python', 'Java', 'C', 'C++', 'SQL', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Redis', 'Docker', 'Kubernetes', 'REST API Design']

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section__container skills__container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="skills__grid">
          <motion.div
            className="skills__group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="skills__label">Front-End</h3>
            <div className="skills__tags">
              {frontend.map((s, i) => (
                <motion.span
                  key={s}
                  className="skills__tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="skills__group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="skills__label">Back-End & Tools</h3>
            <div className="skills__tags">
              {backend.map((s, i) => (
                <motion.span
                  key={s}
                  className="skills__tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.03, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.p
          className="skills__soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Work ethic, Self-learning, Interpersonal skills, Problem-solving, Code readability, Team collaboration, Adaptability
        </motion.p>
      </div>
    </section>
  )
}
