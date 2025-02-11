import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Greet from './component/Greet'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
