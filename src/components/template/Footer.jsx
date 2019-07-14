import './Footer.css'
import React from 'react'

export default props =>
    <footer>
        <footer className="page-footer font-small teal pt-2">
            <div className="container-fluid text-left text-md-left py-3">
                <div className="row">
                    <div className="col-md-6 mt-sm-0 mb-3 ml-4">
                        <p>
                            <i className="fa fa-home py-2"></i> Avenida Guareí, 615 - Floresta | Guareí-SP | CEP: 18250-000 <br />
                            <i className="fa fa-phone"></i> <a href="tel:01532581105" className="linkfoot">(15) 3258 1105</a> | <a href="tel:01532581966" className="linkfoot">(15) 3258 1966</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-1">
                Desenvolvido por <a href="http://github.com/cunhamuril" target="_blank" rel="noopener noreferrer" className="linkfoot">Murilo Cunha</a>
            </div>
        </footer>
    </footer>