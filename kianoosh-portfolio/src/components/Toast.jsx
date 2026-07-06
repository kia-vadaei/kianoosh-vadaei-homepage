import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

function Toast({ toast }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className={clsx('toast', `toast--${toast.type}`)}
          initial={{ opacity: 0, x: 80, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 80, scale: 0.96 }}
          transition={{ duration: 0.25 }}
        >
          {toast.message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
