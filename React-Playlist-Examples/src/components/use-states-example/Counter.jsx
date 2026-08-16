import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }}
        >
            <h1>Counter App</h1>

            <h2>{count}</h2>

            <button onClick={increment}>
                Increment
            </button>

            <button
                onClick={decrement}
                style={{ marginLeft: "10px" }}
            >
                Decrement
            </button>

            <button
                onClick={reset}
                style={{ marginLeft: "10px" }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;