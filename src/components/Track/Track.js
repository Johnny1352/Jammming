import React from "react";
import styles from "./Track.module.css";

function Track() {
  return (
    <div className={styles.Track}>
      <div className="left">
        <h3 className={styles.songName}>The Sun</h3>
        <span>Maroon 5 | Songs About Jane</span>
      </div>
      <div className="right">
        <button className={styles.trackButton}>+</button>
      </div>
    </div>
  );
}

export default Track;
