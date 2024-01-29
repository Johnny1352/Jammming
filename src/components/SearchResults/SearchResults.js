import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      <h2 className={styles.h2}>Results</h2>
      <TrackList tracks={props.searchResults} addTrack={props.addTrack} />
    </div>
  );
}

export default SearchResults;
