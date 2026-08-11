function UserProfile() {

  // User information
  const user = {
    name: "Nikhil Parate",
    role: "Senior React Developer"
  };

  return (
    <div className="card">

      {/* Profile Heading */}
      <h2>User Profile</h2>

      {/* Display user name */}
      <p>Name: {user.name}</p>

      {/* Display designation */}
      <p>Role: {user.role}</p>

      {/* Future feature */}
      {/*
        <button>Edit Profile</button>
      */}

    </div>
  );
}

export default UserProfile;