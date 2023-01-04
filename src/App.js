import React, { useState } from 'react'
import { BaseColaboradores } from './Datos/BaseColaboradores'
import Formulario from "./Componentes/Formulario";
import ListaColaboradores from "./Componentes/ListaColaboradores";
import Header from './Componentes/Header';

function App() {

  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores)
  const [valorDeLaCaja, setValorDeLaCaja] = useState('');

  return (
    <div className="App">
      <Header
      setValorDeLaCaja={setValorDeLaCaja}
      ></Header>
      <Formulario
      lstColaboradores={lstColaboradores}
      setLstColaboradores={setLstColaboradores}
      >
      </Formulario>
      <hr></hr>
      <ListaColaboradores
      valorDeLaCaja={valorDeLaCaja}
      lstColaboradores={lstColaboradores}>
      </ListaColaboradores>
    </div>
  );
}

export default App;
