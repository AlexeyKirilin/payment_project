import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT,} from "../actions/LoginAction";
import {POST_USER_REQUESTED, POST_USER_FAIL, POST_USER_SUCCESS} from "../actions/PostUserAction";

const initialState = {
    error: null,
    token: null,
    isLoading: false,
    users: [],
}
const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case LOGIN_FAIL: {
            return {
                ...state,
                error: true,
                isLoading: false,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                users: [...state.users, action.payload.data],
                isLoading: false
            }
        }
        case LOGOUT: {
            return {
                ...state,
                error: null,
                users: null
            }
        }

        case POST_USER_REQUESTED: 
            return ({
                ...state,
                isLoading: true,
                error: false,
            })
        case POST_USER_FAIL:
            return ({
                ...state,
                error: true,
                isLoading: false,
            })
        case POST_USER_SUCCESS:
            return ({
                ...state,
                error: false,
                isLoading: false,
                // users: [...state.users, action.payload.data]
                users: [action.payload.data]
            })
        default:
            return state;
    }
}

export default user;