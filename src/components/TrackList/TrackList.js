import React from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList() {
  return (
    <div className={styles.TrackList}>
      <Track />
      <Track />
    </div>
  );
}

export default TrackList;
