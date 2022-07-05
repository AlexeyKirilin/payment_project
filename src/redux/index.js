import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from "connected-react-router";
import rootReducer from './reducers';
import sagaWatcher from './sagas/index'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    )

sagaMiddleware.run(sagaWatcher);  

export default store;


