import { motion } from "framer-motion";
import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section__container education__container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.article
          className="education__card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="education__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="education__icon-svg">
              <path
                fill="currentColor"
                d="M12 3 1.5 8.5 12 14l8-4.19V16h2V8.5L12 3Zm0 8.74L5.8 8.5 12 5.26l6.2 3.24L12 11.74ZM6 12.47V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.53l-6 3.14-6-3.14Z"
              />
            </svg>
          </div>

          <div className="education__content">
            <div className="education__header">
              <div>
                <h3 className="education__degree">B.Sc. in Computer Science</h3>

                <p className="education__institution">
                  The Open University of Israel
                </p>
              </div>

              <span className="education__period">2020 – 2024</span>
            </div>

            <p className="education__description">
              Bachelor&apos;s degree in Computer Science with a strong
              foundation in software engineering, algorithms, data structures,
              databases, computer networks, and modern software development.
            </p>

            <div
              className="education__subjects"
              aria-label="Main areas of study"
            >
              <span className="education__subject">Software Engineering</span>

              <span className="education__subject">Algorithms</span>

              <span className="education__subject">Data Structures</span>

              <span className="education__subject">Databases</span>

              <span className="education__subject">Computer Networks</span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
