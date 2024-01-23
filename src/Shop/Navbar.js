import Links from './Data/Navbar links.json'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../Main Page/Images/logo.png'
import '../Navbar.css'

const ShopNavbar = ({cartCount}) => 
{
    const navLinks=Links.map(link =>
        {
            let {icon, title, path}=link

            if (path === "/cart")
            {
                return(
                    <Nav.Link>
                        <Link key={title} to={path} title={title}>
                            <i className={icon}><span><sup>{cartCount}</sup></span></i>
                        </Link>
                    </Nav.Link>
                )
            }
            else
            {
                return(
                    <Nav.Link>
                        <Link key={title} to={path} title={title} ><i className={icon}></i></Link>
                    </Nav.Link>
                )
            }
        })
    return ( 
        <>
            <Navbar expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} width="75" height="45"  className="d-inline-block align-top" alt="Brand" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navLinks}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default ShopNavbar;