import InputField from './Input-Components.jsx'
function LandingPageInputType() {
  
    return (
        <>
            <h1>Reusable Component Input Type Fields.</h1>
            <InputField 
                lable = "Titile Task"
                name = "title"
                value = ""
                onChange = {() => {}}
                placeholder = "Enter Task Title"
                type = "text"
                className="form-control"
            ></InputField>

            <InputField 
                lable = "Due Date"
                name = "dueDate"
                onChange = {() => {}}
                placeholder = "Select the Date"
                type = "date"
                className="form-control"
            ></InputField>

            <InputField 
                lable = "Description"
                name = "description"
                onChange = {() => {}}
                placeholder = "Give a brief description of the task"
                type = "textarea"
                className="form-control"
            ></InputField>

        </>
    
  );

}

export default LandingPageInputType;