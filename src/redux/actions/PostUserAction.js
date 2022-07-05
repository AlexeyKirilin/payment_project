export const POST_USER_REQUESTED = '[USER] POST_USER_REQUESTED';
export const POST_USER_FAIL = '[USER] POST_USER_FAIL';
export const POST_USER_SUCCESS = '[USER] POST_USER_SUCCESS';


export const postUser = (email, password, userId) => {
    return ({
        type: POST_USER_REQUESTED,
        payload: {email, password, userId}
    })
}

export const postUserFail = () => {
    return ({
        type: POST_USER_FAIL,
    })
}

export const postUserSuccess = () => {
    return ({
        type: POST_USER_SUCCESS,
    })
}