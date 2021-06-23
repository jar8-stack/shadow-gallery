import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'
import style from '../../src/googleStyles.css'

export const Login= () =>{

  const [usuario, setUsuario] =useState();
  const [password, setPassword]= useState();

  const handleSubmit= (e) =>{
    e.preventDefault()
    login(usuario, password)
  }


  return(
    <div className="row">


      <div  className="col-ms-4">

        <form className="card card-body" onSubmit= {handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Iniciar sesión</label> <br /><br /><br />
            <label className="form-label" style={{color: "black"}}>e-mail</label>
            <input type="email" className="form-control" onChange= { e=> setUsuario(e.target.value) } value={usuario} />
            <label className="form-label" style={{color: "black"}}>Password</label>
            <input type="password" className="form-control" onChange= { e=> setPassword(e.target.value) } value={password}/>
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>

        </form>

        <Link className="navbar-brand" to="/registro">¿Tiene cuenta?</Link>
        <Link className="navbar-brand" to="/recuperar">¿Olvidaste tu contraseña?</Link>



      </div>

    </div>
  )

}


function login(usuario, password) {

    firebase
    .auth()
    .signInWithEmailAndPassword(usuario, password)
    .then(res =>{
        if(res.user) Auth.setLoggedIn(true)
        
    })
    .catch(e => {
        console.log(e.message)
    })

}
