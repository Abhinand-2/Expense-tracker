import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';

const AdminDashboard = () => {
  return (
    <PageWrapper>
      <Card title="Admin Panel">
        <p className="text-gray-600">
          Welcome, Admin. Here you can manage users, define approval workflows, and view company-wide analytics.
        </p>
        {/* Placeholder for future admin components */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-semibold text-gray-800">User Management</h4>
                <p className="text-sm text-gray-500 mt-1">Create, edit, and assign roles to employees and managers.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-semibold text-gray-800">Approval Rules</h4>
                <p className="text-sm text-gray-500 mt-1">Configure multi-level and conditional approval flows.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-semibold text-gray-800">All Expenses</h4>
                <p className="text-sm text-gray-500 mt-1">View and manage all expense reports across the company.</p>
            </div>
        </div>
      </Card>
    </PageWrapper>
  );
};

export default AdminDashboard;