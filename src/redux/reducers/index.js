import { combineReducers } from "redux";
import user from "./UserReducer";
import payment from "./PaymentReducer";


const rootReducer = combineReducers({
        auth: user,
        payments: payment
    })


export default rootReducer;