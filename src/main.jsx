import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { PortProvider } from './Context/PortProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortProvider>
      <App />
    </PortProvider>
  </React.StrictMode>,
)
