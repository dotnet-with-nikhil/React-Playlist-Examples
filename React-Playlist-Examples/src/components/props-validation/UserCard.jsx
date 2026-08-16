import PropTypes from "prop-types";

function UserCard({
    name,
    age,
    isActive,
    skills,
    address,
    onViewProfile
}) {
    return (
        <div>
            <h2>{name}</h2>

            <p>Age: {age}</p>

            <p>
                Status: {isActive ? "Active" : "Inactive"}
            </p>

            <p>
                Skills: {skills.join(", ")}
            </p>

            <p>
                Address: {address.city}, {address.country}
            </p>

            <button onClick={onViewProfile}>
                View Profile
            </button>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,

    age: PropTypes.number.isRequired,

    isActive: PropTypes.bool,

    skills: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,

    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }).isRequired,

    onViewProfile: PropTypes.func.isRequired
};

export default UserCard;