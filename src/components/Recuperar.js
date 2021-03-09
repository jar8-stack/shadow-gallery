import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'
import style from '../../src/googleStyles.css'


export const Recuperar = () =>{
  const [usuario, setUsuario] = useState()

  const handleSubmit= (e) => {
    e.preventDefault()
    recuperar(usuario)
  }

  return(
    <div className="row">

      <div  className="col-ms-4">

        <form className="card card-body" onSubmit= {handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input type="email" className="form-control" onChange= { e=> setUsuario(e.target.value) } value={usuario} />
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>

        </form>




      </div>

    </div>
  )
}


function recuperar(usuario){
  firebase
  .auth()
  .sendPasswordResetEmail(usuario)
  .then(res =>{

  })

  .catch(e =>{
    console.log(e.message)
  })
}
