function ProductCardWithDestructuring({ name, price, rating }) {
  return (
    <div>
      <h1>Product Card With Destructuring</h1>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
}

export default ProductCardWithDestructuring;