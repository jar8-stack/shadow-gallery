import React from 'react'
import aretes from './assets/img/aretes.jpg'
import colgante from './assets/img/colgante.jpg'
import cristales from './assets/img/cristales.jpg'
import elefante from './assets/img/elefante.jpg'
import medallon from './assets/img/medallon.jpg'
import muneca from './assets/img/muneca.jpg'
import pulsera from './assets/img/pulsera.jpg'

export const Nosotros = () =>(

  <div>
    <center>
      <h1>Productos a la venta</h1>
      <div>
        <div>
          <figure>
            <img src={aretes} alt="Monton de post-its" />
            <figcaption>Aretes de ala de angel  $45</figcaption>
          </figure>
          <figure>
            <img src={colgante} alt="Monton de post-its" />
            <figcaption>Colgante del gallo de oro $200</figcaption>
          </figure>
          <figure>
            <img src={cristales} alt="Monton de post-its" />
            <figcaption>Crsitales magicos de la suerte $25 c/u</figcaption>
          </figure>
          <figure>
            <img src={elefante} alt="Monton de post-its" />
            <figcaption>Elefante de la prosperidad $76</figcaption>
          </figure>
          <figure>
            <img src={medallon} alt="Monton de post-its" />
            <figcaption>medallon de cuatro puntas $450</figcaption>
          </figure>
          <figure>
            <img src={muneca} alt="Monton de post-its" />
            <figcaption>Muñeca budu $70</figcaption>
          </figure>
          <figure>
            <img src={pulsera} alt="Monton de post-its" />
            <figcaption>Pulsera religiosa $70</figcaption>
          </figure>
        </div>
      </div>
    </center>
  </div>

)
