/* eslint-disable array-callback-return */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Importing components
import Home from './Main Page/Home'
import Shop from "./Shop/Shop";
import Item from "./Shop/Items/Item";
import Cart from "./Shop/Cart";
import Account from "./Shop/Account/Account";

//Importing data files
import Products from './Shop/Data/Products.json'
import Layout from "./Shop/Layout";

const App = () => 
{
    //State that keeps track of the number of items in the cart
    const [cartCount, setCartCount]=useState(0)

    //State that keeps track of the quantity of items a user wants to add to cart
    const [quantity, setQuantity]=useState(1)

    //State that keeps track of the items in the local storage
    const [itemsInCart, setItemsInCart]=useState(JSON.parse(localStorage.getItem("shopping-cart")) || [])

    //Function to add new item to cart-> avoids repetition of code in the addToCart() method below
    const newCartItem= (name, quantity) =>
    {
        const newItem={name, quantity}
        const updatedCart=[...itemsInCart, newItem]
        setItemsInCart(updatedCart)
        localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
        toast.success("Item added to cart")
    }

    //Function to add items to cart
    const addToCart= name =>
    {
        if(itemsInCart)
        {
            //Checking if the cart is empty. If it is, add the item to cart
            if(itemsInCart.length === 0)
            {
                newCartItem(name, quantity)
            }

            //If the cart is not empty, check if the item already exists in the cart
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

                isItemInCart ? toast.error("Item already added to cart") : newCartItem(name, quantity) 

            }
            
        }
    }

    //Updating the cart count once the itemsInCart state changes
    useEffect(()=>
    {
        setCartCount(itemsInCart.length)
    },[itemsInCart])

    const router=createBrowserRouter(
        [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/",
                element: <Layout cartCount={cartCount}/>,
                children:
                [
                    {
                        path: "shop",
                        element: <Shop Products={Products} />
                    },
                    {
                        path: ":name",
                        element: <Item products={Products} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart}/>
                    },
                    {
                        path: "cart",
                        element: <Cart cartItems={itemsInCart} setItemsInCart={setItemsInCart} products={Products}/>
                    },
                    {
                        path: "account",
                        element: <Account/>
                    }
                ]
            },
            {
                path: "*",
                element: <div>Page Not found</div>
            }
        ]
    )
    return (  
        <>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} theme="colored"/>        
            <RouterProvider router={router}/>    
        </>
    );
}
 
export default App;