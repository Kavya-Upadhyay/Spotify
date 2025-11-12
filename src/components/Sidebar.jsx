import React from 'react';
import './Sidebar.css';

const Sidebar = ({ playlists }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
          alt="Spotify" 
        />
      </div>
      
      <div className="sidebar__nav">
        <div className="sidebar__navItem sidebar__navItem--active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="sidebar__navItem">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </div>
        <div className="sidebar__navItem">
          <i className="fas fa-book"></i>
          <span>Your Library</span>
        </div>
      </div>

      <div className="sidebar__nav">
        <div className="sidebar__navItem">
          <i className="fas fa-plus-square"></i>
          <span>Create Playlist</span>
        </div>
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
        <div className="sidebar__createPlaylist">
          <i className="fas fa-plus"></i>
          <span>Create Playlist</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;