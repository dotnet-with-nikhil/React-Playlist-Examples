function ProfileCard() {
  const image = "https://placehold.co/600x400/png";

  function showMessage() {
    alert("Welcome to React!");
  }

  return (
    <div className="card">
      <img
        src={image}
        alt="Profile"
        width="150"
      />

      <h2 title="Employee Name">
        Nikhil Parate
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
      />

      <button onClick={showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default ProfileCard;