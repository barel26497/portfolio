import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Final Project – The Open University of Israel',
    location: 'Ramat Gan, Israel',
    period: 'July 2024 - October 2024',
    points: [
      'Developed a local-network shared folder system with secure file synchronization, dynamic GUI, and real-time updates using Python, Tkinter, and SSL.',
      'Python: Backend logic and secure TCP communication. Tkinter: GUI. SSL: Encrypted client-server communication. Watchdog: Real-time file monitoring. Multithreading: Efficient handling of multiple client connections.',
    ],
  },
  {
    role: 'RF Engineer',
    company: 'Beeper',
    location: 'Ramat Gan, Israel',
    period: 'May 2019 - December 2022',
    points: [
      'Troubleshot and maintained complex technical systems in the field. Worked cross-functionally to resolve issues and support system reliability.',
    ],
  },
  {
    role: "C4I's Systems Operators Commander",
    company: 'IDF',
    location: 'Jerusalem, Israel',
    period: 'February 2016 - May 2019',
    points: [
      'Led C4I operations and managed critical military communication systems. Oversaw advanced tech platforms (Elbit DAP, Motorola, WiMAX) supporting field missions.',
    ],
  },
  {
    role: 'Online Marketing Manager',
    company: 'Optinize',
    location: 'Tel Aviv, Israel',
    period: 'January 2015 - February 2016',
    points: [
      'Built and customized marketing content using HTML and CSS. Collaborated with international clients to support tech-driven campaigns.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section__container experience__container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              className="experience__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="experience__dot" />
              <div className="experience__card">
                <div className="experience__header">
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <p className="experience__company">{exp.company}</p>
                <p className="experience__location">{exp.location}</p>
                <ul className="experience__points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
