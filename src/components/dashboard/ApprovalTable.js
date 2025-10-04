import React, { useState, useEffect } from 'react';
import { getPendingApprovals } from '../../services/api';
import { FaCheck, FaTimes, FaCommentDots } from 'react-icons/fa';
import Button from '../common/Button';
import Spinner from '../common/Spinner';

const ApprovalTable = () => {
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApprovals = async () => {
      try {
        const data = await getPendingApprovals();
        setApprovals(data);
      } catch (error) {
        console.error("Error fetching approvals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApprovals();
  }, []);

  const handleApprove = (id) => {
    // Placeholder for approve logic
    alert(`Approving expense ID: ${id}`);
    setApprovals(approvals.filter(a => a.id !== id));
  };

  const handleReject = (id) => {
    // Placeholder for reject logic
    const comment = prompt("Please provide a reason for rejection:");
    if (comment) {
      alert(`Rejecting expense ID: ${id} with comment: ${comment}`);
      setApprovals(approvals.filter(a => a.id !== id));
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64"><Spinner /></div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {approvals.length > 0 ? approvals.map((approval) => (
            <tr key={approval.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{approval.employeeName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{approval.project}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{approval.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{approval.submissionDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 flex items-center">
                 <button onClick={() => handleApprove(approval.id)} className="text-green-600 hover:text-green-900" title="Approve"><FaCheck /></button>
                 <button onClick={() => handleReject(approval.id)} className="text-red-600 hover:text-red-900" title="Reject"><FaTimes /></button>
                 <button onClick={() => alert(`Details for ${approval.employeeName}: \n${approval.description}`)} className="text-gray-500 hover:text-gray-700" title="View Details"><FaCommentDots /></button>
              </td>
            </tr>
          )) : (
             <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">No expenses pending approval.</td>
             </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalTable;