import React from 'react';

function SaveBtn({ onSave }) {
  return (
    <div className="SavePlaylist">
      <button onClick={onSave}>Save Playlist to Spotify</button>
    </div>
  );
}

export default SaveBtn;
