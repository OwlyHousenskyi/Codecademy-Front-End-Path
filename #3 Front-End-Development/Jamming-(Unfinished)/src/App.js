import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import SaveBtn from './components/SaveBtn';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSearch = (term) => {
    // Example fetch request to Spotify API
    const accessToken = 'ca52c8e5e12b4ef69f9b951edf0a06e8'; // This should be dynamically set based on OAuth
    const url = `https://api.spotify.com/v1/search?q=${term}&type=track`;
    
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const tracks = data.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
        setSearchResults(tracks);
      });
  };

  const addTrackToPlaylist = (track) => {
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  };

  const savePlaylist = () => {
    // Add functionality to save the playlist to Spotify
    const accessToken = 'your-spotify-access-token'; 
    const playlistData = {
      name: playlistName,
      description: 'My custom playlist created with Jammming',
      public: true,
    };

    fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playlistData),
    })
      .then(response => response.json())
      .then(data => {
        const playlistId = data.id;

        // Add tracks to the newly created playlist
        const trackUris = playlistTracks.map(track => track.uri);
        
        fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uris: trackUris }),
        });
      });
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchResults={searchResults} onAdd={addTrackToPlaylist} />
      <Playlist playlistName={playlistName} tracks={playlistTracks} onRemove={removeTrackFromPlaylist} />
      <SaveBtn onSave={savePlaylist} />
    </div>
  );
}

export default App;
