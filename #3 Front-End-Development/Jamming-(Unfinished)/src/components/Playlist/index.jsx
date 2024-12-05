import React from 'react';
import Track from '../Track';

function Playlist({ playlistName, tracks, onRemove }) {
  return (
    <div className="Playlist">
      <h2>{playlistName}</h2>
      {tracks.length > 0 ? (
        tracks.map(track => (
          <Track key={track.id} track={track} onRemove={onRemove} />
        ))
      ) : (
        <p>Your playlist is empty.</p>
      )}
    </div>
  );
}

export default Playlist;
