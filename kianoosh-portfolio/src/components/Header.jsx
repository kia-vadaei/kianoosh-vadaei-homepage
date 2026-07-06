import { useState } from 'react'
import clsx from 'clsx'
import { Menu } from 'lucide-react'

import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { navItems, sectionIds } from '../utils/constants'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    const header = document.querySelector('.header')
    const headerHeight = header ? header.offsetHeight : 0

    if (!section) return

    const sectionTop = section.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: Math.max(0, sectionTop - headerHeight - 18),
      behavior: 'smooth'
    })

    setIsMenuOpen(false)
  }

  function scrollToTop(event) {
    event.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#" className="logo" onClick={scrollToTop}>
            Kianoosh Vadaei
          </a>

          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={clsx('nav__link', activeSection === item.id && 'active')}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <button
              type="button"
              className="menu-button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  )
}

export default Header
