function OperatorListDynamicRendering({products}){

    return (
         <div>

            <h1>Product List</h1>

            {/* List + Map() + Keys */}
            
            {products.map((product) => (

                <div key = {product.id}> 

                    <h2>{product.name}</h2>
                    <p>Price : {product.price}</p>

                    {/* && Operator */}

                    {product.featured && (
                        <p>⭐ Featured Product</p>
                    )}

                    {/* && Operator */}
                    
                    {product.inStock && (
                        <p>🟢 In Stock</p>
                    )}

                    {/* && Operator */}
                    {!product.inStock && (
                        <p>🔴 Out of Stock</p>
                    )}    

                </div>
            ))}
            
        </div>
    );


}

export default OperatorListDynamicRendering;