import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinkClasses = "text-sm font-medium text-gray-500 hover:text-gray-900";
  const activeNavLinkClasses = "text-sm font-medium text-indigo-600";

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Logo className="h-8 w-auto text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">ExpenseHub</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
             <NavLink to="/dashboard" className={({isActive}) => isActive ? activeNavLinkClasses : navLinkClasses}>My Expenses</NavLink>
             {user && (user.role === 'Manager' || user.role === 'Admin') && (
                <NavLink to="/approvals" className={({isActive}) => isActive ? activeNavLinkClasses : navLinkClasses}>Approvals</NavLink>
             )}
             {user && user.role === 'Admin' && (
                <NavLink to="/admin" className={({isActive}) => isActive ? activeNavLinkClasses : navLinkClasses}>Admin Panel</NavLink>
             )}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              title="Logout"
            >
              <FaSignOutAlt size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;