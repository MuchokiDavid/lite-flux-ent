const Filter = () => 
{
    return ( 
        <>
            <div className="row g-3 mx-5 mt-1">
                <div className="col-md-6">
                    <select name="price" id="price" className="form-select">
                        <option value="">Sort by price</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Low to High">Low to High</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <select name="price" id="price" className="form-select">
                        <option value="">Sort by category</option>
                        <option value="Solar Panels">Solar Panels</option>
                        <option value="Electricals">Electricals</option>
                    </select>
                </div>
            </div>
        </>
     );
}
 
export default Filter;