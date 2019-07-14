import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/dist/jquery.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../main/Routes.jsx'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
