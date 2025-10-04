import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ExpenseTable from '../components/dashboard/ExpenseTable';
import ExpenseForm from '../components/dashboard/ExpenseForm';
import Modal from '../components/common/Modal';
import { FaPlus } from 'react-icons/fa';

const EmployeeDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  const handleOpenModal = () => {
    setEditingExpense(null);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    if (editingExpense) {
      // Logic to update an existing expense
      alert(`Updating expense: ${editingExpense.id}`);
    } else {
      // Logic to add a new expense
      alert(`Adding new expense for merchant: ${formData.merchant}`);
    }
    console.log(formData);
    handleCloseModal();
    // Here you would typically re-fetch the expenses list or update the state
  };

  return (
    <PageWrapper>
      <Card
        title="My Expenses"
        actions={<Button onClick={handleOpenModal}><FaPlus className="mr-2"/> Add Expense</Button>}
      >
        <ExpenseTable onEdit={handleEditExpense} />
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingExpense ? 'Edit Expense' : 'Add New Expense'}
      >
        <ExpenseForm 
          expense={editingExpense} 
          onSubmit={handleFormSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </PageWrapper>
  );
};

export default EmployeeDashboard;