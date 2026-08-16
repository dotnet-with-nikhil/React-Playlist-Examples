function CardChildren({ children }) {

    return (

        <div
            style={{
                border: "2px solid gray",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
        >

            {children}

        </div>

    );

}

export default CardChildren;