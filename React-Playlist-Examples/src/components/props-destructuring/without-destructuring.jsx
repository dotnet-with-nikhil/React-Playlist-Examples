function ProductCardWithoutDestructuring(props) {

    const {name, price, rating, city} = props;
  return (
    <div>
      <h1>Product Card Without Destructuring</h1>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Rating: ⭐ {rating}</p>
      <p>City : {city}</p>
    </div>
  );
}

export default ProductCardWithoutDestructuring;

