import './Home.css'
import React from 'react'
import Main from '../template/Main'
import Building from '../template/Building'

import ImgHome from '../../assets/img/home.jpg'
import ImgHome1 from '../../assets/img/home1.jpg'
import ImgHome2 from '../../assets/img/home2.jpg'

export default props =>
    <Main>
        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ImgHome} className="d-block w-100 img-fluid" alt="home" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className="btn btn-info btn-lg">Learn More</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={ImgHome1} className="d-block w-100 img-fluid" alt="home2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className="btn btn-info btn-lg">Learn More</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={ImgHome2} className="d-block w-100 img-fluid" alt="home3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className="btn btn-info btn-lg">Learn More</button>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators"
                role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators"
                role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="card border-success my-5 container shadow-sm"
            id="card-reforest">
            <div className="card-body text-success">
                <div id="ico-tree">
                    <i className="fa fa-tree" /> &nbsp;
                    <i className="fa fa-tree" /> &nbsp;
                    <i className="fa fa-tree" />
                </div>
                <h5 className="card-title pt-3 text-center" id="title-reforest">
                    <strong>ESTA EMPRESA REFLORESTA</strong>
                </h5>
                <p className="card-text text-dark" id="text-reforest">
                    Nossos produtos são produzidos somente com madeiras reflorestadas de pinus
                    e eucalipto com respeito as pessoas e ao meio ambiente.
                </p>
            </div>

        </div>

        <Building />

    </Main>