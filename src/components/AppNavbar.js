import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function AppNavbar(options) {

   const cardProducts = useSelector((state) => state.actions);


  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Product
            </Link>
            <Link to="/Card" className="nav-link">
              Card
                {
                  cardProducts.length > 0 && <span style={{color: "red", fontWeight: "bold"}}>{-cardProducts.length}</span>
                }
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
