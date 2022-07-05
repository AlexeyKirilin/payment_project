import {GET_PAYMENT, GET_PAYMENT_FAIL,GET_PAYMENT_SUCCESS} from '../actions/GetPaymentAction'
import {GET_PAYMENT_DETAILS,GET_PAYMENT_DETAILS_FAIL,GET_PAYMENT_DETAILS_SUCCESS} from '../actions/GetPaymentDetailsAction'
import {PAYMENT_DELETED, PAYMENT_CREATED,PAYMENT_DELETED_SUCCESS, PAYMENT_DELETED_FAIL} from '../actions/PaymentDeletedAction'
import {POST_PAYMENT, POST_PAYMENT_FAIL,POST_PAYMENT_SUCCESS} from '../actions/PostPaymentAction'


const initialState = {
    error: false,
    isLoading: false,
    payments: [],
}

const payment = (state = initialState, action) => {
    switch(action.type) {
        case POST_PAYMENT:
            return ({
                ...state,
                isLoading: true
            })
        case POST_PAYMENT_FAIL:
                return({
                    ...state,
                    error: true,
                    isLoading: false
                })
        case POST_PAYMENT_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                payments: [...state.payments, action.payload.data]
            })
        case GET_PAYMENT:
            return ({
                ...state,
                isLoading: true
            })
        case GET_PAYMENT_FAIL:
            return ({
                ...state,
                error: true,
                isLoading: false
            })
        case GET_PAYMENT_SUCCESS:
            return ({
                ...state,
                payments: [...action.payload.data],
                isLoading: false
            })
        case GET_PAYMENT_DETAILS:
            return ({
                ...state,
                isLoading: true
            })
        case GET_PAYMENT_DETAILS_FAIL:
            return ({
                ...state,
                error: true,
                isLoading: false
            })
        case GET_PAYMENT_DETAILS_SUCCESS:
            return ({
                ...state,
                payments: [action.payload],
                isLoading: false
            })
        case PAYMENT_CREATED:
            return ({
                ...state,
                payments: [...state.payments, action.payload]
            })
        case PAYMENT_DELETED:
            return({
                ...state,
                isLoading: true
            })
        case PAYMENT_DELETED_SUCCESS:
            return({
                ...state,
                isLoading: false,
                payments: action.payload.data
            })
        case PAYMENT_DELETED_FAIL:
            return({
                ...state,
                error: true,
                isLoading: false            
            })
        
        default:
             return state;
    }
}

export default payment;