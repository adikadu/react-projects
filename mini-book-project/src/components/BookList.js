import React from "react";
import classes from "./BookList.module.css";
import Book from "./Book";

const booksList = [
  {
    id: 1,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love you to the moon and back",
    author: "Amelia Hepworth",
    authorLink:
      "https://www.amazon.in/Amelia-Hepworth/e/B00O6HYL7G/ref=dp_byline_cont_book_1",
  },
];

const BookList = () => {
  return (
    <ul className={classes["book-list"]}>
      {booksList.map((book) => (
        <li key={book.id} className={classes["book-item"]}>
          <Book {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
