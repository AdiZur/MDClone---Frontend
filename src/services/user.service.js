import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    register,
    getLoggedinUser,
    saveLocalUser,
    getUsers
}

function getUsers() {
    return httpService.get(`user`)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    console.log('user in service', user)
    return saveLocalUser(user)
}

async function register(userCred) {
    const user = await httpService.post('auth/register', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}






