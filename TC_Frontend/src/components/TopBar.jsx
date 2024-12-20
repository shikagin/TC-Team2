import React from 'react'
import { useNavigate } from "react-router-dom";

 TopBar=()=> {


            const navigate = useNavigate();
            const handleNavigation = (path) => {
              navigate(path);
            };

            const handleLogut=()=>{

             // localStorage.removeItem("authToken");
             navigate("/login");
            };

            const openSettings = () => {
                console.log("Opening settings...");
            };
            
  return (
    <div>TopBar</div>
  )
}

export default TopBar