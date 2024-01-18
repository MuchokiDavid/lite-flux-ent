/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Filter from "./Filter";
import Items from "./Items/Items";
import { useEffect, useState } from "react";

const Shop = ({Products}) => 
{
    const [quantity, setQuantity]= useState(1)
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
            <Filter handleSelectChange={handleSelectChange}/>
            <Items products={displayedProducts}/>
            <Outlet/>
        </>
     );
}
 
export default Shop;