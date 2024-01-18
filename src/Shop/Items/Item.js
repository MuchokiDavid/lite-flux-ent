import { useNavigate, useParams } from "react-router-dom";
import '../CSS/Item.css'
const Item = ({products}) => 
{
    const {name}=useParams()
    const navigate=useNavigate()

    const product=products.find(item => item.name === name)

    let{description, image, price}=product

    return (  
        <>
            <h1>{name}</h1>
            <div className="item">
                <img src={image} alt={name} />
                <div className="item-text">
                    <h2 className="fw-bolder text-uppercase fs-3">{name}</h2>
                    <p className="fw-bold fs-5">{description}</p>
                    <p>Kshs. {price.toLocaleString()}</p>
                    <input type="number" name="quantity" id="quantity" className="form-control" min={1} defaultValue={1}/>
                    <div className="buttons">
                        <button className="btn btn-primary">Add to cart</button>
                        <button className="btn btn-success">Buy now</button>
                    </div>
                    <button className="btn btn-info" onClick={()=> navigate(-1)}>Continue shopping</button>
                </div>
            </div>
        </>
    );
}
 
export default Item;