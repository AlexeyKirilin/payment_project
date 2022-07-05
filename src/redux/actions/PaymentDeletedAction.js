export const PAYMENT_DELETED = '[PAYMENT] PAYMENT_DELETED';
export const PAYMENT_DELETED_SUCCESS = '[PAYMENT] PAYMENT_DELETED_SUCCESS';
export const PAYMENT_DELETED_FAIL = '[PAYMENT] PAYMENT_DELETED_FAIL';
export const PAYMENT_CREATED = '[PAYMENT] PAYMENT_CREATED';
export const CLOSE_MODAL = '[PAYMENT] CLOSE_MODAL'


export const paymentDeleted = (id) => {
    return ({
        type: PAYMENT_DELETED,
        payload: id
    })
}

export const paymentDeletedFail = () => {
    return ({
        type: PAYMENT_DELETED_FAIL
    })
}

export const paymentDeletedSuccess = (id) => {
    return ({
        type: PAYMENT_DELETED_SUCCESS,
        payload: id
    })
}



export const paymentCreated = (payment) => {
    return ({
        type: PAYMENT_CREATED,
        payload: payment
    })
}


export const closeModal = () => {
    return ({
        type: CLOSE_MODAL
    })
}