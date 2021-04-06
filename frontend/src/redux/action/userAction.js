import axios from "../../utils/axios";
import { IS_LOGGEDIN, LOGOUT_USER } from "./type";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
export const login = userData => async dispatch => {
    try {
        const res = await axios.post('/auth/signin', userData);

        // set cookie in browser
        Cookies.set("token", res.data.data.token);

        window.location.href = "/";
    } catch (e) {
        // we will handling this error in future with UI
        console.log(e);
    }
}

export const signup = userData => async dispatch => {
    try {
        const res = await axios.post('/auth/signup', userData);
        window.location.href = "/";
    } catch (e) {
        // we will handling this error in future with UI
        console.log(e);
    }
}

export const isLoggedIn = () => async dispatch => {

    try {
        if (Cookies.get('token')) {
            const tokenData = jwt_decode(Cookies.get('token').split(' ')[1]);
            const currentTime = Date.now();
            const tokenExpireTime = new Date(0).setUTCSeconds(tokenData.exp);

            // to check wheather token is valid or load
            if (currentTime < tokenExpireTime)
                dispatch({ type: IS_LOGGEDIN })
            else
                dispatch({ type: LOGOUT_USER })
        } else {
            dispatch({ type: LOGOUT_USER })
        }


    } catch (e) {
        // we will handling this error in future with UI
        console.log(e);
    }
}

export const logout = () => dispatch => {
    // Simply remove the cookie
    Cookies.remove("token");
    dispatch({ type: LOGOUT_USER })
}