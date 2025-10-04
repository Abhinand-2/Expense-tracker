import React, { useState, useEffect } from 'react';
import { getMyExpenses } from '../../services/api';
import { FaPen, FaTrash } from 'react-icons/fa';
import Spinner from '../common/Spinner';

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
  };
  return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[status]}`}>{status}</span>;
};


const ExpenseTable = ({ onEdit }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getMyExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      // Placeholder for delete logic
      alert(`Deleting expense ID: ${id}`);
      setExpenses(expenses.filter(e => e.id !== id));
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64"><Spinner /></div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {expenses.length > 0 ? expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.merchant}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{expense.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">{expense.description}</td>
              <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={expense.status} /></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                {expense.status === 'Pending' && (
                  <>
                    <button onClick={() => onEdit(expense)} className="text-indigo-600 hover:text-indigo-900"><FaPen /></button>
                    <button onClick={() => handleDelete(expense.id)} className="text-red-600 hover:text-red-900"><FaTrash /></button>
                  </>
                )}
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">You have not submitted any expenses yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;