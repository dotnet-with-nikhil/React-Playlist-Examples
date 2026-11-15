import api from "../api/axios";

function UpdateUser() {

    const updateUser = async () => {

        const response = await api.put('/12', {
            name: "Updated User nikhil",
            emailid: "updateduser@example.com"
        });

        alert(response.data.name + ' updated successfully!');

    }

    return (
        <div>
            <button onClick={updateUser}>Update User</button>
        </div>
    );
    

}

export default UpdateUser;