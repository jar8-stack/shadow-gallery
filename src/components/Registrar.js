import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'
import style from '../../src/googleStyles.css'


export const Registro= () =>{

  const [usuario, setUsuario] =useState();
  const [password, setPassword]= useState();
  const [repassword, setRepassword] = useState();

  const handleSubmit= (e) =>{
    e.preventDefault();

    if(password==repassword){


          add(usuario, password)
  
    }else{
      alert("Contraseñas no coindicen");
    }

  }

  return(



    <div className="row">


      <div  className="col-ms-4">

        <form className="card card-body" onSubmit= {handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Correo electronico</label>
            <input type="email" className="form-control" onChange= { e=> setUsuario(e.target.value) } value={usuario} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange= { e=> setPassword(e.target.value) } value={password} />
          </div>
          <div className="mb-3">
            <label className="form-label">Repetir password</label>
            <input type="password" className="form-control" onChange= { e=> setRepassword(e.target.value) } value={repassword} />
          </div>

          <button type="submit" className="btn btn-primary">Guardar</button>

          <Link className="navbar-brand" to="/">Entrar</Link>

        </form>




      </div>


    </div>


  )

}




function add(email, password){
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(res =>{
    if(res.user) Auth.setLoggdIn(true)
  })
  .catch( e => {
    console.log(e.message)
  })
}
