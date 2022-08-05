import { userService } from "../services/user.service"

export function login(credentials) {
    console.log('credentials', credentials)
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
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

export function onRegister(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.register(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('Cannot signup', err)
        }

    }
}

export function loadUser() {
    return async dispatch => {
        try {
            const user = await userService.getLoggedinUser()
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('UserAction: err in loadUser', err)
        }
    }
}

// export function updateUser(user) {
//     return async dispatch => {
//         try {
//             const updatedUser = await userService.update(user)
//             dispatch({ type: 'UPDATE_USER_WISHLIST', user: updatedUser })
//         } catch (err) {
//             console.log('UserAction: err in update user', err)

//         }
//     }
// }