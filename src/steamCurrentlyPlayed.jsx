import React from 'react';
import { useSteamStatus } from './hooks/steamHooks';
import Typography from '@material-ui/core/Typography'

const SteamCurrentlyPlayed = (props) => {
    const steamSummary = useSteamStatus(props.steamDetails.id);

    return <Typography variant='body1' align='center' gutterBottom>        
        Steam Status: {steamSummary.personastate}
    </Typography>
}

export default SteamCurrentlyPlayed;