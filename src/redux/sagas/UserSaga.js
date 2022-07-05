import {call, put, all, takeEvery} from 'redux-saga/effects'
import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/LoginAction";
import {POST_USER_REQUESTED, POST_USER_FAIL, POST_USER_SUCCESS} from "../actions/PostUserAction";
import userApi from '../../helpers/api/UserApi'


function* postUsers(action) {
    try {
        const user = yield call(userApi.postUser, action.payload)
        yield put({type: POST_USER_SUCCESS, 
        payload: {
            data: user
        }
    })
        return user;
    } catch(e) {
        yield put({type: POST_USER_FAIL,
            payload: {message: e.message}
        })
    }
}


function* getUsers() {
    try {   
        const user = yield call(userApi.getUser, {})
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                data: user
            }
        })
    } catch(e) {
        yield put({type: LOGIN_FAIL,
        payload: {message: e.message}
        })
    }
}


const userSaga = all([
    takeEvery(LOGIN_REQUESTED, getUsers),
    takeEvery(POST_USER_REQUESTED, postUsers),
])

export default userSaga;