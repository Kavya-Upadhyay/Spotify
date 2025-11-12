import React from 'react';
import './MainContent.css';
import PlaylistCard from './PlaylistCard';

const MainContent = ({ onPlayTrack, isPlaying, currentTrack }) => {
  const featuredPlaylists = [
    {
      id: 1,
      name: 'Indie Mix',
      description: 'Your weekly mixtape of fresh indie sounds',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Hip Hop Essentials',
      description: 'The defining sounds of hip hop past and present',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Rock Classics',
      description: 'Rock legends & epic songs that continue to inspire generations',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Pop Rising',
      description: "Tomorrow's pop hits, today",
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Jazz Vibes',
      description: 'The original and the new school',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Electronic Energy',
      description: 'High energy electronic music for your workout',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const recentlyPlayed = [
    {
      id: 7,
      name: 'Daily Mix 1',
      description: 'Made for you based on your listening history',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      name: 'Chill Hits',
      description: 'Kick back to the best new and recent chill hits',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c6632f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="mainContent">
      <div className="mainContent__header">
        <div className="navigationButtons">
          <button className="navButton">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="navButton">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="userMenu">
          <div className="userAvatar">U</div>
          <span>User</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      <div className="mainContent__greeting">
        <h1>Good evening</h1>
        <p>Ready to discover some new music?</p>
      </div>

      <div className="section">
        <div className="section__header">
          <h2>Recently played</h2>
          <a href="#" className="section__seeAll">Show all</a>
        </div>
        <div className="playlistGrid">
          {recentlyPlayed.map(playlist => (
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
              isPlaying={isPlaying && currentTrack?.id === playlist.id}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section__header">
          <h2>Made for you</h2>
          <a href="#" className="section__seeAll">Show all</a>
        </div>
        <div className="playlistGrid">
          {featuredPlaylists.map(playlist => (
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
              isPlaying={isPlaying && currentTrack?.id === playlist.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;