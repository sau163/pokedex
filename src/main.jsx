import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  // we need to rap the page which is use router inside the browserRouter so, we rap the main render page so that if any pagr use the router we not need to check for use.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
