
export const UserPreview = ({ user }) => {
    return <div className="user-preview">
        <div className="user-img">
            <img src={user.imgUrl} alt="user-img" />
        </div>
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    </div>
}