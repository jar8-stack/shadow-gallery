import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'


import firebase from 'firebase/app'
import Auth from 'firebase/app'
import style from '../../src/googleStyles.css'



import 'firebase/firestore';
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData } from 'react-firebase-hooks/firestore';



export const Registro= () =>{

  const [usuario, setUsuario] =useState();
  const [password, setPassword]= useState();
  const [repassword, setRepassword] = useState();

  const handleSubmit= (e) =>{
    e.preventDefault();

    if(password==repassword){


          add(usuario, password);
  
    }else{
      alert("Contraseñas no coindicen");
    }

  }

  return(



    <div className="row">


      <div  className="col-ms-4">

        <form className="card card-body" onSubmit= {handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Registro de usuario</label> <br/>
            
          </div>

          <div className="mb-3">
            <label className="form-label" style={{color: "black"}}>correo</label>
            <input type="email" className="form-control" onChange= { e=> setUsuario(e.target.value) } value={usuario} />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{color: "black"}}>Password</label>
            <input type="password" className="form-control" onChange= { e=> setPassword(e.target.value) } value={password} />
          </div>
          <div className="mb-3">
            <label className="form-label"  style={{color: "black"}}>Repetir password</label>
            <input type="password" className="form-control" onChange= { e=> setRepassword(e.target.value) } value={repassword} />
          </div>

          <button type="submit" className="btn btn-primary">Guardar</button>

          <Link className="navbar-brand" to="/">Entrar</Link>

        </form>




      </div>


    </div>


  )

}




function add(email, password) {
  firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
          if (res.user){
              Auth.setLoggedIn(true);
              addUser(email);
          } 
      }).catch(e => {
          window.alert(e.message);
          addUser();
      })
}
function addUser() {
  const usersRef = firebase.firestore().collection('users');  
  console.log("user sended")
  var uid = firebase.auth().currentUser.uid;
  var email = firebase.auth().currentUser.email;
  var photoURL= firebase.auth().currentUser.photoURL;
  usersRef.add({
      uid,
      email, 
      photoURL, 
      lastTime: new Date
  });   
}
