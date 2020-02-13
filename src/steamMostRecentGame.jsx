import React from 'react';
import { useSteamMostRecentlyPlayed } from './hooks/steamHooks';

const SteamMostRecentGame = (props) => {
    const mostRecentGameInfo = useSteamMostRecentlyPlayed(props.steamDetails.id);

    return <div>
        Last Played: {mostRecentGameInfo.name}
    </div>
}

export default SteamMostRecentGame;