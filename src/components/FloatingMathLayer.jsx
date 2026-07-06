import { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
  '𝒳',
  'f(x)',
  'P(A|B)',
  'O(n)',
  '∇θL',
  'Wᵀx',
  'softmax',
  'argmax',
  'KL',
  'MSE',
  'RAG',
  'SSL'
]

const REPULSE_RADIUS = 190
const REPULSE_FORCE = 130

function getRepelOffset(item, mouse, viewport) {
  if (!viewport.width || !viewport.height) {
    return { x: 0, y: 0 }
  }

  const symbolX = (item.left / 100) * viewport.width
  const symbolY = (item.top / 100) * viewport.height

  const dx = symbolX - mouse.x
  const dy = symbolY - mouse.y

  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance > REPULSE_RADIUS) {
    return { x: 0, y: 0 }
  }

  const safeDistance = Math.max(distance, 1)
  const power = 1 - safeDistance / REPULSE_RADIUS

  const x = (dx / safeDistance) * power * REPULSE_FORCE
  const y = (dy / safeDistance) * power * REPULSE_FORCE

  return { x, y }
}

function FloatingMathLayer() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

  const [mouse, setMouse] = useState({
    x: -9999,
    y: -9999
  })

  const [viewport, setViewport] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    let frameId = null

    function updateViewport() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    function handlePointerMove(event) {
      if (frameId) return

      frameId = requestAnimationFrame(() => {
        setMouse({
          x: event.clientX,
          y: event.clientY
        })

        frameId = null
      })
    }

    function handlePointerLeave() {
      setMouse({
        x: -9999,
        y: -9999
      })
    }

    updateViewport()

    window.addEventListener('resize', updateViewport)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      window.removeEventListener('resize', updateViewport)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  const items = useMemo(() => {
    return Array.from({ length: 46 }, (_, index) => ({
      id: index,
      value: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 0.9 + Math.random() * 1.8,
      opacity: 0.08 + Math.random() * 0.16,
      duration: 5 + Math.random() * 7,
      delay: Math.random() * 12,
      rotate: -30 + Math.random() * 60,
      drift: 45 + Math.random() * 100
    }))
  }, [])

  if (reducedMotion) return null

  return (
    <motion.div className="floating-math-layer" style={{ y }} aria-hidden="true">
      {items.map((item) => {
        const repel = getRepelOffset(item, mouse, viewport)

        return (
          <motion.span
            key={item.id}
            className="floating-math-symbol-wrap"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`
            }}
            initial={{
              x: 0,
              y: 0,
              rotate: item.rotate,
              scale: 0.9
            }}
            animate={{
              x: [0, item.drift, -item.drift * 0.4, 0],
              y: [0, -item.drift * 0.8, item.drift * 0.35, 0],
              rotate: [item.rotate, item.rotate + 12, item.rotate - 18, item.rotate],
              scale: [0.9, 1.08, 0.96, 0.9]
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <motion.span
              className="floating-math-symbol"
              style={{
                fontSize: `${item.size}rem`,
                opacity: item.opacity
              }}
              animate={{
                x: repel.x,
                y: repel.y
              }}
              transition={{
                type: 'spring',
                stiffness: 210,
                damping: 18,
                mass: 0.6
              }}
            >
              {item.value}
            </motion.span>
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export default FloatingMathLayer
