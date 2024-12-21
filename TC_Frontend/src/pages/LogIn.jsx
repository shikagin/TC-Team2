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

    <div className='flex h-full w-full flex-row justify-between'>

  
    <div className="flex flex-col bg-color4  mt-20 ml-20 mr-0 mb-0  ">

        <img 
            className="w-[116px] h-[104.59px] mx-auto object-contain" 
            src={logo}
            alt="Logo" 
        />

        <h2 className="font-Roboto text-black text-6xl font-extrabold ml-3 mb-20">Welcome Back</h2>


      <form  className="mb-2" id="registration-form" onSubmit={handleSubmit} >

    
        <div className="flex flex-col">

          <label className=" ml-4 font-Inter" htmlFor="email">Email</label>
          <input className=' bg-color4 border-b-[2px] border-color1 m-4 user-select-none' type="text" id="email" name="email" required  value={formData.email} onChange={handleChange}/>
          
            {errors.email && (
            <p className="ml-4"style={{   color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>
        <div>
            <img src="" alt="" />
        </div>

        <div className="flex flex-col">
          <label className="ml-4 font-Inter" htmlFor="password">Password</label>
          <input   className="bg-color4 border-b-[2px] border-color1 m-4 user-select-none"   type="password"   id="password"    name="password"    user-select-none    required 
         />

          {errors.password && (
            <p className="ml-4 mb-2" style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>
          )}
        </div>


        <div >
             <button 
                 type="submit" 
                 className="ml-3 font-bold text-2xl font-Roboto bg-color1 text-color4 rounded-xl w-[410px] h-[70px]">
                 Login
            </button>
        </div>
      </form>
    </div>


    
    <img className =" object-cover " src={pic1} alt="" />

    </div>


  )
}

export default LogIn