// import { useEffect, useState } from 'react';
import React from "react";
import { useParams } from "react-router-dom";
import { useUserInfo } from "hooks/useUserInfo";
import { BookPage } from "components/bookPage/BookPage";
import "pages/singleBook/singleBook.scss";

function SingleBook() {
  const { booksCatalog } = useUserInfo();

  const { idBook } = useParams();

  return (
    <main className="book">
      {booksCatalog
        .filter((item) => item.id === +idBook)
        .map((book) => (
          <BookPage key={book.id} book={book} />
        ))}
    </main>
  );
}

export { SingleBook };
