import React from 'react'
import './Localizacao.css'

export default props =>
    <div>
        <div className="d-block jumbotron jumbotron-fluid jumbotron-pages">
            <div className="container">
                <h1 className="display-4">Localização</h1>
                <hr/>
                <p className="lead ">
                    Avenida Guareí, 615 - Floresta  <br />
                    Guareí-SP | CEP: 18250-000
                </p>
            </div>
        </div>

        <div className="container-fluid">
            {/* eslint-disable-next-line */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27658.618730414804!2d-48.19403701575387!3d-23.35524785759887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41dccf15620e6ae1!2sCOMERCIAL+SANTOS+IND%C3%9ASTRIA+E+COM%C3%89RCIO+DE+MADEIRAS!5e0!3m2!1spt-BR!2sbr!4v1563126876425!5m2!1spt-BR!2sbr"
                className="map" frameBorder="0" allowFullScreen/>
        </div>
    </div>