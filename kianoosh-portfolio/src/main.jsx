import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'

import './styles/reset.css'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)
