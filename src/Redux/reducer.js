import { ADD_USER_DETAILS } from "./ActionTypes"


const init = {
    userDetails: {
        name:null,
        email:"e@a.com",
        password:123,
    }
}

export const userReducer = (state=init,action)=>{
    switch(action.type){
        case ADD_USER_DETAILS:
            return{...state,userDetails:{...state.userDetails, name: action.payload.name,email: action.payload.email,password: action.payload.password}}
        default:
            return state;
    }
}