import { useState } from "react";

function UserForm(){

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
   
    function handleClick(){
        alert('clicked called');
    }

    function increment(){
        setCount(count + 1);
    }

    function handleChange(event){
        setName(event.target.value);
    }

    return(
        <div>

            <button onClick={handleClick}>Click me</button>

            <p>Click event with useState</p>
            <button onClick={increment}>Increment</button>
            <p>Count : {count}</p>

            <h4>OnChange Example</h4>

            <input type="text" placeholder="Enter the Name" onChange={handleChange} />
            <p>Your Name : {name}</p>
        </div>
    );

}

export default UserForm;