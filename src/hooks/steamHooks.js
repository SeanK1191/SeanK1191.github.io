import  { useState, useEffect } from 'react';
import { User } from '../services/steam';

function useSteamStatus(steamId) {
  const [steamStatus, setSteamStatus] = useState({ personastate: '' });

  useEffect(() => {
    async function getPlayerSummary() {
       const playerSummary = await User.GetUserSummary(steamId) 
       setSteamStatus(playerSummary);
    };

    getPlayerSummary();
  }, [steamId])

  useEffect(() => {
    var interval = setInterval(async () => {
      const playerSummary = await User.GetUserSummary(steamId);
      setSteamStatus(_ => playerSummary);
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

    useEffect(() => {
      async function getMostRecentlyPlayed() {
        const mostRecentlyPlayedGame = await User.GetUserMostRecentGame(steamId);
        setSteamMostRecentlyPlayed(_ => mostRecentlyPlayedGame);
      };

      getMostRecentlyPlayed();
    }, [steamId])

    useEffect(() => {
      var interval = setInterval(async () => {
        const mostRecentGame = await User.GetUserMostRecentGame(steamId);
        setSteamMostRecentlyPlayed(_ => mostRecentGame);
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