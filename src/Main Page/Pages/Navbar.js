import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Images/logo.png'

const HomeNav = () => 
{
    return ( 
        <>
            <Navbar expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} width="70" height="40"  className="d-inline-block align-top" alt="Brand" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">About Us</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contacts">Contact Us</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default HomeNav;