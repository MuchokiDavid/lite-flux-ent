import { Link } from "react-router-dom";

const Cart = () => 
{
    let cart=JSON.parse(localStorage.getItem("shopping-cart")) || []
    
    if(cart.length === 0)
    {
        return <p>Cart is empty!</p>
    }
    
    return (  
        <>
            <h1>Cart Page</h1>
            <ul>
                {cart.map((item, index)=>(
                    <li key={index}>Name: {item.name}- Quantity: {item.quantity}</li>
                ))}
            </ul>
            <Link to="/shop" className="btn btn-info">Continue shopping</Link>
        </>
    );
}
 
export default Cart;