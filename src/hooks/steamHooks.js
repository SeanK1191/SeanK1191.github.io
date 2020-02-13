import  { useState, useEffect } from 'react';
import { User } from '../services/steam';

function useSteamStatus(steamId) {
  const [steamStatus, setSteamStatus] = useState({ personastate: '' });

  async function getSteam() {
    const playerSummary = await User.GetUserSummary(steamId);

    setSteamStatus(playerSummary);
  }

  useEffect(() => {
    getSteam();
  }, [])

  useEffect(() => {
    var interval = setInterval(() => {
        getSteam();
    }, 30000);

    return () => {
        clearInterval(interval);
    };
  });

  return steamStatus;
}

function useSteamMostRecentlyPlayed(steamId) {
    const [steamMostRecentlyPlayed, setSteamMostRecentlyPlayed] = useState({
      name: ''
    });

    async function getSteamMostRecentlyPlayed() {
      const mostRecentGame = await User.GetUserMostRecentGame(steamId);
      setSteamMostRecentlyPlayed(mostRecentGame);
    };

    useEffect(() => {
      getSteamMostRecentlyPlayed()
    }, [])

    useEffect(() => {
      var interval = setInterval(() => {
        getSteamMostRecentlyPlayed();
      }, 30000);
  
      return () => {
          clearInterval(interval);
      };
    });
  
    return steamMostRecentlyPlayed;
  }

export {
    useSteamStatus,
    useSteamMostRecentlyPlayed
};