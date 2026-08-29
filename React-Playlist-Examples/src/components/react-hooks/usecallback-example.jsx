import {
    memo,
    useCallback,
    useState
} from "react";

function UserList({ onDelete }) {

    console.log("UserList rendered");

    return (
        <div>

            <h3>User List</h3>

            <button onClick={() => onDelete(1)}>
                Delete John
            </button>

        </div>
    );
}

const MemoizedUserList = memo(UserList);


function UseCallbackExample() {

    const [count, setCount] = useState(0);

    const [users] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "Sarah" }
    ]);


    const handleDelete = useCallback((id) => {

        console.log("Deleting user:", id);

    }, []);


    return (
        <div>

            <h2>useCallback Example</h2>

            <p>Count: {count}</p>

            <button
                onClick={() =>
                    setCount(c => c + 1)
                }
            >
                Count
            </button>


            <MemoizedUserList
                users={users}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default UseCallbackExample;