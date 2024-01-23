import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <input type="text" className={styles.input} />
      <TrackList />
      <button className={styles.button}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
