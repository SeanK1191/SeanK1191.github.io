import React from 'react';
import { useSteamStatus } from './hooks/steamHooks';

const SteamCurrentlyPlayed = (props) => {
    const steamSummary = useSteamStatus(props.steamDetails.id);

    return <div>
        Steam Status: {steamSummary.personastate}
    </div>
}

export default SteamCurrentlyPlayed;