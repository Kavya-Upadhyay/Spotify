import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

const Player = ({ currentTrack, isPlaying, onTogglePlay }) => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isPlaying && currentTrack) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 0;
          }
          return prev + 0.5;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const newProgress = (clickPosition / progressBarWidth) * 100;
    setProgress(Math.max(0, Math.min(100, newProgress)));
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  if (!currentTrack) {
    return (
      <div className="player player--empty">
        <div className="player__emptyMessage">
          Select a track to start playing
        </div>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="player__left">
        <div className="nowPlaying">
          <img 
            src={currentTrack.image} 
            alt={currentTrack.name}
            className="nowPlaying__image"
          />
          <div className="nowPlaying__info">
            <h4>{currentTrack.name}</h4>
            <p>{currentTrack.artist}</p>
          </div>
          <div className="nowPlaying__actions">
            <i className="far fa-heart"></i>
            <i className="far fa-window-restore"></i>
          </div>
        </div>
      </div>

      <div className="player__center">
        <div className="playerControls">
          <div className="playerControls__buttons">
            <button className="controlButton">
              <i className="fas fa-random"></i>
            </button>
            <button className="controlButton">
              <i className="fas fa-step-backward"></i>
            </button>
            <button 
              className="controlButton controlButton--play"
              onClick={onTogglePlay}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            <button className="controlButton">
              <i className="fas fa-step-forward"></i>
            </button>
            <button className="controlButton">
              <i className="fas fa-redo"></i>
            </button>
          </div>
          <div className="progressBar">
            <span className="progressBar__time">1:23</span>
            <div 
              className="progressBar__container"
              ref={progressBarRef}
              onClick={handleProgressClick}
            >
              <div 
                className="progressBar__progress"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progressBar__time">3:45</span>
          </div>
        </div>
      </div>

      <div className="player__right">
        <div className="playerOptions">
          <button className="controlButton">
            <i className="fas fa-list"></i>
          </button>
          <button className="controlButton">
            <i className="fas fa-laptop"></i>
          </button>
          <div className="volumeControl">
            <i className="fas fa-volume-up"></i>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volumeControl__slider"
            />
          </div>
          <button className="controlButton">
            <i className="fas fa-expand-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;