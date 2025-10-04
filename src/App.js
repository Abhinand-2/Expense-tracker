import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './utils/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/" element={!user ? <Navigate to="/login" /> : <Navigate to="/dashboard" /> } />

          {/* Employee Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute roles={['Employee', 'Manager', 'Admin']}>
                <EmployeeDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Manager Routes */}
          <Route 
            path="/approvals" 
            element={
              <ProtectedRoute roles={['Manager', 'Admin']}>
                <ManagerDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute roles={['Admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;