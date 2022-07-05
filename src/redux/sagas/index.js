import { all } from "redux-saga/effects";
import userSaga from "./UserSaga";
import paymentSaga from "./PaymentSaga";

function* sagaWatcher() {
    yield all([
        userSaga,
        paymentSaga,
    ])
}


export default sagaWatcher;