import React from 'react';

function Track({ track, onAdd, onRemove }) {
  return (
    <div className="Track">
      <p>{track.name} by {track.artist}</p>
      <button onClick={() => onAdd(track)}>Add to Playlist</button>
      {onRemove && <button onClick={() => onRemove(track)}>Remove</button>}
    </div>
  );
}

export default Track;
