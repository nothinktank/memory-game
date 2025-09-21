import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardGrid from './components/card-grid.jsx'
import Header from './components/header.jsx'
import ScoreBoard from './components/scoreboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <CardGrid />
  </StrictMode>,
)
