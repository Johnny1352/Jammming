import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist() {
  return (
    <form>
      <div className={styles.Playlist}>
        <input type="text" className={styles.input} />
        <TrackList />
        <button type="submit">SAVE TO SPOTIFY</button>
      </div>
    </form>
  );
}

export default Playlist;
