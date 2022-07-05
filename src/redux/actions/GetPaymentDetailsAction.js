export const GET_PAYMENT_DETAILS = '[PAYMENT] GET_PAYMENT_DETAILS';
export const GET_PAYMENT_DETAILS_FAIL = '[PAYMENT] GET_PAYMENT_DETAILS_FAIL';
export const GET_PAYMENT_DETAILS_SUCCESS = '[PAYMENT] GET_PAYMENT_DETAILS_SUCCESS';

export const getPaymentdetails = (id) => {
    return ({
        type: GET_PAYMENT_DETAILS,
        payload: id
    })
}

export const getPaymentDetailsFail = () => {
    return ({
        type: GET_PAYMENT_DETAILS_FAIL
    })
}
export const getPaymentDetailsSuccess = (id) => {
    return ({
        type: GET_PAYMENT_DETAILS_SUCCESS,
        payload: id
    })
}