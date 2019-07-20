import React from 'react'
import './Servicos.css'
import Building from '../template/Building'

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
                <h3 className="display-4">Serviços</h3>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="container">            
            <h3 className=" mb-4">Chegada da Matéria Prima</h3>
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

            <h3 className="mb-2">Beneficiamento de Madeira</h3>
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

            <h3 className=" mb-2">Fabricação de Pallets</h3>
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

            <h3 className=" mb-2">Transporte</h3>
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

        <Building />
                
    </div>