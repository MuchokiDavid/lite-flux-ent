import { Link } from "react-router-dom";
import './CSS/Cart.css'

const Cart = ({cartItems, products, setItemsInCart}) => 
{
    console.log(setItemsInCart)
    const removeItem= name =>
    {
        console.log(name)
        const remainingItems=cartItems.filter(item => item.name !== name)
        console.log(remainingItems)
        setItemsInCart(remainingItems)
        localStorage.setItem("shopping-cart", JSON.stringify(remainingItems))
    }
    return (  
        <div className="cart">
            <div className="cart-header">
                <h1 className="text-uppercase">your cart</h1>
                <Link to="/shop" className="btn btn-info" style={{backgroundColor: "#005477", color: "white"}}>Continue shopping</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length === 0 ? 
                    
                    <tr>
                        <td colSpan={5} className="fw-bold">No items in cart!</td>
                    </tr>
                    : 
                    cartItems.map(item=>
                    {
                        let {name, quantity}=item
                        const cartProduct=products.find(product => product.name === item.name)
                        console.log(cartProduct)
                        let {image, description, price}=cartProduct

                        return(
                            <>
                                <tr key={name}>
                                    <td data-label="Product Image"><img src={image} alt={description}/></td>
                                    <td data-label="Product Description">{description}</td>
                                    <td data-label="Quantity">{quantity}</td>
                                    <td data-label="Unit Price">Kshs. {price.toLocaleString()}</td>
                                    <td data-label="Total Price">Kshs. {(quantity * price).toLocaleString()}</td>
                                    <td data-label="Remove Item"><i className="fa fa-trash-o" onClick={()=>removeItem(name)}></i></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-dark float-end mx-4">Checkout</button>
        </div>
    );
}
 
export default Cart;