import React, { useState } from 'react';
import './PlaylistCard.css';

const PlaylistCard = ({ playlist, onPlay, isPlaying }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="playlistCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="playlistCard__image">
        <img src={playlist.image} alt={playlist.name} />
        <button 
          className={`playButton ${isHovered || isPlaying ? 'playButton--visible' : ''}`}
          onClick={onPlay}
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
      </div>
      <div className="playlistCard__info">
        <h3>{playlist.name}</h3>
        <p>{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;