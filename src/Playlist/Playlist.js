import React from "react";
import TrackList from "../TrackList/TrackList";

function Playlist() {
  return (
    <form>
      <input type="text" />
      <TrackList />
      <button type="submit">SAVE TO SPOTIFY</button>
    </form>
  );
}

export default Playlist;
