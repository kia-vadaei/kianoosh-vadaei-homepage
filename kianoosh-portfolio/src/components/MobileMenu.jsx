import clsx from 'clsx'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function MobileMenu({ isOpen, navItems, activeSection, onClose, onNavigate }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.aside
            className="mobile-menu__panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Close menu"
              onClick={onClose}
            >
              <X size={22} />
            </button>

            <nav className="mobile-menu__nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={clsx('mobile-menu__link', activeSection === item.id && 'active')}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
