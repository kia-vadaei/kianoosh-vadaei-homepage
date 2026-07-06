export function useScrollReveal(delay = 0) {
  return {
    initial: {
      opacity: 0,
      y: 54,
      scale: 0.96,
      filter: 'blur(10px)'
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    },
    viewport: {
      once: true,
      amount: 0.18,
      margin: '0px 0px -80px 0px'
    },
    transition: {
      duration: 0.72,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08
    }
  }
}

export const revealItem = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}
