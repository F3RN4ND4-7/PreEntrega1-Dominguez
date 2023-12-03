import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.scss';


const NavBar = () => {
  return (
    <header>
        <h1 className='m-3'>Ferztore</h1>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#seasonal">Seasonal</Nav.Link>
                <Nav.Link href="#clasicos">Clásicos</Nav.Link>
                <NavDropdown title="Todos los accesorios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Joyería
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bolsos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Personalizados
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <CartWidget/>
        </header>
    )
    }

export default NavBar