import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas/sagas";

const initialState = {};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// mount it on the Store
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

// then run the saga
sagaMiddleware.run(mySaga);
export default store;
