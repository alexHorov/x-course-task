import React from "react";
import { Count } from "components/count/Count";
import formatPrice from "services/priceFormatter";
import notFountImage from "assets/imageNotFound.png";
import x from "assets/x.svg";
import "./style.scss";

function CartItem({
  product,
  deleteProduct,
  incQuantity,
  decQuantity,
  changeValue,
}) {
  const { image, price, title, id, count } = product;

  return (
    <section className="product" id={id}>
      <div className="product__img">
        <img src={image !== "" ? image : notFountImage} alt="David Flanagan" />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
          id={id}
          changeValue={changeValue}
        />
      </div>
      <div className="product__price">
        {formatPrice((price * count).toFixed(2))}
      </div>
      <div className="product__controls">
        <button
          type="button"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          <img src={x} alt="x" />
        </button>
      </div>
    </section>
  );
}

export { CartItem };
