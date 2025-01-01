import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SlamBook from './SlamBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlamBook/>

  </StrictMode>,
)
