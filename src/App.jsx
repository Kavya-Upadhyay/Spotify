import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import Search from './components/Search';
import YourLibrary from './components/YourLibrary';
import CreatePlaylist from './components/CreatePlaylist';

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
      },
      {
        id: 3,
        name: 'Chill Vibes',
        description: 'Relax and unwind with these calming tunes',
        image: 'https://images.unsplash.com/photo-1511339555312-e607c6632f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 4,
        name: 'Workout Mix',
        description: 'High-energy tracks for your exercise routine',
        image: 'https://images.unsplash.com/photo-1519859660545-2c17ddfb1039?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 5,
        name: 'Road Trip',
        description: 'The perfect soundtrack for your journey',
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
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

  const handleAddToPlaylist = (playlistId, track) => {
    // In a real app, this would make an API call to add the track to the playlist
    console.log(`Adding track ${track.name} to playlist ${playlistId}`);
    alert(`Added "${track.name}" to playlist!`);
  };

  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Sidebar playlists={playlists} />
          <Routes>
            <Route 
              path="/" 
              element={
                <MainContent 
                  onPlayTrack={handlePlayTrack}
                  isPlaying={isPlaying}
                  currentTrack={currentTrack}
                />
              } 
            />
            <Route 
              path="/search" 
              element={
                <Search 
                  onPlayTrack={handlePlayTrack}
                  onAddToPlaylist={handleAddToPlaylist}
                />
              } 
            />
            <Route 
              path="/library" 
              element={
                <YourLibrary 
                  onPlayTrack={handlePlayTrack}
                  playlists={playlists}
                />
              } 
            />
            <Route 
              path="/create-playlist" 
              element={
                <CreatePlaylist 
                  onPlaylistCreated={(newPlaylist) => {
                    setPlaylists(prev => [...prev, { ...newPlaylist, id: Date.now() }]);
                  }}
                />
              } 
            />
          </Routes>
        </div>
        <Player 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onNextTrack={() => {
            // Mock next track functionality
            if (currentTrack) {
              const nextTrack = {
                ...currentTrack,
                id: currentTrack.id + 1,
                name: `Next Track ${currentTrack.id + 1}`,
                artist: 'Various Artists'
              };
              setCurrentTrack(nextTrack);
            }
          }}
          onPreviousTrack={() => {
            // Mock previous track functionality
            if (currentTrack && currentTrack.id > 1) {
              const prevTrack = {
                ...currentTrack,
                id: currentTrack.id - 1,
                name: `Previous Track ${currentTrack.id - 1}`,
                artist: 'Various Artists'
              };
              setCurrentTrack(prevTrack);
            }
          }}
        />
      </div>
    </Router>
  );
}

export default App;