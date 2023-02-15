import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CartHeader } from "components/cartHeader/CartHeader";
import { CartItem } from "components/cartItem/CartItem";
import { CartFooter } from "components/cartFooter/CartFooter";
import { useUserInfo } from "hooks/useUserInfo";
// import { Spinner } from "components/spinner/Spinner";
import cartEmpty from "assets/cartBig.svg";
import "./_section-cart.scss";

function Cart() {
  const { cartStore, setCartStore } = useUserInfo();
  const [disabled, setDisabled] = useState(true);

  // console.log(cartStore);
  // const [cartStore, setCartOrder] = useState(
  //   JSON.parse(localStorage.getItem("orderCart")) || []
  // );
  const [total, setTotal] = useState({
    price: cartStore.reduce(
      (prevValue, currentValue) =>
        prevValue + currentValue.price * currentValue.count,
      0
    ),
    count: cartStore.reduce(
      (prevValue, currentValue) => prevValue + currentValue.count,
      0
    ),
  });

  const deleteProduct = (id) => {
    setCartStore((cartStore) =>
      cartStore.filter((product) => product.id !== id)
    );
  };

  const incQuantity = (id) => {
    setCartStore((cartStore) => {
      return cartStore.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1 <= 42 ? product.count + 1 : 42,
          };
        }
        return product;
      });
    });
  };

  const decQuantity = (id) => {
    setCartStore((cartStore) => {
      return cartStore.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? product.count - 1 : 1,
          };
        }
        return product;
      });
    });
  };

  const handlePurchase = () => {
    localStorage.removeItem("orderCart");
    setCartStore([]);
    setDisabled(true);
    console.log("Purchase");
  };

  const changeValue = (id, value) => {
    setCartStore((cartStore) => {
      return cartStore.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
          };
        }
        return product;
      });
    });
  };

  localStorage.setItem("orderCart", JSON.stringify(cartStore));

  const products = cartStore.map((product) => {
    return (
      <CartItem
        key={product.id}
        product={product}
        deleteProduct={deleteProduct}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
        changeValue={changeValue}
      />
    );
  });

  useEffect(() => {
    setTotal({
      price: cartStore.reduce(
        (prevValue, currentValue) =>
          prevValue + currentValue.price * currentValue.count,
        0
      ),
      count: cartStore.reduce(
        (prevValue, currentValue) => prevValue + currentValue.count,
        0
      ),
    });
    if (cartStore.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [cartStore]);

  return (
    <section className="section-cart">
      <header className="section-cart__header">
        <div className="cart-container">
          <div className="cart-button">
            <button
              className="addToCart"
              disabled={disabled}
              onClick={() => {
                handlePurchase();
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      </header>
      <div className="section-cart__body">
        <div className="cart-container">
          {!!cartStore.length ? (
            <section className="cart">
              <CartHeader />
              {products}
              <CartFooter total={total} />
            </section>
          ) : (
            <div className="section-cart__empty">
              <img src={cartEmpty} alt="cart" />
              <h3>Cart empty...</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export { Cart };
Cart.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
};
