import React from "react";
import styles from "./Track.module.css";

function Track({ track, addTrack, isRemoval, removeTrack }) {
  const handleAdd = (e) => {
    e.preventDefault();
    addTrack(track);
  };
  const handleRemove = (e) => {
    e.preventDefault();
    removeTrack(track);
  };

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className={styles.trackButton} onClick={handleRemove}>
          -
        </button>
      );
    }
    return (
      <button className={styles.trackButton} onClick={handleAdd}>
        +
      </button>
    );
  };
  return (
    <div className={styles.Track}>
      <div className={styles.information}>
        <h3 className={styles.songName}>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
