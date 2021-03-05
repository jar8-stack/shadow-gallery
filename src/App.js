import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Nosotros} from './components/Nosotros'
import {Inicio} from './components/Inicio'
import {Navbar} from './components/Navbar'
import {Mision} from './components/Mision'
import {Vision} from './components/Vision'
import {Contactanos} from './components/Contactanos'

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
          <Route path="/" component={Inicio}/>


        </Switch>
      </div>
    </Router>


  );
}

export default App;
