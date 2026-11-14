import {useEffect, useState} from 'react';
import BASE_URL from './services/api';

function UserList() {
    const [users, setUsers] = useState([]);
 
    const fetchUsers = async () => {
        try {

            const response = await fetch(BASE_URL);

            if(!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            setUsers(data);
        } 
        catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map(user => (
                    
                    <li key={user.id}>
                        <p>Id: {user.id} - Name: {user.name} - Email: {user.emailid} - address: {user.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default UserList;