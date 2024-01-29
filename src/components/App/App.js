import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import styles from "./App.module.css";
import Login from "../Login/Login";
import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [loginScreen, setLoginScreen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    if (accessTokenMatch) {
      setLoginScreen(false);
      Spotify.getAccessToken();
    }
  };
  const login = () => {
    Spotify.login();
  };
  const addTrack = (track) => {
    setPlaylistTracks((prev) => [...prev, track]);
  };
  const removeTrack = (track) => {
    setPlaylistTracks((prev) =>
      prev.filter((currTrack) => currTrack.id !== track.id)
    );
  };
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  async function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    await Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  }
  async function search(term) {
    const results = await Spotify.search(term);
    setSearchResult(results);
    setSearchTerm(term);
  }

  return (
    <div>
      <h1 className={styles.h1}>
        Ja<span className={styles.span}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {loginScreen && <Login login={login} />}
        {!loginScreen && (
          <>
            <SearchBar search={search} searchTerm={searchTerm} />
            <div className={styles.container}>
              <SearchResults
                searchResults={searchResults}
                addTrack={addTrack}
              />
              <Playlist
                playlistName={playlistName}
                playlistTracks={playlistTracks}
                updatePlaylistName={updatePlaylistName}
                removeTrack={removeTrack}
                savePlaylist={savePlaylist}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
