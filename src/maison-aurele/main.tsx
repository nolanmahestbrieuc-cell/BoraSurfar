import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import './maison-aurele.css'
import MaisonAurele from './MaisonAurele.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaisonAurele />
  </StrictMode>,
)
