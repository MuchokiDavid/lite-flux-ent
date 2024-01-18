import { Link } from "react-router-dom";
import '../CSS/Items.css'
const Items = ({products}) => 
{
    const productsMap=products.map(product =>
        {
            let{id, description, name, image, price}=product

            return(
                <Link key={id} to={`/${name}`}>
                    <div className="item-card">
                        <img src={image} alt={name} />
                        <h5>{description}</h5>
                        <p>Kshs. {price.toLocaleString()}</p>
                        <button className="btn btn-primary">Click to view</button>
                    </div>
                </Link>
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