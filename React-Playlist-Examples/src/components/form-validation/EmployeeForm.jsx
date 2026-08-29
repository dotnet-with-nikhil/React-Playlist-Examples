import { useState } from "react";

function EmployeeForm() {
  const initialState = {
    fullName: "",
    email: "",
    department: "",
    gender: "",
    skills: [],
    acceptTerms: false,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "skills") {
      let updatedSkills = [...formData.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter(
          (skill) => skill !== value
        );
      }

      setFormData({
        ...formData,
        skills: updatedSkills,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.department ||
      !formData.gender ||
      !formData.acceptTerms
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Employee Registered Successfully!");

    console.log(formData);

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      <br /><br />

      <label>Gender</label>

      <br />

      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      />
      Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />
      Female

      <br /><br />

      <label>Skills</label>

      <br />

      <input
        type="checkbox"
        name="skills"
        value="React"
        checked={formData.skills.includes("React")}
        onChange={handleChange}
      />
      React

      <input
        type="checkbox"
        name="skills"
        value=".NET"
        checked={formData.skills.includes(".NET")}
        onChange={handleChange}
      />
      .NET

      <input
        type="checkbox"
        name="skills"
        value="Azure"
        checked={formData.skills.includes("Azure")}
        onChange={handleChange}
      />
      Azure

      <br /><br />

      <input
        type="checkbox"
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
      />

      I accept Terms & Conditions

      <br /><br />

      <button type="submit">
        Register
      </button>
    </form>
  );
}

export default EmployeeForm;