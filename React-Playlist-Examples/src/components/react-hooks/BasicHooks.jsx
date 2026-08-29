import { useState } from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    return (
        <>

            <h1> useStata hook example</h1>
            <h5> Count : {count}</h5>

            <button onClick={() => setCount(count + 1)} >Click me</button>
            <p>
                <b>Common Uses</b>
                Counter
                Form fields
                Dropdown
                Modal
                Search box
                Selected item
                Toggle button
            </p>
        </>

    )
}

export default Counter;