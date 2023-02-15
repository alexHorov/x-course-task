import React from "react";
import formatPrice from "services/priceFormatter";
import "./style.scss";
export const CartFooter = ({ total }) => {
  const { price, count } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count"> {count} qty</div>
      <div className="cart-footer__price">
        Prise, $ {formatPrice(price.toFixed(2))}
      </div>
    </footer>
  );
};
