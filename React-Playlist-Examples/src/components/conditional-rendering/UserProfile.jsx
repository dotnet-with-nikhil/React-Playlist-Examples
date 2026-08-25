function UserProfile({ user }) {
  
    if(!user.isLoggedIn){
        return (
            <div className="card">
                <h2>Please Login</h2>
            </div>
        )
    }

    return (

        <div className="card">

            <h1> Welcome : {user.name} </h1>

            <p>
                Role : {" "} {user.role === "Admin" ? "Administrator" : "Employee"}
            </p>

            <p>
                Status : 
                {" "}
                {user.isActive ? "Active" : "Inactive"}
            </p>

        </div>

    )

}

export default UserProfile;