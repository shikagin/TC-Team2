import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { FaUsers, FaHome, FaRegCalendarCheck, FaRegChartBar, FaUser, FaPowerOff, FaTasks } from 'react-icons/fa';
import { MdOutlinePaid } from 'react-icons/md';
import { BiLogIn } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import Logo from "../assets/Logo.svg";

// SideBarButton Component
const SideBarButton = ({ icon, label, path, isActive, handleNavigation }) => {
  return (
    <li className="flex items-center cursor-pointer w-full">
      <button
        onClick={() => handleNavigation(path)}
        className={`w-60 flex items-center gap-2 ${isActive ? 'bg-[#00ACE8] text-white' : 'bg-white text-[#00ACE8]'} 
        hover:bg-[#00ACE8] hover:text-white active:bg-[#00ACE8] active:text-white rounded-md p-2 shadow-sm`}
      >
        <span className="text-xl">{icon}</span> {label}
      </button>
    </li>
  );
};

const SideBar = ({ role }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // To track the current route

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Unified object containing links for all roles
  const roleLinks = {
    admin: [
      { path: '/employees', icon: <FaUsers />, label: 'Employees' },
      { path: '/HRs', icon: <FaUsers />, label: 'HRs' },
      { path: '/check', icon: <BiLogIn />, label: 'Check' },
      { path: '/account-creation', icon: <FiUserPlus />, label: 'Create Account' },
    ],
    RH: [
      { path: '/dashboard', icon: <FaRegChartBar />, label: 'Dashboard' },
      { path: '/employee-list', icon: <FaUsers />, label: 'Employee list' },
      { path: '/task-list', icon: <FaTasks />, label: 'Tasks list' },
    ],
    employee: [
      { path: '/tasklist', icon: <FaTasks />, label: 'Tasks' },
      { path: '/leavelist', icon: <MdOutlinePaid />, label: 'Paid leave' },
      { path: '/attendance', icon: <FaRegCalendarCheck />, label: 'Attendance' },
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
            path={`/${role}${link.path}`} // Add role prefix to path
            isActive={location.pathname === `/${role}${link.path}`} // Check if the current path matches
            handleNavigation={handleNavigation}
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
