import { Link } from "react-router-dom";
import '../CSS/Items.css'
const Items = ({products, addToCart}) => 
{
    const productsMap=products.map(product => 
        {
            let {name, image, price}=product

            return(
                <div key={name} className="item-card">
                    <img src={image} alt={name}/>
                    <h5>{name}</h5>
                    <p>Price: Kshs. {price.toLocaleString()}</p>
                    <Link to={`/${name}`}>
                        <button className="btn btn-primary">Click to view</button>
                    </Link>
                    <button className="btn btn-success ms-5" onClick={()=>addToCart(name)}>Add to cart</button>
                </div>
            )

        })

    return ( 
        <>
            <div className="card-container mt-5">
                {productsMap}
            </div>
        </>
     );
}
 
export default Items;