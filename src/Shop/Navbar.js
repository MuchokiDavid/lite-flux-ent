import Links from './Data/Navbar links.json'
import { Link } from 'react-router-dom'
import './CSS/Navbar.css'
const Navbar = ({cartCount}) => 
{
    const navLinks=Links.map(link =>
        {
            let {icon, title, path}=link

            if (path === "/cart")
            {
                return(
                    <Link key={title} to={path} title={title}>
                        <i className={icon}><span><sup>{cartCount}</sup></span></i>
                    </Link>
                )
            }
            else
            {
                return(
                    <Link key={title} to={path} title={title} ><i className={icon}></i></Link>
                )
            }
        })
    return ( 
        <>
            <nav>
                {navLinks}
            </nav>
        </>
     );
}
 
export default Navbar;