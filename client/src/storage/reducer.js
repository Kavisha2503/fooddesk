import * as action_type from './actiontype';

export default function reducer(state, action) {
    switch (action.type) {
        case action_type.USER_LOGGEDIN: {
            if (state.loggedInUser.username === null) {
                //set the user data
                let newstate = {
                    ...state,
                    loggedInUser: {
                        ...state.loggedInUser,
                        username: action.payload.username,
                        password: action.payload.password
                    }
                };
                return newstate;
            }
            return state;
        }   
        case action_type.USER_LOGOUT: {
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    username: null,
                    password: null
                }
            };
        }
            
        default: {
            return state;
        }
    }
}