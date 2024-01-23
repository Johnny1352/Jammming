import React from "react";
import styles from "./Track.module.css";

function Track({ track }) {
  return (
    <div className={styles.Track}>
      <div className={styles.information}>
        <h3 className={styles.songName}>The Sun</h3>
        <p>Maroon 5 | Songs About Jane</p>
      </div>
      <button className={styles.trackButton}>+</button>
    </div>
  );
}

export default Track;
