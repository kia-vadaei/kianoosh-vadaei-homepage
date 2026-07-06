import { FileDown } from 'lucide-react'
import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { profile } from '../data/profile'

function CV() {
  return (
    <section id="cv" className="section">
      <div className="container">
        <motion.div
          className="cv-card glass-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <SectionTitle
            eyebrow="Resume"
            title="Curriculum Vitae"
            description="Download my complete CV to learn more about my academic background, research experience, and achievements."
          />

          <a href={profile.cv} className="btn" target="_blank" rel="noopener noreferrer">
            <FileDown size={16} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CV
