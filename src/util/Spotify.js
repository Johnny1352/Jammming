const clientId = "cfbcb72ccaf3451f89d5a192ea7af19c";
const redirectUri = "http://localhost:3000";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // check for an access token
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clears the token & expiry so we can get a new token when it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    }
  },

  login() {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  },

  async search(term) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const jsonResponse = await response.json();
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }
    try {
      const accessToken = Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      const userResponse = await fetch("https://api.spotify.com/v1/me", {
        headers,
      });
      const userJsonResponse = await userResponse.json();
      const userId = userJsonResponse.id;
      const createPlaylistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers,
          method: "POST",
          body: JSON.stringify({ name }),
        }
      );
      const createPlaylistJsonResponse = await createPlaylistResponse.json();
      const playlistId = createPlaylistJsonResponse.id;
      await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
        {
          headers,
          method: "POST",
          body: JSON.stringify({ uris: trackUris }),
        }
      );
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  },
};

export default Spotify;
