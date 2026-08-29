import { useRef } from "react";

function UnControlledComponent(){

    var inputRef = useRef(null);

    const handleClick = () => {
        alert(inputRef.current.value)
    }

    return (
          <>
        <input
            type="text"
            ref={inputRef}
            placeholder="Enter Name"
        />

        <button onClick={handleClick}>
            Show Value
        </button>
    </>
    )

}

export default UnControlledComponent;