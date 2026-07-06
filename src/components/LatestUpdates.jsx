import { Code2, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

function getIcon(type) {
  if (type === 'github') return <Code2 size={16} />
  return <Globe size={16} />
}

function LatestUpdates() {
  const reveal = useScrollReveal()

  return (
    <section id="research" className="section section--fullscreen">
      <div className="container">
        <SectionTitle eyebrow="Research" title="Latest Updates" />

        <div className="updates__grid">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card glass-card"
              {...reveal}
              whileHover={{ y: -6 }}
            >
              <h3 className="project__title">
                <img src={project.logo} alt={`${project.title} Logo`} className="project__logo" />
                {project.title}
              </h3>

              <p className="project__description">{project.description}</p>

              <div className="project__badges">
                {project.badges.map((badge) => (
                  <span className="badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="project__actions">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="btn btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getIcon(link.type)}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestUpdates
