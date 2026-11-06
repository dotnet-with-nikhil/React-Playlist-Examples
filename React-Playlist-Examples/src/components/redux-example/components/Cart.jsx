import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    
    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    useEffect(() => {
        console.log('Latest cart items:', cartItems);
    }, [cartItems]);

    return (
        <div>
            <h2>Cart</h2>
            <p>Items: {cartItems.length}</p>
            <p>Total: ₹{total}</p>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={`${item.id}-${index}`}>
                            {item.name} - ₹{item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Cart is empty</p>
            )}
        </div>

    );
}
export default Cart;
