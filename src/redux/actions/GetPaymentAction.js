export const GET_PAYMENT = '[PAYMENT] GET_PAYMENT';
export const GET_PAYMENTS = '[PAYMENT] GET_PAYMENTS';
export const GET_PAYMENT_FAIL = '[PAYMENT] GET_PAYMENT_FAIL';
export const GET_PAYMENT_SUCCESS = '[PAYMENT] GET_PAYMENT_SUCCESS';

export const getPayment = () => {
    return ({
        type: GET_PAYMENT
    })
}

export const getPaymentFail = () => {
    return ({
        type: GET_PAYMENT_FAIL
    })
}
export const getPaymentSuccess = (payment) => {
    return ({
        type: GET_PAYMENT_SUCCESS,
        payload: payment
    })
}