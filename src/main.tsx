import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CoffeeApp } from './CoffeeApp.tsx'
import { LoginPage } from './auth/pages/LoginPage.tsx' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
)
