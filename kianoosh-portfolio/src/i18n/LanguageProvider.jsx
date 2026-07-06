import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const isPersian = language === 'fa'
  const direction = isPersian ? 'rtl' : 'ltr'

  useEffect(() => {
    localStorage.setItem('language', language)

    document.documentElement.lang = language
    document.documentElement.dir = direction

    document.body.classList.toggle('is-rtl', isPersian)
  }, [language, direction, isPersian])

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      direction,
      isPersian,
      t: translations[language]
    }
  }, [language, direction, isPersian])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
