import React from 'react'
import style from '../../src/googleStyles.css'

export const Contactanos = () =>(


  <div>
          <h1 style={{color: "white"}}>Hacer un amarre</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: "white"}}>Nombre de la futura pareja</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: "white"}}>Email</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su mail" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: "white"}}>Razon por la que haces el amarre</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: "white"}}>Un mensaje de amor</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="mb-3">
            <input type="submit" className="form-control" id="exampleFormControlInput1" placeholder="Hacer amarre" />
          </div>
    </div>

)
