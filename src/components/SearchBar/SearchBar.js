import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <input className={styles.input} placeholder="Enter a Song Title" />
      <button className={styles.button}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
