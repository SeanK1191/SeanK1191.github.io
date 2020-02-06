const userInterface = 'https://young-tor-50055.herokuapp.com/ISteamUser';
const version = 'v2';
const apiKey = process.env.REACT_APP_API_KEY;

const steamPersonaState = {
    1: 'online',
    3: 'away',
    0: 'offline',
}

const User = {
    GetUserSummary: async (userId) => {
        let playerSummary = {};
        try {
            const endpoint = `${userInterface}/GetPlayerSummaries/${version}?key=${apiKey}&steamids=${userId}`;
            const response = await fetch(endpoint);
            const data = await response.json();
            playerSummary = data.response.players[0];
        } catch (error) {
            throw error;
        }

        const userStatus = steamPersonaState[playerSummary.personastate];
        let userSummary = '';

        switch (userStatus) {
            case 'online':
                if (playerSummary.gameid !== undefined) {
                    userSummary = `Playing ${playerSummary.gameextrainfo}`;
                } else {
                    userSummary = 'User is Online.'
                }
                
                break;
            case 'away': 
                userSummary = 'User is Away';
                break;
            case 'offline': 
                userSummary = 'User is Offline';
                break;
            default:
                userSummary = 'User is nothing';
                break;
        }
        
        return userSummary;
    }
}

export {
    User
}