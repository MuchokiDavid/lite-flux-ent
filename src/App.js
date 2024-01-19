/* eslint-disable array-callback-return */
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if(itemsInCart)
        {
            if(itemsInCart.length > 0)
            {
                itemsInCart.map(item =>
                    {
                        if(item.name === name)
                        {
                            toast.warn("Item is already in the cart",
                            {
                                position: "top-right",
                                autoClose: 2500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                            })
                        }
                        else
                        {
                            const cartItem={name, quantity}
                            const updatedCart=[...itemsInCart, cartItem]
                            setItemsInCart(updatedCart)
                            localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
                            toast.success("Item added to cart!",
                            {
                                position: "top-right",
                                autoClose: 2500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                            })
                        }
                    })
            }
            else
            {
                const cartItem={name, quantity}
                const updatedCart=[...itemsInCart, cartItem]
                setItemsInCart(updatedCart)
                localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
                alert("Item added to cart!")
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
            <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} theme="colored"/>
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