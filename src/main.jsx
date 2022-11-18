import React from 'react'
import ReactDOM from 'react-dom/client'
import Git from './gitSearch/Git'
import App from './App'
import Header from './componentes/Header'
import Router from './router/Router'
import Footer from './Footer'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Router/>
    <Footer/>
  </React.StrictMode>
)
