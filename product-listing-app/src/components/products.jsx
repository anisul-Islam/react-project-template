import "./productsStyle.css";

export default function Products(prop) {
  const { products } = prop;
  // console.log(products)
  const productItems = products.map((product) => {
    const { id, title, price, description, image, rating } = product;
    return (
      <div key={id} className="product">
        <div className="imageDiv">
          <img className="productImage" src={image} />
        </div>
        <br />
        <h2 className="title">{title}</h2>
        <br />
        <p className="price">Price: ${price} </p>
        <p className="rating">
          Rating: {rating.rate}/{5}
        </p>
        <br />
        <p className="description">
          <strong>Description:</strong> {description}
        </p>
        <br />
        <button className="addTocartButton">Add to cart</button>
      </div>
    );
  });

  return <>{productItems}</>;
}
