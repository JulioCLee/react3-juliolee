import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Formulario = ({lstColaboradores, setLstColaboradores}) => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const agregarColaborador = (e) => {
    e.preventDefault();    

    setLstColaboradores([...lstColaboradores, {nombre: nombre, correo: email}]);
  }

  return (
    <div>
        <form onSubmit={agregarColaborador}>
            <p className='fs-2 mb-0'>Nombre del colaborador</p>
            <div>
            <input type="text" name="nombre" id="nombre" placeholder='Ingresa el nombre del colaborador'
            onChange={ (e) => setNombre(e.target.value)}/>
            </div>
            <p className='fs-2 mb-0 mt-3'>Correo del colaborador</p>
            <div>
            <input type="email" name="email" id="email" placeholder='Ingresa el correo del colaborador'
            onChange={ (e) => setEmail(e.target.value)}/>
            </div>

        <button className='btn btn-dark mt-3'>
          Agregar Colaborador
          </button>  
        </form>
    </div>
  )
}

export default Formulario