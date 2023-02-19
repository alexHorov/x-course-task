import React, { useState } from "react";
// import { getAllBooks } from 'api.js';
import { useUserInfo } from "hooks/useUserInfo";
import { Spinner } from "components/spinner/Spinner";
import { BooksList } from "components/booksList/BooksList";

import "pages/booksCatalog/booksCatalog.scss";

function BooksCatalog() {
  const { booksCatalog } = useUserInfo();
  const [filterValues, setFilterValues] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const price = "price";

  return (
    <main className="booksCard">
      <section className="input__field">
        <form id="searchSection">
          <div className="search">
            <input
              type="search"
              id="searchTerm"
              placeholder="Search by book name"
              value={searchValue}
              onChange={handleSearch}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>

        <form className="select-form">
          <select
            id="select-price"
            value={filterValues}
            onChange={(e) => setFilterValues(e.target.value)}
          >
            <option value="All">All</option>
            <option value="15">less than 15$</option>
            <option value="30">less than 30$</option>
            <option value="1000">more than 30$</option>
          </select>
        </form>
      </section>

      {/* <section className="input__field">
          <form id="searchSection">
            <div className="search">
              <input
                type="search"
                id="searchTerm"
                placeholder="Search by book name"
                value={searchValue}
                onChange={handleSearch}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
  
          <form className="select-form">
            <select
              id="select-price"
              value={filterValues}
              onChange={(e) => setFilterValues(e.target.value)}
            >
              <option value="All">All</option>
              <option value="15">less than 15$</option>
              <option value="30">less than 30$</option>
              <option value="1000">more than 30$</option>
            </select>
          </form>
        </section> */}

      {!booksCatalog.length ? (
        <Spinner />
      ) : (
        <BooksList searchValue={searchValue} filterValues={filterValues} />
      )}
    </main>
  );
}

export { BooksCatalog };
