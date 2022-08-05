import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOut } from "../store/user.actions"

export const AppHeader = () => {

    const { user } = useSelector(storeState => storeState.userModule)
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logOut())
    }

    return <section className="app-header full">
        <div className="header-content main-layout">
            <main className="flex space-between align-center">
                <NavLink to="/"><h1>MDClone Challenge</h1></NavLink>
                {user && <h3>Hello, {user.name}</h3>}
                <nav className="flex">
                    <NavLink to="/user">Users</NavLink>
                    {user ?
                        <a onClick={onLogout}>Logout</a>
                        :
                        <NavLink to="/login">Login</NavLink>}
                </nav>
            </main>
        </div>
    </section >
}