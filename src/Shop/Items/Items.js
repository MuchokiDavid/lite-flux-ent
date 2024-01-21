import { Link } from "react-router-dom";
import '../CSS/Items.css'
const Items = ({products}) => 
{
    const productsMap=products.map(product => 
        {
            let {name, image, price}=product

            return(
                <Link key={name} to={`/${name}`}>
                    <div className="item-card">
                        <img src={image} alt={name}/>
                        <h5>{name}</h5>
                        <p>Price: Kshs. {price.toLocaleString()}</p>
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