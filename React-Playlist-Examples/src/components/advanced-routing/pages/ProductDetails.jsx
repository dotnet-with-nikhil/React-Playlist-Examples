import { useParams } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();

    return (
        <>
            <h1>Product Details Component</h1>
            <h3>Product ID : {id}</h3>
        </>
    );

}

export default ProductDetails;