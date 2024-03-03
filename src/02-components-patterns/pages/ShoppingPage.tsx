import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({ reset, isMaxCountReached, increaseBy, counter }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={ reset }>reset</button>
              {
               counter > 1 && (<button onClick={() => increaseBy(-2)}> -2 </button>) 
              }
              {
                !isMaxCountReached && (<button onClick={() => increaseBy(2)}> +2 </button>) 
              }
            </>
          )
        }
      </ProductCard>
    </div>
  );
};
