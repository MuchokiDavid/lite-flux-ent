/* eslint-disable react-hooks/exhaustive-deps */
import Filter from "./Filter";
import Items from "./Items/Items";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Products from './Data/Items.json'

const Shop = () => 
{
    const [cartCount, setCartCount]=useState(0)
    const [displayedProducts, setDisplayedProducts]=useState(Products)
    const [productFilters, setProductFilters]=useState(
        {
            price: "",
            category: "",
        }
    )    
    const handleSelectChange= e =>setProductFilters(
            {
                ...productFilters,
                [e.target.id]: e.target.value
            })
    
    const categoryFilter = () =>
    {
        if(productFilters.category === "")
        {
            setDisplayedProducts(Products)
        }
        else
        {
           setDisplayedProducts(Products.filter(product=> product.category === productFilters.category))
        }
    }

    useEffect(()=>
    {
        categoryFilter()

    },[productFilters.category])
    
    return ( 
        <>
            <Navbar cartCount={cartCount}/>
            <Filter handleSelectChange={handleSelectChange}/>
            <Items products={displayedProducts}/>
        </>
     );
}
 
export default Shop;