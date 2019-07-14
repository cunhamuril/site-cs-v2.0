import React from 'react'

export default props =>
    <div>
        <div className="d-block jumbotron jumbotron-fluid jumbotron-pages">
            <div className="container">
                <h1 className="display-4">Sobre Nós</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="container py-4">
            <h1 className="display-4 mb-4"><strong>What is Lorem Ipsum?</strong></h1>
            <p className="text-justify py-4">
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
            <br /><br />
                Sed suscipit urna nec magna ultrices, nec tincidunt turpis lobortis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
                bibendum sapien sit amet hendrerit. Morbi in elit mauris. Vivamus nec faucibus
                libero. Proin tincidunt ipsum at orci mollis consectetur. Maecenas molestie vitae
                lorem quis mollis. Nam ultrices augue nulla, ut placerat elit lobortis sit amet.
                Fusce a laoreet ligula. Suspendisse in maximus lorem, eu sagittis dui.
            </p>

            <hr />
        </div>

        <div className="container my-5">
            <center>
                <h3>PÁGINA EM DESENVOLVIMENTO</h3>
                <p>VOLTE EM BREVE</p>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">20%</div>
                </div>
            </center>
        </div>
    </div>