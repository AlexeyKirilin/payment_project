export const POST_PAYMENT = '[PAYMENT] POST_PAYMENT';
export const POST_PAYMENT_FAIL = '[PAYMENT] POST_PAYMENT_FAIL';
export const POST_PAYMENT_SUCCESS = '[PAYMENT] POST_PAYMENT_SUCCESS';


export const postPayment = (name, service, price) => {
    return ({
        type: POST_PAYMENT,
        payload: {name, service, price}
    })
}

export const postPaymentFail = () => {
    return ({
        type: POST_PAYMENT_FAIL
    })
}

export const postPaymentSuccess = (payment) => {
    return ({
        type: POST_PAYMENT_SUCCESS,
        payload: payment
    })
}