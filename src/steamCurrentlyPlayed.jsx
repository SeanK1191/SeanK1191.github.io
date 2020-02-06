import React, { useEffect, useState} from 'react';
import { User } from './services/steam';

const SteamCurrentlyPlayed = (props) => {
    let [steamSummary, setSteamSummary] = useState('Test');

    useEffect(() => {
        async function getSteam() {
            const response = await User.GetUserSummary(props.steamDetails.id);

            setSteamSummary(response);
        }

        getSteam();
    }, []);


    return <div>
        Steam Game: {steamSummary}
    </div>
}

export default SteamCurrentlyPlayed;