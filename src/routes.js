import { HomePage } from "./pages/home-page"
import { LoginRegisterPage } from "./pages/login-register-page"
import { UsersPage } from "./pages/users-page"

const routes = [
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