import { useNavigate, useParams } from "react-router-dom";
import ItemStyling from '../CSS/Item.module.css'

const Item = ({products, quantity, setQuantity, addToCart}) => 
{
    const {name}=useParams()
    const navigate=useNavigate()

    const product=products.find(item => item.name === name)
    let{description, image, price}=product
    return ( 
        <>
            <div className={ItemStyling.item}>
                <img src={image} alt={name} className={ItemStyling.itemImage}/>
                <div className={ItemStyling.itemText}>
                    <h2 className="fw-bolder text-uppercase fs-3">{name}</h2>
                    <p className="fw-bold fs-5">{description}</p>
                    <p>Kshs. {price.toLocaleString()}</p>
                    <input type="number" name="quantity" id="quantity" className="form-control" min={1} defaultValue={quantity} onChange={e => setQuantity(e.target.value)} required/>
                    <div className={ItemStyling.buttons}>
                        <button className="btn btn-primary" onClick={()=> addToCart(name)}>Add to cart</button>
                        <button className="btn btn-success">Buy now</button>
                    </div>
                    <button className="btn btn-info" style={{width: "100%",backgroundColor: "#005477", color: "white"}} onClick={()=> navigate(-1)}>Continue shopping</button>
                </div>
            </div>
        </>
     );
}
 
export default Item;