import React from 'react'

import Serragens from '../../assets/img/fotos-servicos/serragens.JPG'
import Pallet from '../../assets/img/fotos-servicos/pallets2.JPG'
import Cavaco from '../../assets/img/fotos-servicos/cavaco.JPG'


export default props =>
    <div>
        <div className="d-block jumbotron jumbotron-fluid jumbotron-pages">
            <div className="container">
                <h1 className="display-4">Nossos Produtos</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>        

        <div className="container">          
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={Serragens} alt="Serragens" className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title display-4">Serragens</h5>
                            <p className="card-text">This is a wider card with</p>
                            <p className="card-text"><small className="text-muted">This is a wider card with</small></p>
                            <button className="btn btn-lg btn-success" href="/">Orçamento</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={Pallet} alt="Pallet" className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title display-4">Pallet</h5>
                            <p className="card-text">This is a wider card with</p>
                            <p className="card-text"><small className="text-muted">This is a wider card with</small></p>
                            <button className="btn btn-lg btn-success" href="/">Orçamento</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={Cavaco} alt="Cavaco" className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title display-4">Cavaco</h5>
                            <p className="card-text">This is a wider card with</p>
                            <p className="card-text"><small className="text-muted">This is a wider card with</small></p>
                            <button className="btn btn-lg btn-success" href="/">Orçamento</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="py-3" />
        </div>

        <div className="container py-5 my-5">
            <h3>PÁGINA EM DESENVOLVIMENTO</h3>
            <p>VOLTE EM BREVE</p>
            <center>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">20%</div>
                </div>
            </center>
        </div>

    </div>