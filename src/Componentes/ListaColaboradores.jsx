import 'bootstrap/dist/css/bootstrap.min.css';


const ListaColaboradores = ({lstColaboradores,valorDeLaCaja}) => {

  return (
    <div className='m-3'>
        <h1>Lista de colaboradores</h1>
        <ul>
            {lstColaboradores.filter((e) => e.nombre.toLowerCase().includes(valorDeLaCaja.toLowerCase()))
            .map( (c) => <li className='fs-5' key={c.id}>{c.nombre} - {c.correo}</li>)}
        </ul>
    </div>
  )
}

export default ListaColaboradores