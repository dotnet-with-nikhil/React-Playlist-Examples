import { UserContext } from './UserContext';
import { useContext } from 'react';

function UserProfileContextAPI() {
 
    const userObj = useContext(UserContext);
    return <h2>Welcome, {userObj.userName}!</h2>

}
export default UserProfileContextAPI;