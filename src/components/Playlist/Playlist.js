import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist(props) {
  const handleNameChange = (e) => {
    props.updatePlaylistName(e.target.value);
  };

  return (
    <div className={styles.Playlist}>
      <input
        className={styles.input}
        onChange={handleNameChange}
        value={props.playlistName}
      />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        removeTrack={props.removeTrack}
      />
      <button className={styles.button} onClick={props.savePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
