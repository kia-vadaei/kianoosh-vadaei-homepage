import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 600)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
