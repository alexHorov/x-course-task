import React from "react";
import "./style.scss";

export const CartHeader = () => {
  return (
    <header className="cart-header">
      <div className="cart-header__title">Name</div>
      <div className="cart-header__count">Quantity</div>
      <div className="cart-header__cost">Cost</div>
    </header>
  );
};
