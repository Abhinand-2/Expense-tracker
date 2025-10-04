import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import ApprovalTable from '../components/dashboard/ApprovalTable';

const ManagerDashboard = () => {
  return (
    <PageWrapper>
      <Card title="Approvals Overview">
        <ApprovalTable />
      </Card>
    </PageWrapper>
  );
};

export default ManagerDashboard;