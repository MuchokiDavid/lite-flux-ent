import { Link } from "react-router-dom";
import './CSS/Cart.css'

const Cart = ({cartItems, products}) => 
{
    console.log(cartItems)
    console.log(products)
    
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
                   {cartItems.map(item=>
                    {
                        let {name, quantity}=item
                        const cartProduct=products.find(product => product.name === item.name)
                        console.log(cartProduct)
                        let {image, description, price}=cartProduct

                        return(
                            <>
                                <tr key={name}>
                                    <td><img src={image} alt={description}/></td>
                                    <td>{description}</td>
                                    <td>{quantity}</td>
                                    <td>Kshs. {price.toLocaleString()}</td>
                                    <td>Kshs. {(quantity * price).toLocaleString()}</td>
                                    <td><i className="fa fa-trash-o"></i></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default Cart;