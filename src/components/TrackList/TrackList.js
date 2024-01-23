import React from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList(props) {
  return (
    <div className={styles.TrackList}>
      <Track />
    </div>
  );
}

export default TrackList;
