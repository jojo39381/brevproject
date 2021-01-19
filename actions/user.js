import axios from "axios";
export const fetchUsers = async (userId) => {
    var params = {userId:userId}
    var userData = await axios.get("https://79qh3q9y.brev.dev/api/resources", {params:params})
    
    return userData.data

    
    
}

export const fetchUserProfile = async (userId) => {
    var params = {userId:userId}
    var userData = await axios.get("https://79qh3q9y.brev.dev/api/user", {params:params})
    
    return userData.data

    
    
}


export const updateProfile = async (userId, key, value) => {
    var params = {userId:userId, key:key, value:value}
    var userData = await axios.put("https://79qh3q9y.brev.dev/api/user", {params:params})
    
    return userData.data

    
    
}