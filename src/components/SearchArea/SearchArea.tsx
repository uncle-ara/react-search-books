import React from "react";
import { Input } from "antd";
import Filters from "./Filters/Filters";
import Sort from "./Sort/Sort";

import "antd/dist/antd.css";
import styles from "./SearchArea.module.scss";
import { useDispatch } from "react-redux";
import { requestBooks } from "../../actions/books";

const SearchArea = () => {
  const dispatch = useDispatch();
  // const onSearch = (value: any) => console.log(value);
  const handleClick = () => {
    dispatch(requestBooks());
  };

  return (
    <form className={styles.container}>
      <Input.Search
        className={styles.search}
        placeholder="Search"
        onSearch={handleClick}
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
