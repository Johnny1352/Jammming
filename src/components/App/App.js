import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import styles from "./App.module.css";

function App() {
  const [searchResults, setSearchResult] = useState([
    {
      id: 1,
      name: "The Sun",
      artist: "Maroon 5",
      album: "Songs About Jane",
    },
    {
      id: 2,
      name: "Suck My Kiss",
      artist: "RHCP",
      album: "Blood Sugar Sex Magic",
    },
    {
      id: 3,
      name: "Enchanted",
      artist: "Taylor Swift",
      album: "Speak Now",
    },
  ]);

  return (
    <div>
      <h1 className={styles.h1}>
        Ja<span className={styles.span}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar />
        <div className={styles.container}>
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
