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

    const addToCart= name =>
    {
        itemsInCart.map(item =>
            {

                if(item.name === name)
                {
                    alert("Item is already in the cart!")
                }
                else
                {
                    const cartItem={name, quantity}
                    const updatedCart=[...itemsInCart, cartItem]
                    setItemsInCart(updatedCart)
                    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
                    alert("Item added to cart!")
                }
            })
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
                <Route path="/cart" element={<Cart cartItems={itemsInCart} products={Products}/>}></Route>
                <Route path="*" element={<div>Page not found</div>}></Route>
            </Routes>
        </>
    );
}
 
export default App;