import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import BookCard from "../BookCard/BookCard";

import styles from "./Content.module.scss";

const Content = () => {
  const books = useSelector((state: State) => state.books.storage);
  const totalItems = useSelector((state: State) => state.books.totalItems);
  return (
    <div className={styles.content}>
      <span className={styles.count}>Count {totalItems}</span>
      <div className={styles.wrapper}>
        {Object.values(books).map(({ id, volumeInfo }) => {
          return (
            <BookCard
              key={id}
              cat={volumeInfo.categories}
              title={volumeInfo.title}
              author={volumeInfo.authors}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
