import { useState } from 'react';

function PreventDefaultExample(){
    const [count, setCount] = useState(0);

    function handleSubmit(event){        
        // event.preventDefault();
        alert("Form Submitted! Count = " + count);
    }

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <form onSubmit={handleSubmit}>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PreventDefaultExample;