import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'
import {Redirect} from 'react-router-dom'

const firebaseApp = firebase.initializeApp(firebaseConfig)

class Bygoogle extends Component{

    render(){
        const{
            user,
            signOut,
            signInWithGoogle,
        } = this.props

        return(
            <div>
                {
                    user
                    ? <Redirect to='/inicio' />
                    : <Redirect to='/' />
                }

                {
                    user
                    ?<button onClick={signOut}>Salir</button>
                    :<button onClick={signInWithGoogle}>Logueate</button>
                }

            </div>
        );

    }

}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,

})(Bygoogle);
