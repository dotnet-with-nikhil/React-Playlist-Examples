import api from "../api/axios";

function DeleteUser() {

    const deleteUser = async () => {

        await api.delete('/9');
        alert('User deleted successfully!');

    }

    return (
        <div>
            <button onClick={deleteUser}>Delete User</button>
        </div>

    )

}

export default DeleteUser;