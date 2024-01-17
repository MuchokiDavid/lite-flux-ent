import Navbar from "./Navbar";
import { useState } from "react";
const Shop = () => 
{
    const [cartCount, setCartCount]=useState(0)
    return ( 
        <>
            <Navbar cartCount={cartCount}/>
        </>
     );
}
 
export default Shop;