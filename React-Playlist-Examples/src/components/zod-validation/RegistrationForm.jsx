import { useState } from "react";
import { userSchema  } from "../zod-validation/userSchema";

function RegistrationForm() {
  

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        age: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = userSchema.safeParse({
            ...formData,
            age: Number(formData.age),
        });

        
        console.log(result);
        if(!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return;
        }

        setErrors({});
        alert("Registration Successful!");
        console.log(result.data);
        setFormData({
            fullName: "",
            email: "",
            password: "",
            age: "",
        });
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit} className="card shadow-sm border-0 p-4">
                        <div className="mb-4">
                            <h2 className="card-title text-center mb-1">Create an account</h2>
                            <p className="text-body-secondary text-center mb-0">
                                Register to get started
                            </p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label fw-semibold">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`form-control${errors.fullName ? " is-invalid" : ""}`}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                                <div className="invalid-feedback">{errors.fullName[0]}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-control${errors.email ? " is-invalid" : ""}`}
                                placeholder="name@example.com"
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email[0]}</div>
                            )}
                        </div>

                        <div className="row">
                            <div className="col-md-7 mb-3">
                                <label htmlFor="password" className="form-label fw-semibold">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`form-control${errors.password ? " is-invalid" : ""}`}
                                    placeholder="At least 6 characters"
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password[0]}</div>
                                )}
                            </div>

                            <div className="col-md-5 mb-3">
                                <label htmlFor="age" className="form-label fw-semibold">
                                    Age
                                </label>
                                <input
                                    id="age"
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className={`form-control${errors.age ? " is-invalid" : ""}`}
                                    placeholder="18+"
                                    min="18"
                                />
                                {errors.age && (
                                    <div className="invalid-feedback">{errors.age[0]}</div>
                                )}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;