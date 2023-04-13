import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'



ReactDOM.render(
  <Provider store={store}  >
    <BrowserRouter>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500&display=swap" rel="stylesheet" />
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
)
