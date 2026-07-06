import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color theme"
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

export default ThemeToggle
