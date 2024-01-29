import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const handleTermChange = (e) => {
    props.search(e.target.value);
  };
  return (
    <div className={styles.SearchBar}>
      <input
        className={styles.input}
        placeholder="Enter a Song Title"
        onChange={handleTermChange}
      />
    </div>
  );
}

export default SearchBar;
