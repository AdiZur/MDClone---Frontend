import { AvatarGenerator } from 'random-avatar-generator';
import { utilService } from '../services/util.service';

export const UserPreview = ({ user }) => {

    const generator = new AvatarGenerator();


    return <div className="user-preview">
        <div className="user-img">
            <img src={generator.generateRandomAvatar()} />
        </div>
        <div>
            <h4>{utilService.capitalizeWords(user.name)}</h4>
            <p>{user.email}</p>
        </div>
    </div>
}