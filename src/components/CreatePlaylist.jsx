import React, { useState } from 'react';
import './CreatePlaylist.css';

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert(`Playlist "${playlistName}" created successfully!`);
    setPlaylistName('');
    setDescription('');
  };

  return (
    <div className="create-playlist">
      <div className="create-playlist__header">
        <h1>Create Playlist</h1>
        <p>Build your perfect music collection</p>
      </div>

      <form onSubmit={handleSubmit} className="create-playlist__form">
        <div className="form-group">
          <label htmlFor="playlistName">Playlist Name</label>
          <input
            type="text"
            id="playlistName"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="My Awesome Playlist"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What's your playlist about?"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <span className="checkmark"></span>
            Public Playlist
          </label>
          <p className="helper-text">
            Anyone can see this playlist in your profile
          </p>
        </div>

        <button type="submit" className="create-btn">
          Create Playlist
        </button>
      </form>

      <div className="create-playlist__tips">
        <h3>Tips for a great playlist</h3>
        <ul>
          <li>Give your playlist a catchy name</li>
          <li>Add a description to set the mood</li>
          <li>Start with 10-15 songs that fit your theme</li>
          <li>Update it regularly with new discoveries</li>
        </ul>
      </div>
    </div>
  );
};

export default CreatePlaylist;