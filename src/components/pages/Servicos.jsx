import React from 'react'
import './Servicos.css'

import MateriaPrima from '../../assets/img/fotos-servicos/materiaprima.JPG'
import MateriaPrima1 from '../../assets/img/fotos-servicos/materiaprima2.JPG'
import Corte from '../../assets/img/fotos-servicos/corte.JPG'
import Corte1 from '../../assets/img/fotos-servicos/corte2.JPG'
import Fabricacao from '../../assets/img/fotos-servicos/fabricacao.JPG'
import Fabricacao1 from '../../assets/img/fotos-servicos/fabricacao2.JPG'
import Fabricacao2 from '../../assets/img/fotos-servicos/estoque.JPG'
import Transporte from '../../assets/img/fotos-servicos/transporte.JPG'

export default props =>
    <div>
        <div className="d-block jumbotron jumbotron-fluid jumbotron-pages">
            <div className="container">
                <h1 className="display-4">Serviços</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="container">            
            <h1 className="display-4 mb-4"><strong>Chegada da Matéria Prima</strong></h1>
            <img src={MateriaPrima} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />
            <img src={MateriaPrima1} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />
            <p className="text-justify py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia. Curabitur sollicitudin ex mi, eu
                tempus quam luctus quis. Pellentesque laoreet vel sem et venenatis. Aliquam
                eu bibendum sem.
            </p>

            <h1 className="display-4 mb-2"><strong>Beneficiamento de Madeira</strong></h1>
            <img src={Corte} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />
            <img src={Corte1} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />
            <p className="text-justify py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia. Curabitur sollicitudin ex mi, eu
                tempus quam luctus quis. Pellentesque laoreet vel sem et venenatis. Aliquam
                eu bibendum sem.
            </p>

            <h1 className="display-4 mb-2"><strong>Fabricação de Pallets</strong></h1>
            <img src={Fabricacao} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />
            <img src={Fabricacao1} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />         
            <img src={Fabricacao2} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />         
            <p className="text-justify py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia. Curabitur sollicitudin ex mi, eu
                tempus quam luctus quis. Pellentesque laoreet vel sem et venenatis. Aliquam
                eu bibendum sem.
            </p>            

            <h1 className="display-4 mb-2"><strong>Transporte</strong></h1>
            <img src={Transporte} alt="Matéria Prima" className="rounded mx-auto d-inline-block p-1" />               
            <p className="text-justify py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia. Curabitur sollicitudin ex mi, eu
                tempus quam luctus quis. Pellentesque laoreet vel sem et venenatis. Aliquam
                eu bibendum sem.
            </p>
            <hr/>
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