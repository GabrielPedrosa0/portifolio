import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { install } from '@twind/core'
import config from './twind.config.js'
import { IdiomaProvider } from './i18n.jsx'
import App from './App.jsx'

install(config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>,
)
