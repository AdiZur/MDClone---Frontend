import { utilService } from '../services/util.service';

export const UserPreview = ({ user }) => {
    return <div className="user-preview">
        <div className="user-img">
            <img src={user.imgUrl} />
        </div>
        <div>
            <h4>{utilService.capitalizeWords(user.name)}</h4>
            <p>{user.email}</p>
        </div>
    </div>
}