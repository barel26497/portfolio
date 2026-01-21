import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Secure File-Sharing System',
    desc: 'Local-network shared folder system with SSL-encrypted sync, real-time monitoring via Watchdog, and a Tkinter GUI. Built with Python, multithreading, and TCP communication.',
    tech: ['Python', 'Tkinter', 'SSL', 'Watchdog', 'Multithreading'],
    link: null,
  },
  {
    title: 'Order-Processing-Application',
    desc: 'Full-stack order processing application. Built with JavaScript and modern web technologies.',
    tech: ['Python','React', 'JavaScript', 'RabbitMQ', 'REST API', 'MongoDB'],
    link: 'https://github.com/barel26497/Order-Processing-Application',
  },
  {
    title: 'MeetingMind - In progress',
    desc: 'Backend-first AI system for extracting action items, decisions, and open questions from meeting transcripts using a local LLM. Designed to be ethical, explainable, and production-oriented. Currently in active development.',
    tech: ['Python','FastAPI','PostgreSQL','SQLAlchemy','Alembic','Docker','Ollama (Local LLM)','REST API'],
    link: null,
  }
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section__container projects__container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card__glow" />
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View on GitHub →
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
