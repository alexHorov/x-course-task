import React, { useState, useEffect } from "react";
import { useUserInfo } from "hooks/useUserInfo";
// import { Count } from "components/count/Count";
import notFountImage from "assets/imageNotFound.png";
import countUp from "assets/count-up.svg";
import countDown from "assets/count-down.svg";
import "components/bookPage/bookPage.scss";

function BookPage({ book }) {
  const min = 1;
  const max = 42;
  const { setCartStore } = useUserInfo();
  const [quantity, setQuantity] = useState(min);
  const [order, setOrder] = useState({ ...book, count: quantity });
  const { id, author, price, image, title, description } = order;

  let storageProducts = JSON.parse(localStorage.getItem("orderCart")) || [];

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleValue = (e) => {
    console.log(+e.target.value);
    setQuantity(+e.target.value);
  };

  const addToCart = (e) => {
    e.preventDefault(e);
    if (storageProducts) {
      if (storageProducts.some((el) => el.id === order.id)) {
        let arrOrder = storageProducts.filter(
          (product) => product.id === order.id
        )[0];
        let index = storageProducts.indexOf(arrOrder);

        if (index !== -1) {
          storageProducts.splice(index, 1);
          storageProducts.push({ ...order });
        }
      } else {
        storageProducts.push({ ...order });
      }

      localStorage.setItem("orderCart", JSON.stringify(storageProducts));
      setCartStore(storageProducts);
    }
  };

  useEffect(() => {
    if (quantity <= min) {
      setQuantity(min);
    }
    if (quantity >= max) {
      setQuantity(max);
    }
    setOrder({ ...book, count: quantity });
  }, [quantity]);

  return (
    <div className="book__content">
      <div className="book__info">
        <div className="book__info-img">
          <img src={image !== "" ? image : notFountImage} alt={title} />
        </div>
        <div className="book__info-descr">
          <h2>{title}</h2>
          <p> Book author: {author}</p>
        </div>
        <div className="book__info-price">
          <div className="book__price-price">
            <h3>Price, $</h3>
            <p id="price">{price}</p>
          </div>
          <div className="book__info-count">
            <h3>Count</h3>
            <div className="count">
              <div className="count__box">
                <input
                  type="number"
                  className="count__input"
                  min={min}
                  max={max}
                  value={quantity}
                  data-testId="counter"
                  onChange={handleValue}
                />
              </div>
              <div className="count__controls">
                <button
                  type="button"
                  className="count__up"
                  data-testId="increment"
                  onClick={() => incQuantity()}
                >
                  <img src={countUp} alt="Increase" />
                </button>
                <button
                  type="button"
                  className="count__down"
                  data-testId="decrement"
                  onClick={(e) => decQuantity(e)}
                >
                  <img src={countDown} alt="Decrease" />
                </button>
              </div>
            </div>
          </div>
          <div className="book__price--total-price">
            <h3>Total price</h3>
            <p id="sum">{(price * quantity).toFixed(2)}</p>
          </div>
          <div className="cart-button">
            <button id={id} className="addToCart" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="book__info-text">
        <p>{description}</p>
      </div>
    </div>
  );
}

export { BookPage };
