import BASE_URL from './services/api';

function UpdateUser() {

    const updateUser = async () => {

        const updatedUser = {
            id: 11,
            name: "Updated Name",
            emailid: "updated@test.com"
        }

        const response = await fetch(`${BASE_URL}/${updatedUser.id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        });

        const data = await response.json();
        if(response.ok) {
            alert('User updated successfully!');   
        }

    }
    return (
        <div>
            <h3>Update User</h3>
            <button onClick={updateUser}>Update User</button>
        </div>
    );

}

export default UpdateUser;