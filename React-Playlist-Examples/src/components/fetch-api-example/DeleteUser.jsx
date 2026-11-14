import BASE_URL from './services/api';

function DeleteUser() {

    const deleteUser = async () => {

        await fetch(`${BASE_URL}/10`, {
            method: 'DELETE'
        });

        alert('User deleted successfully!');

    }
    return (
        <div>
            <h3>Delete User</h3>
            <button onClick={deleteUser}>Delete User</button>
            </div>
    );
}

export default DeleteUser;