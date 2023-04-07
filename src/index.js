import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500&display=swap" rel="stylesheet" />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
