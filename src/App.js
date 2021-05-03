import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Nosotros} from './components/Nosotros'
import {Inicio} from './components/Inicio'
import {Navbar} from './components/Navbar'
import {Mision} from './components/Mision'
import {Vision} from './components/Vision'
import {Contactanos} from './components/Contactanos'
import { Registro } from './components/Registrar'
import { Login } from './components/Login'
import { Recuperar } from './components/Recuperar'
import {Chat} from './components/Chat'
import Bygoogle from './components/Bygoogle'


import style from './components/style.css'

function App() {

  return (

    <Router>
      <Navbar/>
      <div>
        <Switch>

          <Route path="/nosotros" component={Nosotros}/>
          <Route path="/contactanos" component={Contactanos}/>
          <Route path="/mision" component={Mision}/>
          <Route path="/vision" component={Vision}/>
          <Route path="/inicio" component={Inicio}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/recuperar" component={Recuperar}/>
          <Route path="/login" component={Login}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/" component={Inicio}/>


        </Switch>
        <Bygoogle/>
      </div>
    </Router>


  );
}

export default App;
