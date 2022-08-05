import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { eventBusService } from "../services/event-bus.service"
import { userService } from "../services/user.service"

export const AppHeader = () => {

    const [loggedinUser, setLoggedinUser] = useState(userService.getLoggedinUser())

    let removeLoginEvent

    useEffect(() => {
        if (removeLoginEvent) removeLoginEvent()
        eventBusService.on('login', () => loadUser)
        return () => {
            removeLoginEvent()
        }
    }, [])

    const loadUser = () => {
        setLoggedinUser(userService.getLoggedinUser())
    }

    // useEffect(() => {
    //     if (removeLoginEvent) this.removeLoginEvent()
    //     eventBusService.on('login', (user) => loadUser(user))
    // }, [])

    // const loadUser = (user) => {
    //     setLoggedinUser(user)
    // }

    const onLogout = () => {

    }

    return <section className="app-header full">
        <div className="header-content main-layout">
            <main className="flex space-between align-center">
                <NavLink to="/"><h1>MDClone Challenge</h1></NavLink>
                {loggedinUser && <h3>Hello, {loggedinUser.name}</h3>}
                <nav className="flex">
                    <NavLink to="/user">Users</NavLink>
                    {loggedinUser ?
                        <p onClick={onLogout}>Logout</p>
                        :
                        <NavLink to="/login">Login</NavLink>}
                </nav>
            </main>
        </div>
    </section >
}