import {useDispatch} from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

function Product(){

    const dispatch = useDispatch();

    const product = {
        id: 1,
        name: "Laptop",
        price: 90000,
    };

    const handleAdd = () => {
        dispatch(addToCart(product));
    }

    const handleRemove = () => {
        dispatch(removeFromCart(product));
    }

    return(
        <>
            <button onClick={handleAdd}>Add to Cart</button>
            <button onClick={handleRemove}>Remove Item</button>
        </>
    )


}
export default Product;