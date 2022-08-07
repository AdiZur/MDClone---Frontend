import { HomePage } from "./pages/home-page"
import { LoginRegisterPage } from "./pages/login-register-page"
import { UsersPage } from "./pages/users-page"
import { UserDetails } from "./pages/user-details"

const routes = [
    {
        path: '/user/:userId',
        component: UserDetails,
    },
    {
        path: '/user',

        component: UsersPage,
    },
    {
        path: '/login',
        component: LoginRegisterPage,
    },
    {
        path: '/',
        component: HomePage,
    },

]

export default routes