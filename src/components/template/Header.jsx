import './Header.css'
import logo from '../../assets/img/logo.png'

import React from 'react'

import $ from 'jquery'


$(window).on('scroll', function () {
    const navbarScroll = 'navbar-scroll navbar-light shadow-sm mb-5 bg-white'

    if ($(window).scrollTop()) {
        $('nav').addClass(navbarScroll);
        $('nav').removeClass('navbar-dark');
        $('a').addClass('logo-small');
    } else {
        $('nav').removeClass(navbarScroll);
        $('nav').addClass('navbar-dark');
        $('a').removeClass('logo-small');
    }
})

const Header = () => {

    const isActive = path => {
        const baseURL = `${window.location.protocol}//${window.location.host}`

        if (window.location.href === `${baseURL}/${path}`) {
            return 'active'
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className="logo ml-3" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" id={isActive('')} href="/">Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={isActive('sobre')} href="/sobre">
                            Sobre Nós
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={isActive('produtos')} href="/produtos">
                            Produtos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={isActive('servicos')} href="/servicos">
                            Serviços
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={isActive('localizacao')} href="/localizacao">
                            Localização
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={isActive('contato')} href="/contato">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;