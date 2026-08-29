import { useReducer } from "react";

const initialState = {
    name: "",
    email: ""
};

function reducer(state, action) {

    switch (action.type) {

        case "SET_NAME":
            return {
                ...state,
                name: action.value
            };

        case "SET_EMAIL":
            return {
                ...state,
                email: action.value
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

function ReducerExample() {

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div>

            <h2>User Form</h2>

            <input
                type="text"
                placeholder="Enter name"
                value={state.name}
                onChange={(e) =>
                    dispatch({
                        type: "SET_NAME",
                        value: e.target.value
                    })
                }
            />

            <br />

            <input
                type="email"
                placeholder="Enter email"
                value={state.email}
                onChange={(e) =>
                    dispatch({
                        type: "SET_EMAIL",
                        value: e.target.value
                    })
                }
            />

            <br />

            <button
                onClick={() =>
                    dispatch({
                        type: "RESET"
                    })
                }
            >
                Reset
            </button>

            <h3>Preview</h3>

            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>

        </div>
    );
}

export default ReducerExample;