import BASE_URL from './services/api';

function AddUser() {

    const addUser = async () => {
        const newUser = {
            id: 10,
            name: "Nikhil",
            emailid: "nikhil@test.com"
        }

        const response = await fetch(BASE_URL, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();

        if(response.ok) {
            alert('User added successfully!');
        }
        console.log('Response:', data);

    }
    return (
        <div>
            <h3>Add User</h3>
            <button onClick={addUser}>Add User</button>
        </div>
    );
}

export default AddUser;