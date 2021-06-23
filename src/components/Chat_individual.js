import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import portada from './assets/img/portada.jpg'
import comunidad from './assets/img/comunidad.jpg'

import './Chat.css';


import firebaseConfig from '../firebaseConfig'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';



import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';



if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}





const auth= firebase.auth();
const firestore= firebase.firestore();
const analytics = firebase.analytics();




export const Chat_individual = () =>{
    const [user] = useAuthState(auth);  
    
    
  
    return(
      <div className="app">
      <center>
      <header>
        <h1>Mi chat 💬</h1>
        <SignOut />
        </header>
  
        <section>
          { user ? <ChatRoom /> : <SignIn /> }        
          
        </section>
        </center>
      </div>
    )
  
}


function SignOut(){
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()} >Salir</button>
    )
}

function SignIn(){
    const signInWithGoogle= () =>{
      const provider= new firebase.auth.GoogleAuthProvider();    
      auth.signInWithPopup(provider).then((data)=>{
        //console.log(data.user.email);
        const usersRef = firebase.firestore().collection('users'); 
        var olo= false; 
        var arr= []; 
        usersRef.get().then((querySnapShot)=>{
          querySnapShot.forEach((doc) =>{
            arr.push(doc.data().email);
            //console.log(`${doc.id} => ${doc.data().email}`);
            arr.push(doc.data.email);
            if(doc.data().email == data.user.email){
              olo= true; 
            }
          });
          //console.log(arr); 
          var olo=false; 
          for(let i=0; i<arr.length; i++){
            if(arr[i]== data.user.email){
              olo= true; 
            }
          }
  
          if(olo){
            console.log('usuario ya registrado');
          }else{
            var uid= data.user.uid; 
            var email= data.user.email; 
            var photoURL= data.user.photoURL; 
            usersRef.add({
              uid,
              email, 
              photoURL
          });
          }
        });
  
      });    
  
    }
  
    return(<>
      <p>Bienvenido</p>
      <button className="sign-in" onClick={signInWithGoogle}> Entrar con google </button> 
      <br />
      <br />
      
  
  
      </>);
  }

  
  function ChatRoom(){
    const {uid_recibe}= useParams(); 

    //onsole.log("El uid del usuario don el que quieres chatear es "+uid_recibe);

     

    const dummy= useRef();
    const messagesRef = firestore.collection('private_messages');  
    
    const query = messagesRef.orderBy('createAt').limit(25);


  
    const [messages] = useCollectionData(query, {idField: 'id'});

    let arr= []; 
    
    
    if(messages !== undefined){
      console.log('mensajes definido');
      for(let i=0; i<messages.length; i++){ 
        if(messages[i].usr_send== uid_recibe && messages[i].usr_recive == auth.currentUser.uid || messages[i].usr_recive== uid_recibe && messages[i].usr_send == auth.currentUser.uid){
          arr.push(messages[i]);
        }        
      }      
    }else{
      console.log('mensajes no definido');
    }

    console.log(arr)

    

    



    //obteniendo usuarios
  
    const usersRef= firestore.collection('users');
    const queryUsers= usersRef.orderBy('email').limit(25);
    const [users]= useCollectionData(queryUsers, {idField: 'id'});
  
    //obteniendo usuarios
  
    const [formValue, setFormValue]= useState();
  
    const sendMessage= async (e) =>{
      e.preventDefault()      
      const {uid, photoURL}= auth.currentUser;
      const {createAt}= new Date(); 

      const usr_photo= photoURL; 
      //const usr_recive= uidRecibe; 
      const usr_send= uid; 
      

  
      await messagesRef.add({
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
        text: formValue,
        usr_photo,
        usr_recive: uid_recibe,       
        usr_send

      })
      setFormValue('')
      
      //dummy.current.scrollIntoView({behavior: 'smooth'})
    };
  
    return(<>
  
        <div>
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="recent_heading">
                    <h4>Recent</h4>
                  </div>
                  <div className="srch_bar">
                    <div className="stylish-input-group">
                      <input type="text" className="search-bar" placeholder="Search" />
                      <span className="input-group-addon">
                        <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                      </span> </div>
                  </div>
                </div>
                <div className="inbox_chat">
                  <div className="chat_list active_chat">
                  <div className="chat_people">
                        <div className="chat_img"> <img src={'data:image/png;base64,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'} alt="sunil" /> </div>
                        <div className="chat_ib">
                          <Link to={`/chat`}>
                          <h5>Chat grupal <span className="chat_date">Dec 25</span></h5>
                          <p>Test, which is a new approach to have all solutions 
                            astrology under one roof.</p>
                            </Link>
                        </div>
                      </div>      
                  {users && users.map(usr => <ChatUsers key = {usr.id} user= {usr} />)}
                  </div>                                                                                                
                </div>
              </div>
              <div className="mesgs">
                <div className="msg_history">
                {arr && arr.map(msg => <ChatMessages key = {msg.id} message = {msg} />)}
                </div>
                <div className="type_msg">
                  <div className="input_msg_write">
                  <form onSubmit = {sendMessage}>
                    <input value= {formValue} onChange= {(e)=> setFormValue(e.target.value)} placeholder="Escriba su mensaje" />
                    <button type="submit">Enviar</button>
                  </form>   
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center top_spac"> Design by <a target="_blank" href="https://www.linkedin.com/in/sunil-rajput-nattho-singh/">Sunil Rajput</a></p>
          </div>&lt;
        </div>    
  
    </>);
  
}



function ChatUsers(promps){

    const {uid, email, photoURL}= promps.user;
    
    
    return(<>
        <div className="chat_people">
                        <div className="chat_img"> <img src={photoURL || 'data:image/png;base64,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'} alt="sunil" /> </div>
                        <div className="chat_ib">
                          <Link to={`/chat_individual/${uid}`}>
                          <h5>{email} <span className="chat_date">Dec 25</span></h5>
                          <p>Test, which is a new approach to have all solutions 
                            astrology under one roof.</p>
                            </Link>
                        </div>
                      </div>
      </>)
    }
    
    function ChatMessages(promps){      
    
      const {text, usr_send, usr_photo}= promps.message;
      const messageClass= usr_send === auth.currentUser.uid ? 'sent':'recived'
    
    
    
    
      return(<>
      
        <div className= {`message ${messageClass}`}>
        <img src={usr_photo || 'data:image/png;base64,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'} />
          <p>
            {text}
          </p>
    
    
        </div>
      </>)
    }
    
  