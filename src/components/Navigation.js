import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div style={{backgroundColor:"#298F85"}}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">Oneflix</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;

//<Link className='nav-link' to="/universities">Universities</Link>