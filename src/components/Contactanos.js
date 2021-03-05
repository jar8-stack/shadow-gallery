import React from 'react'

export const Contactanos = () =>(


  <div>
          <h1>Contactanos</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Numero de telefono</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su numero telefonico" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Razon por la que nos contacta</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="mb-3">
            <input type="submit" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su numero telefonico" />
          </div>
        </div>

)
