import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "Software Developer",
    company: "Youleap",
    location: "Kadima Zoran, Israel",
    period: "July 2026 - Current",
    thumbnail: `${import.meta.env.BASE_URL}Images/youleap-logo.jpg`,
    points: [
      "Collaborate with clients to gather requirements and translate business needs into technical solutions.",
      "Develop modern, responsive eCommerce storefronts using React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, and CSS.",
      "Configure and manage commerce data within the Medusa headless commerce platform.",
      "Build custom features and workflows to satisfy client-specific business requirements.",
      "Integrate frontend applications with the Medusa backend through APIs and commerce services.",
      "Deliver tailored eCommerce solutions while collaborating with cross-functional teams throughout the implementation process.",
    ],
  },
  {
    role: "RF Engineer",
    company: "Beeper",
    location: "Ramat Gan, Israel",
    period: "May 2019 - December 2022",
    thumbnail: `${import.meta.env.BASE_URL}Images/beeper-logo.png`,
    points: [
      "Troubleshot and maintained complex technical systems in the field. Worked cross-functionally to resolve issues and support system reliability.",
    ],
  },
  {
    role: "C4I's Systems Operators Commander",
    company: "IDF",
    location: "Jerusalem, Israel",
    period: "February 2016 - May 2019",
    thumbnail: `${import.meta.env.BASE_URL}Images/idf-logo.png`,
    points: [
      "Led C4I operations and managed critical military communication systems. Oversaw advanced tech platforms including Elbit DAP, Motorola, and WiMAX, supporting field missions.",
    ],
  },
  {
    role: "Online Marketing Manager",
    company: "Optinize",
    location: "Tel Aviv, Israel",
    period: "January 2015 - February 2016",
    thumbnail: `${import.meta.env.BASE_URL}Images/optinize-logo.png`,
    points: [
      "Built and customized marketing content using HTML and CSS. Collaborated with international clients to support tech-driven campaigns.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.div
        className="section__container experience__container"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              className="experience__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="experience__dot" />

              <div className="experience__card">
                <div className="experience__thumbnail-wrapper">
                  <img
                    className="experience__thumbnail"
                    src={exp.thumbnail}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                  />
                </div>

                <div className="experience__content">
                  <div className="experience__header">
                    <h3 className="experience__role">{exp.role}</h3>

                    <span className="experience__period">
                      {exp.period}
                    </span>
                  </div>

                  <p className="experience__company">{exp.company}</p>

                  <p className="experience__location">
                    {exp.location}
                  </p>

                  {exp.points && (
                    <ul className="experience__points">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
