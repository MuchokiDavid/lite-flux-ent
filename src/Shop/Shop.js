/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Filter from "./Filter";
import Items from "./Items/Items";
import { useEffect, useState } from "react";

const Shop = ({Products, Categories}) => 
{
    //State that keeps track of the items being displayed based on the category selected by the user
    const [displayedProducts, setDisplayedProducts]=useState(Products)

    //State that keeps track of the search parameters selected by the user
    const [productFilters, setProductFilters]=useState(
        {
            price: "",
            category: "",
        }
    )    

    //Function that handles change of the filter parameters
    const handleSelectChange= e =>setProductFilters(
            {
                ...productFilters,
                [e.target.id]: e.target.value
            })
    
    //Function that sets the products that will be displayed based on the product category
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

    //Running the function that updates the items being displayed once user changes the search parameters
    useEffect(()=>
    {
        categoryFilter()

    },[productFilters.category])
    
    return ( 
        <>
            <Filter handleSelectChange={handleSelectChange} categories={Categories}/>
            <Items products={displayedProducts}/>
            <Outlet/>
        </>
     );
}
 
export default Shop;