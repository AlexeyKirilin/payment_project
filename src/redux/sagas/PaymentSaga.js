import {call, put, takeEvery, all, select} from 'redux-saga/effects'
import {GET_PAYMENT, GET_PAYMENT_FAIL,GET_PAYMENT_SUCCESS} from '../actions/GetPaymentAction'
import {GET_PAYMENT_DETAILS,GET_PAYMENT_DETAILS_FAIL,GET_PAYMENT_DETAILS_SUCCESS} from '../actions/GetPaymentDetailsAction'
import {PAYMENT_DELETED,PAYMENT_DELETED_SUCCESS, PAYMENT_DELETED_FAIL, CLOSE_MODAL} from '../actions/PaymentDeletedAction'
import {POST_PAYMENT, POST_PAYMENT_FAIL,POST_PAYMENT_SUCCESS} from '../actions/PostPaymentAction'
import userApi from '../../helpers/api/UserApi';
import {getPaymentDeleted} from './Selectors'


function* postPayment(action) {
    try {
        const payment = yield call(userApi.postPayment, action.payload)
        yield put({type: POST_PAYMENT_SUCCESS, 
            payload: {
                data: payment
            }
        })
        yield put({type: CLOSE_MODAL})
        return payment;
    } catch(e) {
        yield put({type: POST_PAYMENT_FAIL,
            payload: {message: e.message}
        })
    }
}


function* getPayment() {
    try {
        const payment = yield call(userApi.getPayment, {})
            yield put({type: GET_PAYMENT_SUCCESS, 
                payload: {
                    data: payment
                }
            })
    } catch(e) {
        yield put({type: GET_PAYMENT_FAIL,
            payload: {message: e.message}
        })
    }
}


function* getPaymentdetails(action) {
    try {
        const payment = yield call(userApi.getPaymentDetails, action.payload)

            yield put({type: GET_PAYMENT_DETAILS_SUCCESS, 
                payload: payment
            })
        
    } catch(e) {
        yield put({type: GET_PAYMENT_DETAILS_FAIL,
            payload: {message: e.message}
        })
    }
}


function* deletePayment(action) {
    
    try {
        const deletePayment = yield call(userApi.deletePayment, action.payload)
        const data = yield select(getPaymentDeleted)
        const getData = data.filter(item => item.id !== action.payload)        
            yield put({type: PAYMENT_DELETED_SUCCESS, 
                payload: {
                    data: getData
                }
            })

    } catch(e) {
        yield put({type: PAYMENT_DELETED_FAIL,
            payload: {message: e.message}
        })
    }
}



const paymentSaga = all([
    takeEvery(GET_PAYMENT, getPayment),
    takeEvery(GET_PAYMENT_DETAILS, getPaymentdetails),
    takeEvery(POST_PAYMENT, postPayment),
    takeEvery(PAYMENT_DELETED, deletePayment),
])

export default paymentSaga;