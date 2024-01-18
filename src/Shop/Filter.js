const Filter = ({handleSelectChange}) => 
{
    return ( 
        <>
            <div className="row g-3 mx-5 mt-1">
                <div className="col-md-6">
                    <label htmlFor="category" className="form-label">Sort by category</label>
                    <select name="category" id="category" className="form-select" onChange={handleSelectChange}>
                        <option value="">All</option>
                        <option value="Solar Panel">Solar Panel</option>
                        <option value="Electricals">Electricals</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="price" className="form-label">Sort by price</label>
                    <select name="price" id="price" className="form-select" onChange={handleSelectChange}>
                        <option value="">Default</option>
                        <option value="Highest">High to Low</option>
                        <option value="Lowest">Low to High</option>
                    </select>
                </div>
            </div>
        </>
     );
}
 
export default Filter;