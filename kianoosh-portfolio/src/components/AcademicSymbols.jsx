import { useMemo } from 'react'
import { motion } from 'framer-motion'

import { useReducedMotion } from '../hooks/useReducedMotion'

const symbols = [
  '∑',
  'π',
  '∫',
  'Ω',
  'α',
  'β',
  'γ',
  'δ',
  'λ',
  'μ',
  'θ',
  '∇',
  '∂',
  '∞',
  '√',
  '∝',
  '∀',
  '∃',
  '→',
  '↔',
  'ℝ',
  'ℂ',
  'ℕ',
  'ℤ',
  '𝒢',
  'ℋ',
  'ℒ',
  '𝒫',
  '𝒯',
  '𝒳'
]

function AcademicSymbols() {
  const reducedMotion = useReducedMotion()

  const floatingSymbols = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,
      value: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      size: 1.2 + Math.random() * 1.8,
      delay: Math.random() * 12,
      duration: 15 + Math.random() * 12,
      rotate: Math.random() * 360
    }))
  }, [])

  if (reducedMotion) return null

  return (
    <div className="academic-symbols" aria-hidden="true">
      {floatingSymbols.map((item) => (
        <motion.span
          key={item.id}
          className="academic-symbol"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}rem`
          }}
          initial={{
            y: '110vh',
            opacity: 0,
            rotate: item.rotate,
            scale: 0.6
          }}
          animate={{
            y: '-18vh',
            opacity: [0, 0.45, 0.55, 0.35, 0],
            rotate: item.rotate + 360,
            scale: [0.6, 1, 0.85]
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {item.value}
        </motion.span>
      ))}
    </div>
  )
}

export default AcademicSymbols
