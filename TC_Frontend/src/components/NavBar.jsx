import React from 'react'
import { useNavigate } from "react-router-dom";



const NavBar=() => {


        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [searchQuery, setSearchQuery] = useState("");

        const navigate = useNavigate();
      
        const handleNavigation = (path) => {
          navigate(path);
        };

        const toggeleMenu =()=>{
            setIsMenuOpen((prev)=>!prev);
        }

        const openSettings = () => {
            //console.log("Opening settings...");
        };


  return (
    <></>
    //Replace with UI later 
  )
}

export default NavBar