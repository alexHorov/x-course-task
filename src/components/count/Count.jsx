import React from "react";
import countUp from "assets/count-up.svg";
import countDown from "assets/count-down.svg";
import "./style.scss";

export function Count({ count, incQuantity, decQuantity, id, changeValue }) {
  return (
    <div className="count">
      <div className="count__box">
        <input
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
          type="number"
          className="count__input"
          min="1"
          max="42"
          value={count}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            incQuantity(id);
          }}
        >
          <img src={countUp} alt="Increase" />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => {
            decQuantity(id);
          }}
        >
          <img src={countDown} alt="Decrease" />
        </button>
      </div>
    </div>
  );
}
