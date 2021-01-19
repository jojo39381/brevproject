import axios from "axios";
export const addMatch = async (userId, matchId) => {
    
    var params = {"userId":userId, "key": "matches", "value": matchId}
    
    var userData = await axios.post("https://79qh3q9y.brev.dev/api/interaction", params)
    
    return userData.data

    
    
}

export const addMessage = async (messages, targetId) => {
    console.log("messages")

    console.log(messages[0].user._id)
    var params = {
        "userId": messages[0].user._id,
        "targetId": targetId,
        "messageDetail": messages[0]
        }

    console.log(params)
    
    var userData = await axios.post("https://79qh3q9y.brev.dev/api/messages", params)
    console.log(userData.data)
    return userData.data

    
    
}


export const getMessages = async (userId, targetId) => {
   
    var params = {"userId":userId, "targetId": targetId}
    console.log(params)
    var messages = await axios.get("https://79qh3q9y.brev.dev/api/messages",  {params:params})
    console.log("lolol")
    console.log(messages.data)
    return messages.data

    
    
}

