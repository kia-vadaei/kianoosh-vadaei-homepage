import { useEffect, useState } from 'react'
import { updateMetaThemeColor } from '../utils/seo'

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    updateMetaThemeColor(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme
  }
}
