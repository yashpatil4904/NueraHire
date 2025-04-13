import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Users, 
  Calendar, 
  History, 
  Settings as SettingsIcon, 
  Briefcase,
  UserPlus,
  LogIn,
  User,
  Plus,
  Search,
  FileCheck,
  MessageSquare,
  ArrowLeft
} from 'lucide-react';
import clsx from 'clsx';

// Import pages
import Dashboard from './pages/Dashboard';
import JobDescriptions from './pages/JobDescriptions';
import Resumes from './pages/Resumes';
import MatchResults from './pages/MatchResults';
import InterviewScheduler from './pages/InterviewScheduler';
import JDHistory from './pages/JDHistory';
import Settings from './pages/Settings';

// New pages for employee functionality
import EmployeeDashboard from './pages/EmployeeDashboard';
import MyResume from './pages/Resume'
import JobSearch from './pages/JobSearch';
import Applications from './pages/Applications';
import Profile from './pages/Profile';

// Auth pages
import Login from './pages/Login';
import Register from './pages/Register';
import RoleSelection from './pages/RoleSelection';

const App = () => {
  const [userRole, setUserRole] = useState<'recruiter' | 'employee' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication function
  const handleLogin = (role: 'recruiter' | 'employee') => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  // Mock logout function
  const handleLogout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
  };

  // If not authenticated, show login/register page
  if (!isAuthenticated) {
    return (
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<RoleSelection onSelectRole={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleLogin} />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // Recruiter layout - focused on job posting and candidate matching
  const RecruiterLayout = () => {
    const navigate = useNavigate();
    
    const handleBack = () => {
      setUserRole(null);
      setIsAuthenticated(false);
      navigate('/');
    };

    return (
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 shadow-lg">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-blue-400">NeuraHire</h1>
                <p className="text-sm text-gray-400 mt-1">Recruiter Portal</p>
              </div>
              <button
                onClick={handleBack}
                className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                title="Back to Role Selection"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>
          <nav className="mt-6">
            <div className="px-4 space-y-1">
              <Link to="/dashboard" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <Home size={20} className="mr-3" />
                <span>Dashboard</span>
              </Link>
              <Link to="/job-descriptions" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <FileText size={20} className="mr-3" />
                <span>Job Descriptions</span>
              </Link>
              <Link to="/resumes" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <Users size={20} className="mr-3" />
                <span>Candidate Resumes</span>
              </Link>
              <Link to="/match-results" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <FileCheck size={20} className="mr-3" />
                <span>Match Results</span>
              </Link>
              <Link to="/scheduler" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <Calendar size={20} className="mr-3" />
                <span>Interview Scheduler</span>
              </Link>
              <Link to="/history" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <History size={20} className="mr-3" />
                <span>JD History</span>
              </Link>
              <Link to="/settings" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <SettingsIcon size={20} className="mr-3" />
                <span>Settings</span>
              </Link>
            </div>
          </nav>
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-300 rounded-lg hover:bg-red-900/50 transition-colors"
            >
              <LogIn size={20} className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/job-descriptions" element={<JobDescriptions />} />
              <Route path="/resumes" element={<Resumes />} />
              <Route path="/match-results" element={<MatchResults />} />
              <Route path="/scheduler" element={<InterviewScheduler />} />
              <Route path="/history" element={<JDHistory />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };

  // Employee layout - focused on resume management and job applications
  const EmployeeLayout = () => {
    const navigate = useNavigate();
    
    const handleBack = () => {
      setUserRole(null);
      setIsAuthenticated(false);
      navigate('/');
    };

    return (
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 shadow-lg">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-blue-400">NeuraHire</h1>
                <p className="text-sm text-gray-400 mt-1">Job Seeker Portal</p>
              </div>
              <button
                onClick={handleBack}
                className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                title="Back to Role Selection"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>
          <nav className="mt-6">
            <div className="px-4 space-y-1">
              <Link to="/employee/dashboard" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <Home size={20} className="mr-3" />
                <span>Dashboard</span>
              </Link>
              <Link to="/employee/resume" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <FileText size={20} className="mr-3" />
                <span>My Resume</span>
              </Link>
              <Link to="/employee/jobs" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <Search size={20} className="mr-3" />
                <span>Job Search</span>
              </Link>
              <Link to="/employee/applications" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <FileCheck size={20} className="mr-3" />
                <span>My Applications</span>
              </Link>
              <Link to="/employee/messages" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <MessageSquare size={20} className="mr-3" />
                <span>Messages</span>
              </Link>
              <Link to="/employee/profile" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                <User size={20} className="mr-3" />
                <span>Profile</span>
              </Link>
            </div>
          </nav>
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-300 rounded-lg hover:bg-red-900/50 transition-colors"
            >
              <LogIn size={20} className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Routes>
              <Route path="/employee" element={<Navigate to="/employee/dashboard" replace />} />
              <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
              <Route path="/employee/resume" element={<MyResume />} />
              <Route path="/employee/jobs" element={<JobSearch />} />
              <Route path="/employee/applications" element={<Applications />} />
              <Route path="/employee/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/employee/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Router>
      {userRole === 'recruiter' ? <RecruiterLayout /> : <EmployeeLayout />}
    </Router>
  );
};

export default App;