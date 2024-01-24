import React from "react";
import styles from "./Track.module.css";

function Track({ track }) {
  return (
    <div className={styles.Track}>
      <div className={styles.information}>
        <h3 className={styles.songName}>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button className={styles.trackButton}>+</button>
    </div>
  );
}

export default Track;
