import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/pages/Home'
import Sobre from '../components/pages/Sobre'
import Produtos from '../components/pages/Produtos'
import Servicos from '../components/pages/Servicos'
import Localizacao from '../components/pages/Localizacao'
import Contato from '../components/pages/Contato'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/Produtos' component={Produtos} />
        <Route path='/Servicos' component={Servicos} />
        <Route path='/Localizacao' component={Localizacao} />
        <Route path='/Contato' component={Contato} />
        <Redirect from='*' to='/' />
    </Switch>