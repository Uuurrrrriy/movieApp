import { createStore,
    applyMiddleware,
    // compose
} from 'redux';
import createRootReducer from '../reducers';
import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(createRootReducer(),applyMiddleware(thunk));
