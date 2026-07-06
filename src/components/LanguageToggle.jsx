import { Languages } from 'lucide-react'
import { motion } from 'framer-motion'

import { useLanguage } from '../i18n/LanguageProvider'

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const nextLanguage = language === 'en' ? 'fa' : 'en'

  return (
    <motion.button
      type="button"
      className="language-toggle"
      aria-label="Toggle language"
      onClick={() => setLanguage(nextLanguage)}
      whileTap={{ scale: 0.9 }}
    >
      <Languages size={18} />
      <span>{language === 'en' ? 'FA' : 'EN'}</span>
    </motion.button>
  )
}

export default LanguageToggle
