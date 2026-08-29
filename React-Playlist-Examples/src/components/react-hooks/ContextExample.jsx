import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard(){

    const user = useContext(UserContext);

    return (
        <>
        <h2>
            Welcome {user.name}
        </h2>
        <p>
            
            Role : {user.role}
        </p>
        </>
    )

}

export default Dashboard;