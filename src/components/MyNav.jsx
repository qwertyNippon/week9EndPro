import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav() {
  return (
    <Navbar expand="lg" className="fixed-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/myhome">Ecom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/myhome">Home</Nav.Link>
            <Nav.Link href="/myshop">Shop</Nav.Link>
            <Nav.Link href="/mycart">Cart</Nav.Link>
            <NavDropdown title="More..." id="basic-nav-dropdown">
              <NavDropdown.Item href="/Buy-again">Buy again</NavDropdown.Item>
              <NavDropdown.Item href="/Favs">
                Favorites
              </NavDropdown.Item>
              <NavDropdown.Item href="/see-others">See what others bought</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Log-Out">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;