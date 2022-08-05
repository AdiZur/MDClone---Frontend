import { UserPreview } from "./user-preview"

export const UsersList = ({ users }) => {
    return <div className="users-list">
        {users.map(user => <UserPreview key={user._id} user={user} />)}
    </div>
}

