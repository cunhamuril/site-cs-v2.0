import React from 'react'
import Building from '../template/Building'

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
                            
                            <button className="btn btn-success btn-lg"
                                type="button" data-toggle="collapse"
                                data-target="#budget" aria-expanded="false"
                                aria-controls="budget">Orçamento</button>

                            <div className="collapse mt-4" id="budget">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="button-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Calcular</button>
                                    </div>                                    
                                </div>                        
                            </div>
                            
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

                            <button className="btn btn-success btn-lg"
                                type="button" data-toggle="collapse"
                                data-target="#budget1" aria-expanded="false"
                                aria-controls="budget1">Orçamento</button>

                            <div className="collapse mt-4" id="budget1">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="button-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Calcular</button>
                                    </div>                                    
                                </div>                        
                            </div>

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
                            
                            <button className="btn btn-success btn-lg"
                                type="button" data-toggle="collapse"
                                data-target="#budget2" aria-expanded="false"
                                aria-controls="budget2">Orçamento</button>

                            <div className="collapse mt-4" id="budget2">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="button-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Calcular</button>
                                    </div>                                    
                                </div>                        
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <hr className="py-3" />
        </div>

        <Building />

    </div>