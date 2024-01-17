import Links from './Data/Navbar links.json'
import { Link } from 'react-router-dom'

const Navbar = () => 
{
    const navLinks=Links.map(link =>
        {
            let {icon, title, path}=link
            return(
                <Link key={title} to={path} title={title} ><i className={icon}></i></Link>
            )
        })
    return ( 
        <>
            {navLinks}
        </>
     );
}
 
export default Navbar;