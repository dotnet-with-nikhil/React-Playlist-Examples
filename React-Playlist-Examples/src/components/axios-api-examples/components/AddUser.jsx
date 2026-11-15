import api from "../api/axios";

function AddUser() {

    const addUser = async () => {

        const respose = await api.post('/', {
            id: 12,
            name: "Test User",
            emailid: "testuser@example.com"
        });

        console.log('User added:', respose.data);
        alert('User added successfully!');

    }

    return (

        <div>
            <button onClick={addUser}>Add User</button>
        </div>

    );

}

export default AddUser;