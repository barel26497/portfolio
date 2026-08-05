import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Secure File-Sharing System',
    shortTitle: 'Secure File Sharing',
    desc: 'A secure local-network file synchronization system with SSL-encrypted communication, real-time file monitoring, and a desktop interface.',
    tech: ['Python', 'Tkinter', 'SSL/TCP', 'Watchdog', 'Multithreading'],
    highlights: ['Encrypted synchronization', 'Real-time file monitoring'],
    image: `${import.meta.env.BASE_URL}Images/secure-file-sharing.jpg`,
    link: 'https://github.com/barel26497/DropBoxProject',
    type: 'University Project',
  },
  {
    title: 'Order Processing Application',
    desc: 'A distributed full-stack application that creates orders, publishes them through RabbitMQ, and processes them asynchronously with a dedicated worker.',
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'RabbitMQ',
      'MongoDB',
      'Docker',
    ],
    highlights: ['Asynchronous processing', 'Dockerized architecture'],
    image: `${import.meta.env.BASE_URL}Images/order-processing.jpg`,
    link: 'https://github.com/barel26497/Order-Processing-Application',
    type: 'Full-Stack Project',
  },
  {
    title: 'MeetingMind',
    desc: 'An AI-powered meeting transcript analyzer that extracts structured action items, decisions, and open questions using a locally hosted language model.',
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'React',
      'Ollama',
      'Docker',
    ],
    highlights: ['Local and private AI', 'Schema-validated output'],
    image: `${import.meta.env.BASE_URL}Images/meeting-mind.jpg`,
    link: 'https://github.com/barel26497/MeetingMind',
    type: 'AI Project',
    featured: true,
  },
  {
    title: 'ExpenseFlow',
    desc: 'A role-based expense management platform with automated approval workflows, secure token authentication, and dedicated dashboards for every user role.',
    tech: [
      'n8n',
      'PostgreSQL',
      'Docker',
      'RBAC',
      'REST Webhooks',
      'Workflow Automation',
    ],
    highlights: ['Three user roles', 'Automated approval workflows'],
    image: `${import.meta.env.BASE_URL}Images/expense-flow.jpg`,
    link: 'https://github.com/barel26497/ExpenseFlow',
    type: 'Automation Project',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section__container projects__container">
        <motion.div
          className="projects__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects__eyebrow">Selected work</span>
          <h2 className="section__title">Projects</h2>

          <p className="projects__intro">
            A selection of full-stack, backend, automation, and AI projects
            focused on practical system design.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card__glow" />

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__image-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <div className="project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-card__image"
                    loading="lazy"
                  />

                  <div className="project-card__image-overlay" />

                  <span className="project-card__type">
                    {project.type}
                  </span>

                  {project.featured && (
                    <span className="project-card__featured">
                      Featured
                    </span>
                  )}

                  <span className="project-card__image-action">
                    View project
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>

              <div className="project-card__content">
                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__desc">
                  {project.desc}
                </p>

                <div className="project-card__highlights">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="project-card__highlight"
                    >
                      <span
                        className="project-card__check"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="project-card__tech">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="project-card__tag"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card__footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <GitHubIcon />
                    GitHub
                    <span
                      className="project-card__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg
      className="project-card__github-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  )
}
