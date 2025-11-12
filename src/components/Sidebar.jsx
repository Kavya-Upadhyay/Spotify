import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ playlists }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
          alt="Spotify" 
        />
      </div>
      
      <div className="sidebar__nav">
        <Link to="/" className={`sidebar__navItem ${isActive('/') ? 'sidebar__navItem--active' : ''}`}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/search" className={`sidebar__navItem ${isActive('/search') ? 'sidebar__navItem--active' : ''}`}>
          <i className="fas fa-search"></i>
          <span>Search</span>
        </Link>
        <Link to="/library" className={`sidebar__navItem ${isActive('/library') ? 'sidebar__navItem--active' : ''}`}>
          <i className="fas fa-book"></i>
          <span>Your Library</span>
        </Link>
      </div>

      <div className="sidebar__nav">
        <Link to="/create-playlist" className={`sidebar__navItem ${isActive('/create-playlist') ? 'sidebar__navItem--active' : ''}`}>
          <i className="fas fa-plus-square"></i>
          <span>Create Playlist</span>
        </Link>
        <div className="sidebar__navItem">
          <i className="fas fa-heart"></i>
          <span>Liked Songs</span>
        </div>
      </div>

      <div className="sidebar__playlists">
        <h3>Playlists</h3>
        {playlists.map(playlist => (
          <div key={playlist.id} className="sidebar__playlistItem">
            {playlist.name}
          </div>
        ))}
        <Link to="/create-playlist" className="sidebar__createPlaylist">
          <i className="fas fa-plus"></i>
          <span>Create Playlist</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;