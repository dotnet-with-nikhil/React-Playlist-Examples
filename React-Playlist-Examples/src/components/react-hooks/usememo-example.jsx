import { useMemo, useState } from "react";

function UseMemoExample() {

    const [number, setNumber] = useState(10);
    const [count, setCount] = useState(0);

    const square = useMemo(() => {

        // Simulate an expensive calculation
        let result = number * number;

        for (let i = 0; i < 100000000; i++) {
            result = number * number;
        }

        return result;

    }, [number]);

    return (
        <div>

            <h2>useMemo Example</h2>

            <h3>Square: {square}</h3>

            <p>Number: {number}</p>

            <p>Count: {count}</p>

            <button
                onClick={() =>
                    setNumber(n => n + 1)
                }
            >
                Change Number
            </button>

            <button
                onClick={() =>
                    setCount(c => c + 1)
                }
            >
                Count
            </button>

        </div>
    );
}

export default UseMemoExample;