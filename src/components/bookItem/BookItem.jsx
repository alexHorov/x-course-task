import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { SingleBook } from "pages/singleBook/SingleBook";
import notFountImage from "assets/imageNotFound.png";
import "./bookItem.scss";

function Book(props) {
  const { id, author, price, image, title } = props;
  const cutTitle = (str, num) => {
    return str.slice(0, num) + "...";
  };
  return (
    <div className="booksCard__item" id={id}>
      <img src={image !== "" ? image : notFountImage} alt={title} />
      <h3 className="booksCard__item-title">{cutTitle(title, 24)}</h3>
      <div className="booksCard__item-author">
        Author: <span>{author}</span>
      </div>
      <div className="booksCard__item-price">
        <div className="booksCard__item-total">
          Prise: <span>{price}$</span>
        </div>
        <Link key={id} to={`${id}`}>
          <button to="singleBook" data-target={id} className="viewBook">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}

export { Book };

Book.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
