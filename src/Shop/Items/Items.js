import { Link } from "react-router-dom";

const Items = ({products}) => 
{
    const productsMap=products.map(product =>
        {
            let{id, description, name, image, price}=product

            return(
                <div key={id}>
                    <p>{description}</p>
                    <p>{name}</p>
                    <img src={image} alt={name}/>
                    <p>Kshs. {price}</p>
                    <Link to={`/${name}`}>View Item</Link>
                </div>
            )
        })
    return ( 
        <>
            <h1>Products Page</h1>
            {productsMap}
        </>
     );
}
 
export default Items;