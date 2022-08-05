
export const UserPreview = ({ user }) => {
    return <div className="user-preview">
        <div className="user-img">
            <img src={user.imgUrl} alt="user-img" />
        </div>
        <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
    </div>
}