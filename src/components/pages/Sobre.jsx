import React from 'react'
import Building from '../template/Building'

export default props =>
    <div>
        <div className="d-block jumbotron jumbotron-fluid jumbotron-pages">
            <div className="container">
                <h1 className="display-4">Sobre Nós</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="container py-4 text-justify py-4">
            <h4 className="display-4 mb-4 text-center"><strong>História da Empresa</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia. Curabitur sollicitudin ex mi, eu
                tempus quam luctus quis. Pellentesque laoreet vel sem et venenatis. Aliquam
                eu bibendum sem. Aliquam est ipsum, tincidunt vitae vulputate at, ultricies
                id ante. Duis finibus nibh ex, sed pulvinar purus viverra et. Cras id nibh
                tincidunt, aliquam magna et, dapibus est. Nam eget accumsan sapien, nec lacinia
                dolor. Donec vitae sagittis lectus. Donec ac est mi. Nullam id pellentesque risus,
                ullamcorper scelerisque urna.
            </p>
            <p>
                Sed suscipit urna nec magna ultrices, nec tincidunt turpis lobortis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
                bibendum sapien sit amet hendrerit. Morbi in elit mauris. Vivamus nec faucibus
                libero. Proin tincidunt ipsum at orci mollis consectetur. Maecenas molestie vitae
                lorem quis mollis. Nam ultrices augue nulla, ut placerat elit lobortis sit amet.
                Fusce a laoreet ligula. Suspendisse in maximus lorem, eu sagittis dui.
            </p>
            <br/>
            <h4 className="display-4 mb-4 text-center"><strong>Missão</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia.
            </p>
            <br/>
            <h4 className="display-4 mb-4 text-center"><strong>Visão</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia.
            </p>
            <br/>
            <h4 className="display-4 mb-4 text-center"><strong>Valores</strong></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec urna orci, euismod at turpis non, gravida volutpat augue.
                In interdum, risus ut finibus convallis, justo arcu dictum magna,
                vel vestibulum lacus eros sit amet magna. Nulla finibus nulla venenatis
                metus gravida, in hendrerit nulla lacinia.
            </p>

            <hr />
        </div>

        <Building />
    </div>