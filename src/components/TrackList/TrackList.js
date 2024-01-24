import React from "react";
import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList(props) {
  return (
    <div className={styles.TrackList}>
      {props.tracks.map((track) => {
        return <Track key={track.id} track={track} />;
      })}
    </div>
  );
}

export default TrackList;
