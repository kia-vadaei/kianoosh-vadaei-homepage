import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { publications } from '../data/publications'
import { staggerContainer, revealItem } from '../hooks/useScrollReveal'

function Publications() {
  return (
    <section id="publications" className="section section--fullscreen">
      <div className="container">
        <SectionTitle
          eyebrow="Papers"
          title="Selected Publications"
          description="A curated list of my selected research works."
        />

        <motion.div
          layout
          className="publications__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {publications.map((publication) => (
            <motion.article
              layout
              key={publication.title}
              className="publication-card glass-card"
              variants={revealItem}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <div className="publication__content">
                <h3 className="publication__title">{publication.title}</h3>

                <div className="publication__venue">{publication.venue}</div>
                <div className="publication__note">{publication.note}</div>

                <div className="publication__authors">
                  {publication.authors.split('Kianoosh Vadaei').map((part, index, arr) => (
                    <span key={`${part}-${index}`}>
                      {part}
                      {index < arr.length - 1 && <strong>Kianoosh Vadaei</strong>}
                    </span>
                  ))}
                </div>

                <p className="publication__abstract">{publication.abstract}</p>

                <div className="project__badges">
                  {publication.badges.map((badge) => (
                    <span className="badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="publication__actions">
                  {publication.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={link.featured ? 'btn btn--secondary btn--tiny-featured' : 'btn btn--secondary'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={15} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
