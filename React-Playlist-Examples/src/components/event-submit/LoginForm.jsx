import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Submitted Data:", formData);

    alert("Login Successful!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br /><br />
    <p>Email : {formData.email}</p>
      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;