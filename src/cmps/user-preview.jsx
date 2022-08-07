import { Link } from "react-router-dom"

export const UserPreview = ({ user }) => {
    return <Link to={`/user/${user._id}`}><div className="user-preview">
        <div className="user-img">
            <img src={user.imgUrl} />
        </div>
        <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
    </div></Link>
}