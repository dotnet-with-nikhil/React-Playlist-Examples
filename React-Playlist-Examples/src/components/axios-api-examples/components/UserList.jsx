import { useEffect, useState } from "react";
import api from "../api/axios";

function UserList() {

    const[users, setUsers] = useState([]);

    const loadUsers = async () => {

        try{
            const response = await api.get('/');
            console.log('Response:', response.data);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }

    };

    useEffect(() => {
        loadUsers();
    }, []);

    return(
        <div>
            <h2>Users</h2>

            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <p>UserName : {user.name} - EmailId: {user.emailid} </p>
                        </div>
                    );
                })
            }


        </div>
    )

}

export default UserList;



