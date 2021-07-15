import React from "react";
import SearchArea from "./components/SearchArea/SearchArea";
import Content from "./components/Content/Content";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.base}>
      <header className={styles.header}>
        <SearchArea />
      </header>

      <main className={styles.content}>
        <Content />
      </main>
    </div>
  );
};

export default App;
