import React from "react";
import BookCard from "../BookCard/BookCard";

import styles from "./Content.module.scss";

const mock = [
  {
    id: 1,
    cat: "Computers",
    title: "Серфинг по интренету",
    author: "Авсенин Андрей",
  },
  {
    id: 2,
    cat: "Biograthi",
    title: "Сантехника для чайников",
    author: "Anton",
  },
  {
    id: 3,
    cat: "Art",
    title: "Как собрать конструктор",
    author: "Авсенин Андрей",
  },
  {
    id: 4,
    cat: "Art",
    title: "Node.js Разработка серверных веб-приложений на JavaScript",
    author: "Николай Романов",
  },
  {
    id: 5,
    cat: "Art",
    title: "Node.js Разработка серверных веб-приложений на JavaScript",
    author: "Николай Романов",
  },
  {
    id: 6,
    cat: "Art",
    title: "Node.js Разработка серверных веб-приложений на JavaScript",
    author: "Николай Романов",
  },
  {
    id: 7,
    cat: "Art",
    title: "Node.js Разработка серверных веб-приложений на JavaScript",
    author: "Николай Романов",
  },
];

const Content = () => {
  return (
    <div className={styles.content}>
      <h4 className={styles.count}>Count</h4>
      <div className={styles.wrapper}>
        {mock.map((item) => {
          return (
            <BookCard
              key={item.id}
              cat={item.cat}
              title={item.title}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
