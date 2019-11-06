import * as Types from './actionTypes'
import axios from 'axios'

export const authStart = () =>{
    return{
        type: Types.AUTH_START
    }
}

export const authSuccess = token =>{
    return{
        type: Types.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error =>{
    return{
        type: Types.AUTH_FAIL,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');
    localStorage.removeItem('expireDate');

    return{
        type: Types.AUTH_LOGOUT
    }
}

export const checkAuthTimeOut = expireDate =>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(logout());
        }, expireDate * 1000)
    }
}

export const authLogin = (username, password) =>{
    return dispatch =>{
        dispatch(authStart());
        axios.post('http://localhost:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expireDate = new Date( new Date().getTime() * 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expireDate', expireDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(error => {
            console.log(error)
            dispatch(authFail(error));
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch =>{
        dispatch(authStart());
        axios.post('localhost://127.0.0.1:8000/rest-auth/registration',{
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            const expireDate = new Date( new Date().getTime() * 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expireDate', expireDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCHeckState = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(token === undefined){
            return dispatch(logout());
        }else{
            const expireDate = new Date(localStorage.getItem('expireDate'));
            if(expireDate <= new Date()){
                dispatch(logout);
            }else{
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeOut(( expireDate.getTime() - new Date().getTime() ) / 1000))
            }
        }
    }
}
