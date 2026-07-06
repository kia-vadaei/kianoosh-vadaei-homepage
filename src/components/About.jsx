import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { profile } from '../data/profile'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const reveal = useScrollReveal()

  return (
    <section id="about" className="section section--fullscreen">
      <div className="container">
        <SectionTitle eyebrow="Profile" title="About Me" />

        <div className="about__content">
          <motion.div {...reveal}>
            <p>
              I'm a passionate Computer Engineering student at the University of Isfahan with
              a deep fascination for artificial intelligence, machine learning, and deep
              learning. My journey in AI began with curiosity about how machines can learn and
              make decisions, leading me to explore Natural Language Processing, Computer
              Vision, and AI Explainability.
            </p>

            <p>
              Beyond academics, I enjoy reading philosophy, playing piano and dulcimer, and
              diving into books and video games. These diverse interests help me approach
              problems from unique perspectives and maintain a balanced view of technology's
              role in society.
            </p>

            <div className="research-interests">
              {profile.interests.map((interest) => (
                <motion.span
                  key={interest}
                  className="interest-chip"
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 14 }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div className="education" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <h3>Education</h3>

            {profile.education.map((item) => (
              <div className="education__item" key={item.degree}>
                <div className="education__degree">{item.degree}</div>
                <div className="education__institution">{item.institution}</div>
                <div className="education__details">
                  {item.details.split('\n').map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
