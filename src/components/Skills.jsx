import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { skills } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Skills() {
  const reveal = useScrollReveal()

  return (
    <section id="skills" className="section section--fullscreen">
      <div className="container">
        <SectionTitle eyebrow="Toolkit" title="Skills" />

        <div className="skills__grid">
          {skills.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              className="skill-category glass-card"
              {...reveal}
              transition={{ ...reveal.transition, delay: categoryIndex * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="skill-category__title">{category.title}</h3>

              {category.items.map((skill) => (
                <div className="skill-row" key={skill}>
                  <div className="skill-item">
                    <span className="skill-item__name">{skill}</span>
                    <span className="skill-item__level">{category.title}</span>
                  </div>

                  <div className="progress-bar" aria-hidden="true">
                    <motion.div
                      className="progress-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.9, delay: 0.12 }}
                    />
                  </div>
                </div>
              ))}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
