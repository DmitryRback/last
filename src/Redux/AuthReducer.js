import {AuthAPI, SecurityAPI} from "../API/API";
import React from "react";
import {stopSubmit} from "redux-form";
import {getProfile} from "./ProfileReducer";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_CAPTCHA_URL:
            debugger
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
});
export const setURL = (captchaURL) => ({
    type: SET_CAPTCHA_URL, captchaURL
});

export const getAuth = () => async (dispatch) => {
    let responce = await AuthAPI.getMe()
    if (responce.data.resultCode === 0) {
        let {id, login, email} = responce.data.data;
        dispatch(setAuthUserData(id, login, email, true))
        dispatch(getProfile(id))
    }
}

export const LoginThunk = (email, password, rememberMe, captcha) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe, captcha).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                if(responce.data.resultCode === 10){
                    dispatch(setCaptchaURL())
                }
                let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Common error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        }
    )

}
const setCaptchaURL = () => async (dispatch) => {
    const captchaURL = await SecurityAPI.getCaptchaURL()
    dispatch(setURL(captchaURL.data.url))
}
export const LogoutThunk = () => async (dispatch) => {
    await AuthAPI.logout()
    dispatch(setAuthUserData(null, null, null, false))
}

export default authReducer;

// import {AuthAPI, UsersAPI} from "../API/API";
// import React from "react";
// import {stopSubmit} from "redux-form";
//
// const SET_USER_DATA = 'AUTH/SET_USER_DATA';
// const SET_FULL_PROFILE = 'AUTH/SET_FULL_PROFILE'
//
// let initialState = {
//     userId: null,
//     login: null,
//     email: null,
//     isAuth: false,
//     fullProfile: null
// };
//
// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_USER_DATA:
//             return {
//                 ...state,
//                 ...action.data
//             }
//         case SET_FULL_PROFILE:
//             return {
//                 ...state,
//                 fullProfile: {...action.fullProfile}
//             }
//         default:
//             return state;
//     }
// }
//
// export const setAuthUserData = (userId, login, email, isAuth) => ({
//     type: SET_USER_DATA,
//     data: {userId, login, email, isAuth}
// });
// export const setFullProfile = (fullProfile) => ({type: SET_FULL_PROFILE, fullProfile})
//
// export const getAuth = () => async (dispatch) => {
//     let responce = await AuthAPI.getMe()
//     if (responce.data.resultCode === 0) {
//         let {id, login, email} = responce.data.data;
//         dispatch(setAuthUserData(id, login, email, true))
//         UsersAPI.getProfile(id).then(responce => {
//             dispatch(setFullProfile(responce.data))
//         })
//     }
// }
//
// export const LoginThunk = (email, password, rememberMe) => (dispatch) => {
//     AuthAPI.login(email, password, rememberMe).then(responce => {
//             if (responce.data.resultCode === 0) {
//                 dispatch(getAuth())
//             } else {
//                 let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Common error'
//                 dispatch(stopSubmit('login', {_error: message}))
//             }
//         }
//     )
//
// }
// export const LogoutThunk = () => async (dispatch) => {
//     await AuthAPI.logout()
//     dispatch(setAuthUserData(null, null, null, false))
// }
//
// export default authReducer;