function UserCard() {
  return (
    <div className="card">
      <h2>Nikhil Parate</h2>
      <p>Senior React Developer</p>
      <button onClick={() => console.log('Viewing profile for Nikhil Parate')}>View Profile</button>
    </div>
  );
}

export default UserCard;