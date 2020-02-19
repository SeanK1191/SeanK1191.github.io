import React from 'react';
import { useSteamMostRecentlyPlayed } from './hooks/steamHooks';
import Typography from '@material-ui/core/Typography'

const SteamMostRecentGame = (props) => {
    const mostRecentGameInfo = useSteamMostRecentlyPlayed(props.steamDetails.id);

    return <Typography variant='body1' align='center' gutterBottom>        
        Last Played: {mostRecentGameInfo.name}  
    </Typography>
}

export default SteamMostRecentGame;