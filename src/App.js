import { Routes, Route } from "react-router-dom";
import Navbar from "./Shop/Navbar";
import { useRef, useState } from "react";
import Shop from "./Shop/Shop";
import Products from './Shop/Data/Items.json'
import Item from "./Shop/Items/Item";
import Cart from "./Shop/Cart";
const App = () => 
{
    const cartCount=useRef(0)
    const [quantity, setQuantity]=useState(1)

    const addToCart= name =>
    {
        const cartItem={name, quantity}

        const itemsInCart=JSON.parse(localStorage.getItem("shopping-cart")) || []
        const updatedCart=[...itemsInCart, cartItem]
        localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
        cartCount.current+=1
        alert("Item added to cart!")
    }
    return (  
        <>
            <Navbar cartCount={cartCount.current}/>
            <Routes>
                <Route path="/shop" element={<Shop Products={Products}/>}></Route>
                <Route path="/:name" element={<Item products={Products} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart}/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="*" element={<div>Page not found</div>}></Route>
            </Routes>
        </>
    );
}
 
export default App;