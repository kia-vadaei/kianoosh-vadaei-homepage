import { motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}

export default SectionTitle
