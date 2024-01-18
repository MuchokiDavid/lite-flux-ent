import Filter from "./Filter";
import Navbar from "./Navbar";
import { useState } from "react";
const Shop = () => 
{
    const [cartCount, setCartCount]=useState(0)
    return ( 
        <>
            <Navbar cartCount={cartCount}/>
            <Filter/>
        </>
     );
}
 
export default Shop;