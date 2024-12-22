import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

// Admin Pages
import Employees from './pages/admin/Employees';
import HRs from './pages/admin/HRs';
import Check from './pages/admin/Check';
import AccountCreation from './pages/admin/AccountCreation';

// Employee Pages
import HomeEmployee from './pages/employee/HomeEmployee';
import LeaveList from './pages/employee/LeaveList';
import TaskList from './pages/employee/TaskList';
import Attendance from './pages/employee/Attendance';

// RH Pages
import AssignTask from './pages/RH/AssignTask';
import EmployeeInfo from './pages/RH/EmployeeInfo';
import LeaveListRH from './pages/RH/LeaveListRH';
import TaskListRH from './pages/RH/TaskListRH';
import Dashboard from './pages/RH/Dashboard';
import SpecificStats from './pages/RH/SpecificStats';
import Predictions from './pages/RH/Predictions';
import EmployeeList from './pages/RH/EmployeeList';

// Login Page
import LogIn from './pages/LogIn';

// Main Layout for Sidebar and Footer
function MainLayout({role, children }) {
  return (
    <div className="flex">
      <SideBar role={role}/>
      <TopBar />
      <div className="flex-grow">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login page without sidebar */}
        <Route path="/" element={<LogIn />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <MainLayout role="admin">
              <Routes>
                <Route path="/employees" element={<Employees />} />
                <Route path="/HRs" element={<HRs />} />
                <Route path="/check" element={<Check />} />
                <Route path="/account-creation" element={<AccountCreation />} />
              </Routes>
            </MainLayout>
          }
        />

        {/* Employee Routes */}
        <Route
          path="/employee/*"
          element={
            <MainLayout role="employee">
              <Routes>
                <Route path="/tasklist" element={<TaskList />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leavelist" element={<LeaveList />} />
              </Routes>
            </MainLayout>
          }
        />

        {/* RH Routes */}
        <Route
          path="/RH/*"
          element={
            <MainLayout role="RH">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="/task-list" element={<TaskListRH />} />
                <Route path="/leave-list" element={<LeaveListRH />} />
                <Route path="/assign-task" element={<AssignTask />} />
                <Route path="/employee-info" element={<EmployeeInfo />} />
                <Route path="/specific-stats" element={<SpecificStats />} />
                <Route path="/predictions" element={<Predictions />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
