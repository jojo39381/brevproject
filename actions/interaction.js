import axios from "axios";
export const addMatch = async (userId, matchId) => {
    
    var params = {"userId":userId, "key": "matches", "value": matchId, "chat": "False"}
    
    var userData = await axios.post("https://79qh3q9y.brev.dev/api/interaction", params)
    
    return userData.data

    
    
}

export const addSpecial = async (userId, matchId) => {
    console.log(userId, matchId)
    var params = {"userId":userId, "key": "special", "value": matchId, "chat":"False"}
    console.log(params)
    var userData = await axios.post("https://79qh3q9y.brev.dev/api/interaction", params)
    
    return userData.data

    
    
}


export const getMatches = async (userId) => {
   
    var params = {"userId":userId, "key":"matches"}
    console.log(params)
    var userData = await axios.get("https://79qh3q9y.brev.dev/api/interaction",  {params:params})
    
    return userData.data

    
    
}

export const getChats = async (userId) => {
   
    var params = {"userId":userId, "key":"chats"}
    console.log(params)
    var userData = await axios.get("https://79qh3q9y.brev.dev/api/interaction",  {params:params})
    
    return userData.data

    
    
    
}
export const startChat = async (userId, matchId) => {
   
    console.log(userId, matchId)
    var params = {"userId":userId, "key": "special", "value": matchId, "chat":"True"}
    console.log(params)
    var userData = await axios.post("https://79qh3q9y.brev.dev/api/interaction", params)
    
    return userData.data
    
    
}


