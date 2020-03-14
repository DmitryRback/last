import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import siteBarReducer from "./SiteBarReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./AppReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: siteBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers( applyMiddleware(thunkMiddleware)
));

let __store__ = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = __store__;

export default store;