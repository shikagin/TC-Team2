import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUsers, FaRegChartBar, FaUser, FaPowerOff } from 'react-icons/fa';
import Logo from "../assets/Logo.svg";

// SideBarButton Component
const SideBarButton = ({ icon, label, handleNavigation }) => {
  return (
    <li className="flex items-center cursor-pointer w-full">
      <button
        onClick={handleNavigation}
        className="w-60 flex items-center gap-2 bg-white text-[#00ACE8] hover:bg-[#00ACE8] hover:text-white active:bg-[#00ACE8] active:text-white rounded-md p-2 shadow-sm"
      >
        <span className="text-xl">{icon}</span> {label}
      </button>
    </li>
  );
};

const SideBar = ({ role }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  
  // Unified object containing links for all roles
  const roleLinks = {
    admin: [
      { path: '/employees', icon: <FaUsers />, label: 'Employees' },
      { path: '/HRs', icon: <FaUsers />, label: 'HRs' },
      { path: '/check', icon: <FaRegChartBar />, label: 'Check' },
      { path: '/account-creation', icon: <FaRegChartBar />, label: 'HRs' },
    ],
    RH: [
      { path: '/dashboard', icon: <FaRegChartBar />, label: 'Dashboard' },
      { path: '/employee-list', icon: <FaUsers />, label: 'Employee list' },
      { path: '/task-list', icon: <FaUsers />, label: 'Tasks list' },

    ],
    employee: [
      { path: 'employee-dashboard', icon: <FaUser />, label: 'Dashboard' },
      { path: 'employee-tasks', icon: <FaUsers />, label: 'Tasks' },
    ],
  };

  // Get links for the specific role
  const links = roleLinks[role] || [];

  return (
    <nav className="card fixed top-0 left-0 h-screen w-[240px] bg-white p-5 shadow-md flex flex-col justify-between z-20">
      {/* Logo Link */}
      <div className="flex justify-center mb-4"> {/* Center the logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-16 pb-6 object-contain" src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Dynamic Role-Specific Links */}
      <ul className="w-full flex flex-col gap-2 mb-auto">
        {links.map((link, index) => (
          <SideBarButton
            key={index}
            icon={link.icon}
            label={link.label}
            handleNavigation={() => navigate(`/${role}${link.path}`)}
          />
        ))}
      </ul>

      {/* Disconnect Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => handleNavigation('/')}
          className="justify-center  w-52 flex items-center gap-2 bg-[#FF4D4F] text-white hover:bg-red-600 rounded-md p-2 shadow-sm"
        >
          <FaPowerOff size={12} /> Log out
        </button>
      </div>
    </nav>
  );
};

export default SideBar;
