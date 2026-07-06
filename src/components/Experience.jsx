import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="section section--fullscreen">
      <div className="container">
        <SectionTitle eyebrow="Journey" title="Experience" />

        <div className="experience__timeline">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.company}`}
              className="experience-item"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <h3 className="experience-item__title">{item.title}</h3>
              <div className="experience-item__company">{item.company}</div>
              <div className="experience-item__period">{item.period}</div>
              <p className="experience-item__description">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
