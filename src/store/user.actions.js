import { userService } from "../services/user.service"

export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            console.log('user action', user)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('Cannot login', err)
            throw err
        }
    }
}

export function logOut() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
        } catch (err) {
            console.log('Cannot logout', err)
        }
    }
}

export function register(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.register(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('Cannot register', err)
            throw err
        }

    }
}

export function loadUser() {
    return async dispatch => {
        try {
            const user = await userService.getLoggedinUser()
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('UserAction: err in loadUser', err)
        }
    }
}