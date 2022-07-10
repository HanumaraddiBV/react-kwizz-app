import { ADD_USER_DETAILS } from "./ActionTypes"


export const addUserDetails = (payload)=>{
    console.log('payload:', payload)
    return{
        type: ADD_USER_DETAILS,
        payload: payload
    }
}