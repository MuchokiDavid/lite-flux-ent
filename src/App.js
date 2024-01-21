/* eslint-disable array-callback-return */
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Shop/Navbar";
import Shop from "./Shop/Shop";
import Products from './Shop/Data/Items.json'
import Item from "./Shop/Items/Item";
import Cart from "./Shop/Cart";
import Account from "./Account/Account";

const App = () => 
{
    const [cartCount, setCartCount]=useState(0)
    const [quantity, setQuantity]=useState(1)
    const [itemsInCart, setItemsInCart]=useState(JSON.parse(localStorage.getItem("shopping-cart")) || [])

    const newCartItem= (name, quantity) =>
    {
        const newItem={name, quantity}
        const updatedCart=[...itemsInCart, newItem]
        setItemsInCart(updatedCart)
        localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
        alert("Item added to cart")
    }
    const addToCart= name =>
    {
        if(itemsInCart)
        {
            if(itemsInCart.length === 0)
            {
                newCartItem(name, quantity)
            }
            else if(itemsInCart.length >= 1)
            {
                let isItemInCart=false

                itemsInCart.forEach(item => 
                {
                    if(item.name === name)
                    {
                        isItemInCart=true
                    }
                    else
                    {
                        isItemInCart=false
                    }
                });

                isItemInCart ? alert("Item already added to cart") : newCartItem(name, quantity) 

            }
            
        }
    }

    useEffect(()=>
    {
        setCartCount(itemsInCart.length)
    },[itemsInCart])

    return (  
        <>
            <Navbar cartCount={cartCount}/>
            <Routes>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/shop" element={<Shop Products={Products}/>}></Route>
                <Route path="/:name" element={<Item products={Products} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart}/>}></Route>
                <Route path="/cart" element={<Cart cartItems={itemsInCart} setItemsInCart={setItemsInCart} products={Products}/>}></Route>
                <Route path="*" element={<div>Page not found</div>}></Route>
            </Routes>
        </>
    );
}
 
export default App;