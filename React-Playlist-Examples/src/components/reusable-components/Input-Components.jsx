function InputField({
    lable,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    className = "form-control"
}){

    return (

        <div  className="mb-3">
            <lable className="form-label">
                {lable}
            </lable>
            <br/>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                className={className}>
            </input>
        </div>
    );
}

export default InputField;