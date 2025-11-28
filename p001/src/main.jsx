import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import myapp from './myapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <myapp/>
  </StrictMode>,
)
