import { FileText, Mail, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageProvider'

import { profile } from '../data/profile'
import { GraduationCap } from 'lucide-react'

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container">

          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 38, scale: 0.96, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >


          <motion.div
            className="hero__avatar"
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 15 }}
          >
            <img src={profile.avatar} alt={t.hero.name} className="avatar-image" />
            <span className="avatar-ring" />
          </motion.div>

          <motion.div
            className="hero__tag"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            <Sparkles size={16} />
            {t.hero.tag}
          </motion.div>

          <h1 className="hero__title">{t.hero.name}</h1>
          <p className="hero__subtitle">{t.hero.title}</p>
          <p className="hero__description">{t.hero.description}</p>

          <div className="hero__actions">
            <a href={profile.cv} className="btn" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              {t.hero.viewCv}

            </a>

            <a href={profile.scholar} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
              <GraduationCap size={16} />
              Scholar
            </a>
            
            <a href={`mailto:${profile.email}`} className="btn btn--secondary">
              <Mail size={16} />
              {t.hero.emailMe}
            </a>
          </div>

          <div className="stats">
            {t.hero.stats.map((stat) => (
              <motion.div
                className="stat"
                key={stat.label}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <span className="stat__number">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
