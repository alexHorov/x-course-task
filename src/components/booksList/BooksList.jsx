import React from "react";
import PropTypes from "prop-types";
import { useUserInfo } from "hooks/useUserInfo";
import { Book } from "../bookItem/BookItem";
// import { CustomLink } from "../customLink/CustomLink";
import "./booksList.scss";

function BooksList(props) {
  const { filterValues, searchValue } = props;

  const { booksCatalog } = useUserInfo();

  const handleFilter = (items, filter) => {
    switch (filter) {
      case "All":
        return items;
      case "15":
        return items.filter((item) => item.price < 15);
      case "30":
        return items.filter((item) => item.price > 15 && item.price < 30);
      case "1000":
        return items.filter((item) => item.price > 30);
    }
  };

  const handleSearch = (items) => {
    const searchData = items.filter((item) => {
      if (searchValue === "") {
        return item;
      } else if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    });
    return handleFilter(searchData, filterValues);
  };

  return (
    <section className="booksCard__field">
      <div className="container">
        {handleSearch(booksCatalog).map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}

export { BooksList };

BooksList.propTypes = {
  searchValue: PropTypes.string,
  filterValues: PropTypes.string,
  booksCatalog: PropTypes.array,
};
