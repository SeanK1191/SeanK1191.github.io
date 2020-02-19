const userInterface = 'https://young-tor-50055.herokuapp.com/ISteamUser';
const playerInterface = 'https://young-tor-50055.herokuapp.com/IPlayerService';
const version1 = 'v1';
const version2 = 'v2';
const apiKey = process.env.REACT_APP_API_KEY;

const convertSteamStatusToString = (userStatus, playerSummary) => {
    let userSummary = '';
    switch (userStatus) {
        case 1:
            if (playerSummary.gameid !== undefined) {
                userSummary = `Playing ${playerSummary.gameextrainfo}`;
            } else {
                userSummary = 'User is Online.'
            }
            
            break;
        case 3: 
            userSummary = 'User is Away';
            break;
        case 0: 
            userSummary = 'User is Offline';
            break;
        default:
            userSummary = 'User is nothing';
            break;
    }
    return userSummary;
}

const User = {
    GetUserSummary: async (userId) => {
        let playerSummary = {};
        try {
            const endpoint = `${userInterface}/GetPlayerSummaries/${version2}?key=${apiKey}&steamids=${userId}`;
            const response = await fetch(endpoint);
            const data = await response.json();
            playerSummary = data.response.players[0];
        } catch (error) {
            throw error;
        }

        playerSummary.personastate = convertSteamStatusToString(playerSummary.personastate, playerSummary);
       
        return playerSummary;
    },
    GetUserMostRecentGame: async (userId) => {
        try {
            const endpoint = `${playerInterface}/GetRecentlyPlayedGames/${version1}?key=${apiKey}&steamid=${userId}&count=1`;
            const response = await fetch(endpoint);
            const data = await response.json();
            return data.response.games[0];
        } catch (error) {
            throw error;
        }
    }
}

export {
    User
}