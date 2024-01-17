import React from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList() {
  return (
    <ul className={styles.TrackList}>
      <li className={styles.li}>
        <Track />
      </li>
      <li className={styles.li}>
        <Track />
      </li>
    </ul>
  );
}

export default TrackList;
