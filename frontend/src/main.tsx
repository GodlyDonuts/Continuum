import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import '@fontsource/geist-sans'
import '@fontsource/newsreader'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
