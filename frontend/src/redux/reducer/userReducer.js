
import { IS_LOGGEDIN, LOGOUT_USER } from "../action/type";

const initialState = {
    isAuth: false,
    isLoading: false,
    // email:null,
    // username:null,
}

const userReducer = (state = initialState, action) => {
    // we can create LOGIN_ACTION for getting user email and name
    const { type, payload } = action;
    switch (type) {
        case IS_LOGGEDIN: {
            return {
                ...state,
                isAuth: true,
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return state;
    }
}
export default userReducer;