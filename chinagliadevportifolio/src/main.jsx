import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// a ordem dos imports segue o <head> do HTML original: style.css antes do Bootstrap
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/js/dist/carousel'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
