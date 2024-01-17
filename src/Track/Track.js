import React from "react";
import styles from "./Track.module.css";
import { AddOutline } from "react-ionicons";

function Track() {
  return (
    <div className={styles.Track}>
      <div className="left">
        <h3 className={styles.songName}>The Sun</h3>
        <span>Maroon 5 | Songs About Jane</span>
      </div>
      <div className="right">
        <button className={styles.trackButton}>
          <AddOutline color={"#00000"} height="25px" width="25px" />
        </button>
      </div>
    </div>
  );
}

export default Track;
