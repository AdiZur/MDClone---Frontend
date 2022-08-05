import { useEffect, useState } from "react"
import { UsersList } from "../cmps/users-list"
import { userService } from "../services/user.service"

export const UsersPage = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        try {
            let users = await userService.getUsers()
            console.log('users', users)
            setUsers(users)
        } catch (err) {
            console.log('Cannot get users', err)
        }
    }

    if (!users) return <div>Loading...</div>
    return <div className="users-page">
        <UsersList users={users} />
    </div>
}