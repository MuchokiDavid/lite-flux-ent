import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({cartCount}) => 
{
    return ( 
        <>
            <Navbar cartCount={cartCount}/>
            <Outlet/>
        </>
     );
}
 
export default Layout;