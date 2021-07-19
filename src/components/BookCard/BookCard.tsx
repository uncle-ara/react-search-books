import React from "react";

import styles from "./BookCard.module.scss";

export type Props = {
  id?: number;
  cat: string[];
  title: string;
  author: string[];
};

const BookCard = ({ id, cat, title, author }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <figure>
          <img
            className={styles.image}
            src="http://books.google.com/books/content?id=UNLkDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            alt="Фотография книги"
          />
        </figure>
        <div className={styles.info}>
          <p className={styles.categories}>{cat}</p>
          <h4 className={styles.title}>{title}</h4>
          <h5 className={styles.author}>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
