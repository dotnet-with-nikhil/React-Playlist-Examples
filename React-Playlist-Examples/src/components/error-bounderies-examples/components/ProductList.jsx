import {useEffect, useState} from "react";
import Spinner from "./Spinner";

export default function ProductList() {

    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);


    async function fetchProducts(){

        try{
            setLoading(true);
            setError("");

            const response = await fetch("https://fakestoreapi.com/products");

            if(!response.ok){
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            setProducts(data);

        }
        catch (error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    if(loading){
        return <Spinner />
    }

    if(error){
        return(

            <div>
                <h2>{error}</h2>
                <button onClick={fetchProducts}>Retry</button>
            </div>

        )
    }

    return(

        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <hr/>
                </div>
                ))}
        </div>
    )
}
