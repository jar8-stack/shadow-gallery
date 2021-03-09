import React from 'react'
import lamentos from './assets/img/lamentos.jpg'
import soledad from './assets/img/soledad.jpg'
import dolor from './assets/img/dolor.jpg'

export const Mision = () =>(
  <div>

    <center>

  <h1>Poemas de la oscuridad</h1>
  <h2>Observa aqui los lamentos de quienes han elegido vivir en la penuria</h2>

  <br></br>
  <br></br><br></br>


  <h4>Lamento de dolor</h4>
  <p>Aquellos que osan entrar al terrible mundo de la lcoura poco a poco empiezan a verlo como algo maravilloso.</p>
  <img src={lamentos}/>
<p>Moxito55</p>

  <br></br><br></br>

    <h4>Soledad del abismno</h4>
    <p>cuando miras dentro del abismo por mucho tiempo el avismo suele ver dentro de ti.</p>
    <img src={soledad}/>
    <p>Panda8405</p>

  <br></br><br></br>

    <h4>Dolor interno</h4>
    <p>Y yo se, que todo esta peor</p>
    <img src={dolor}/>
    <p>xddd35353</p>

  <br></br><br></br>

  </center>

  </div>
)
