import React from "react";
import { Input } from "antd";
import Filters from "./Filters/Filters";
import Sort from "./Sort/Sort";

import "antd/dist/antd.css";
import styles from "./SearchArea.module.scss";

const SearchArea = () => {
  const onSearch = (value: any) => console.log(value);

  return (
    <form className={styles.container}>
      <Input.Search
        className={styles.search}
        placeholder="Search"
        onSearch={onSearch}
        size="large"
        enterButton
      />
      <div className={styles.searchSettings}>
        <div className={styles.filters}>
          <Filters />
        </div>
        <div className={styles.sort}>
          <Sort />
        </div>
      </div>
    </form>
  );
};

export default SearchArea;
