import React, { useState } from 'react';
import './Search.css';
import PlaylistCard from './PlaylistCard';

const Search = ({ onPlayTrack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Podcasts',
      color: '#8347E5',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Live Events',
      color: '#7358FF',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Made For You',
      color: '#1E3264',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'New Releases',
      color: '#8D67AB',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Pop',
      color: '#D84000',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Hip-Hop',
      color: '#BA5D07',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const searchResults = [
    {
      id: 1,
      name: 'Top Hits',
      description: 'The most played songs right now',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Chill Vibes',
      description: 'Relax and unwind with these calming tunes',
      image: 'https://images.unsplash.com/photo-1511339555312-e607c6632f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="search">
      <div className="search__header">
        <div className="search__bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search__input"
          />
        </div>
      </div>

      {!searchQuery ? (
        <div className="search__content">
          <h2>Browse all</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-card"
                style={{ backgroundColor: category.color }}
              >
                <h3>{category.name}</h3>
                <img src={category.image} alt={category.name} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="search__results">
          <h2>Top results for "{searchQuery}"</h2>
          <div className="playlistGrid">
            {searchResults.map(playlist => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onPlay={() => onPlayTrack({
                  id: playlist.id,
                  name: playlist.name,
                  artist: 'Various Artists',
                  image: playlist.image,
                  duration: '3:45'
                })}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;