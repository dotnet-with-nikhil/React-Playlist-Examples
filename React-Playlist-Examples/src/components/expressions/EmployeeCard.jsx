function EmployeeCard() {
    
    const employee = {

        name: "Nikhil",
        designation: "Senior React Developer",
        experience: 15
    };


    function getExperience() {
        return employee.experience + " Years";
    }

    return (

        <div className="card">
            <h2>{employee.name}</h2>
            <p>{employee.designation}</p>
            <p>Experience: {getExperience()}</p>
        </div>

    )

}

export default EmployeeCard;