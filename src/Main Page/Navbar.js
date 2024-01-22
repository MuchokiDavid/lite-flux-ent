import './CSS/Navbar.css'
const Navbar = () => 
{
    return ( 
        <>
            <nav className="home-navbar">
                <a href="/#home">About Us</a>
                <a href='/#services'>Our Services</a>
                <a href="/#footer">Contact Us</a>
                <a href="/shop">Shop</a>
            </nav>
        </>
     );
}
 
export default Navbar;