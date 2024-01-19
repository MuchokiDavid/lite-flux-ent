import { Link } from "react-router-dom";

const Cart = ({cartItems}) => 
{
    if(cartItems.length === 0)
    {
        return (
            <>
                <p>Cart is empty!</p>
                <Link to="/shop" className="btn btn-info" style={{backgroundColor: "#005477", color: "white"}}>Shop now</Link>
            </>
        )
    }
    
    return (  
        <>
            <h1>Cart Page</h1>
            <ul>
                {cartItems.map((item, index)=>(
                    <li key={index}>Name: {item.name}- Quantity: {item.quantity}</li>
                ))}
            </ul>
            <Link to="/shop" className="btn btn-info" style={{backgroundColor: "#005477", color: "white"}}>Continue shopping</Link>
        </>
    );
}
 
export default Cart;