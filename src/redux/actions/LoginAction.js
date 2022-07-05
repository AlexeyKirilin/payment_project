export const LOGIN_REQUESTED = '[USER] LOGIN_REQUESTED';
export const LOGIN_SUCCESS = '[USER] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[USER] LOGIN_FAIL';
export const LOGOUT = '[USER] LOGOUT';

export const getUser = () => {
    return ({
        type: LOGIN_REQUESTED,
    })
}

export const getUserSuccess = (email) => {
    return ({
        type: LOGIN_SUCCESS,
        payload: email
    })
}

export const getUserFail = () => {
    return ({
        type: LOGIN_FAIL
    })
}

export const logoutUser = () => {
    return ({
        type: LOGOUT
    })
}