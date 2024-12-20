import React from 'react'
import React, { useState } from "react";

const LogIn=()=> {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    // Validation function
    const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    console.log("submiit")

    e.preventDefault();

    setSubmitted(false);
    if (validateForm()) {
      setSubmitted(true);
    }
  };

   // Handle input changes
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  return (

    <div className="form-container"></div>


  )
}

export default LogIn