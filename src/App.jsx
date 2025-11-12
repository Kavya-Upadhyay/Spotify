import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Mock data - in a real app, this would come from an API
    const mockPlaylists = [
      {
        id: 1,
        name: 'Discover Weekly',
        description: 'Your weekly mixtape of fresh music',
        image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 2,
        name: 'Release Radar',
        description: 'Catch all the latest music from artists you follow',
        image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ];
    setPlaylists(mockPlaylists);
  }, []);

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar playlists={playlists} />
        <MainContent 
          onPlayTrack={handlePlayTrack}
          isPlaying={isPlaying}
          currentTrack={currentTrack}
        />
      </div>
      <Player 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
      />
    </div>
  );
}

export default App;