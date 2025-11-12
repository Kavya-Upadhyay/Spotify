import React, { useState } from 'react';
import './YourLibrary.css';
import PlaylistCard from './PlaylistCard';

const YourLibrary = ({ onPlayTrack }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const libraryItems = [
    {
      id: 1,
      name: 'Liked Songs',
      description: '123 songs',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      type: 'playlist'
    },
    {
      id: 2,
      name: 'My Playlist #1',
      description: 'By You',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      type: 'playlist'
    },
    {
      id: 3,
      name: 'Discover Weekly',
      description: 'By Spotify',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      type: 'playlist'
    },
    {
      id: 4,
      name: 'Release Radar',
      description: 'By Spotify',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      type: 'playlist'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? libraryItems 
    : libraryItems.filter(item => item.type === activeFilter);

  return (
    <div className="library">
      <div className="library__header">
        <div className="library__top">
          <div className="library__user">
            <div className="user-avatar">U</div>
            <h1>Your Library</h1>
          </div>
          <button className="library__create-btn">
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="library__filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'playlist' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('playlist')}
          >
            Playlists
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'artist' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('artist')}
          >
            Artists
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'album' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('album')}
          >
            Albums
          </button>
        </div>
      </div>

      <div className="library__content">
        <div className="playlistGrid">
          {filteredItems.map(item => (
            <PlaylistCard
              key={item.id}
              playlist={item}
              onPlay={() => onPlayTrack({
                id: item.id,
                name: item.name,
                artist: 'Various Artists',
                image: item.image,
                duration: '3:45'
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourLibrary;