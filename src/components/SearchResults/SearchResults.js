import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

function SearchResults() {
  return (
    <div className={styles.SearchResults}>
      <h2 className={styles.h2}>Results</h2>
      <TrackList />
    </div>
  );
}

export default SearchResults;
