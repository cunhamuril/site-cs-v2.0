import React from 'react'
import './Contato.css'
import Building from '../template/Building'

export default props =>
    <div>
        <div className="d-block jumbotron jumbotron-fluid jumbotron-pages">
            <div className="container">
                <h1 className="display-4">Contato</h1>
                <hr />
                <div className="lead text-justify">
                    <ul className="p-0">
                        <li>
                            <i className="fa fa-envelope"></i> &nbsp;
                            <a href="mailto:murilo.sant@hotmail.com">contato@serrariasantos.com.br</a><br />
                        </li>
                        <li>
                            <i className="fa fa-phone"></i>&nbsp;
                            <a href="tel:015332581105">(15) 3258 1105</a> | <a href="tel:015332581966">(15) 3258 1966</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container">
            <h1 className="display-4">Fale Conosco</h1>
            <p>Se preferir envie sua mensagem para os nossos atendentes</p>
            <form className="py-4">
                <div className="form-row">
                    <div className="form-group col-md-6 col-sm-12">
                        <input type="text" className="form-control" placeholder="Nome" />
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="E-mail" />
                    </div>
                    <div className="form-group col-12">
                        <textarea name="textarea" className="form-control" cols="30" rows="6" placeholder="Mensagem"></textarea>
                    </div>
                </div>
                <button className="btn btn-success btn-lg d-flex" href="/">Enviar</button>
            </form>

            <hr className="py-4" />
        </div>

        <Building />

    </div>