import {useRef} from 'react'

function Login(){

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }

    return(
        <>

            <input ref={inputRef}/>

            <button onClick={focusInput}>Focus Input</button>
        </>
    )

}

export default Login;