import * as Types from '../actions/actionTypes'
import { updateObj } from '../utility'

const initialState = {
    token: null,
    error: null,
    loading: false
}

const authStart = (state, action) =>{
    return updateObj(state, {
        error: null,
        loading: true
    })
}

const authSuccess = (state, action) =>{
    return updateObj(state, {
        token: action.token,
        error: null,
        loading: false
    })
}

const authFail = (state, action) =>{
    return updateObj(state, {
        error: action.error,
        loading: false
    })
}

const logout = (state, action) => {
    return updateObj(state, {
        token: null
    })
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case Types.AUTH_START: return authStart(state, action);
        case Types.AUTH_SUCCESS: return authSuccess(state, action);
        case Types.AUTH_FAIL: return authFail(state, action);
        case Types.AUTH_LOGOUT: return logout(state, action);
        default: return state;
    }
}

export default reducer;