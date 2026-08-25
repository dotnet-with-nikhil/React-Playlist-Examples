import { use, useState } from "react";

function EmployeeManager() {

    //multiple state
    const [theme, setTheme] = useState('light');

    const [loading, setLoading] = useState(false);

    //object state
    const [employee, setEmployee] = useState({
        name : "Nikhil",
        designation : "Team lead",
        city : "Pune"
    });

    //Array State
    const [skills, setSkills] = useState([
        "React",
        "JavaScript"
    ]);

    
    const updateEmployee = () => {

        setEmployee((prev) => ({
            ...prev,
            city : "Mumbai"
        }));
    }

    const addSkill = () =>{

        setSkills((prev) => [
            ...prev,
            "Typescript"
        ])

    }

    const toggleTheme = () => {

        setTheme((prev) => 
            prev == "light" ? "Dark" : "light"
        );

    }


    return (
       <div
            style={{
                padding: "20px"
            }}
        >
            <h1>Employee Manager</h1>

            <h2>Theme : {theme}</h2>

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

            <hr />

            <h2>{employee.name}</h2>

            <p>{employee.designation}</p>

            <p>{employee.city}</p>

            <button onClick={updateEmployee}>
                Change City
            </button>

            <hr />

            <h2>Skills</h2>

            <ul>

                {skills.map((skill, index) => (

                    <li key={index}>

                        {skill}

                    </li>

                ))}

            </ul>

            <button onClick={addSkill}>
                Add Skill
            </button>
        </div>
    );
}

export default EmployeeManager;