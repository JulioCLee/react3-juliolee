import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Nav, Navbar} from 'react-bootstrap';


const Header = ({setValorDeLaCaja}) => {

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='fs-2'>Buscador de Colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll>
          </Nav>
          <Form className="d-flex"
          style={{ width: '350px' }}>
            <Form.Control
             type="search"
             placeholder="Buscar Colaborador"
             className="w-100"
             aria-label="Search"
             onChange={(e) => setValorDeLaCaja(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header