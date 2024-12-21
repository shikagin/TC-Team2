import React from 'react'
import { useState } from 'react';
import logo from '../assets/Layer2.svg'
import pic1 from '../assets/Group 34214(5).svg'

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
      <div className="flex h-screen w-screen flex-row justify-between bg-color4">
        <div className="flex flex-col bg-color4 mt-[5vh] ml-[5vw] mr-0 mb-0 w-[40vw]">
          <img 
            className="w-[10vw] h-auto mx-auto object-contain" 
            src={logo}
            alt="Logo" 
          />
    
          <h2 className="font-Roboto text-black text-[3em] font-extrabold ml-[7vw] mb-[5vh]">
            Welcome Back
          </h2>
    
          <form className="mb-[1vh]" id="registration-form" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="ml-[1vw] font-Inter" htmlFor="email">
                Email
              </label>
              <input 
                className="bg-color4 border-b-[0.5vh] border-color1 m-[2vh] user-select-none" 
                type="text" 
                id="email" 
                name="email" 
                required  
                value={formData.email} 
                onChange={handleChange}
              />
              {errors.email && (
                <p className="ml-[1vw]" style={{ color: "red", fontSize: "1rem" }}>
                  {errors.email}
                </p>
              )}
            </div>
    
            <div className="flex flex-col">
              <label className="ml-[1vw] mt-[1vw] font-Inter" htmlFor="password">
                Password
              </label>
              <input 
                className="bg-color4 border-b-[0.5vh] mb-[1vw] border-color1 m-[2vh] user-select-none" 
                type="password" 
                id="password" 
                name="password" 
                required 
              />
              {errors.password && (
                <p className="ml-[1vw] mb-[1vh]" style={{ color: "red", fontSize: "1rem" }}>
                  {errors.password}
                </p>
              )}
            </div>
    
            <div>
              <button 
                type="submit" 
                className="ml-[3vw] font-bold text-[1.5em] font-Roboto bg-color1 text-color4 rounded-xl w-[30vw] h-[8vh]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
    
        <img 
          className="object-cover w-[50vw] h-[100vh]" 
          src={pic1} 
          alt="" 
        />
      </div>
  );
}

export default LogIn
