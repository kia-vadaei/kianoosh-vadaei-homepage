import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    function updateActiveSection() {
      const scrollPosition = window.scrollY + 140

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)

        if (!section) continue

        const top = section.offsetTop
        const height = section.offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId)
          return
        }
      }
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true
    })

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [sectionIds])

  return activeSection
}
