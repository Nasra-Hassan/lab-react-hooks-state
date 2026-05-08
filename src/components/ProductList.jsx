import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>

          <button
            data-testid={`product-${product.id}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;