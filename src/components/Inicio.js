import React from 'react'
import portada from './assets/img/portada.jpg'
import comunidad from './assets/img/comunidad.jpg'

export const Inicio = () =>(

  <div>

    <h1>El oscuro mundo del vacio</h1>
    <img src={portada} width="1720 px" height="480 px"/>

    <h2>¿Que somos?</h2>
    <p>Esta pagina desprende el dolor humano para convertirlo en un pedazo de internet, con el fin de que nuestra comunidad lo vea, tambien vendemos productos magicos para su uso personal.</p>

    <img src={comunidad} width="1720 px" height="480 px"/>


  </div>

)
