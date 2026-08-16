function UserCards({
    name = "Guest",
    age = 29,
    city = "Unknown"

}) {
    return (
        <div  style={{
                    border: "1px solid gray",
                    padding: "20px",
                    margin: "10px",
                    borderRadius: "10px"
                }}>

            <h1>Props Examples</h1>    
            <h2>{name}</h2>    
            <p>{age}</p>
            <p>{city}</p>

        </div>
    )
}

export default UserCards;


