import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

const ExpenseForm = ({ expense, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    date: '',
    merchant: '',
    amount: '',
    category: 'Travel',
    description: '',
    receipt: null,
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        date: expense.date,
        merchant: expense.merchant,
        amount: expense.amount.replace(/[^0-9.]/g, ''), // remove currency symbol for editing
        category: expense.category,
        description: expense.description,
        receipt: null,
      });
    }
  }, [expense]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleFileChange = (e) => {
    setFormData((prev) => ({...prev, receipt: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const categories = [
    { value: 'Travel', label: 'Travel' },
    { value: 'Meals', label: 'Meals & Entertainment' },
    { value: 'Software', label: 'Software & Subscriptions' },
    { value: 'Office', label: 'Office Supplies' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Date of Expense" id="date" type="date" value={formData.date} onChange={handleChange} required />
        <Input label="Merchant" id="merchant" value={formData.merchant} onChange={handleChange} placeholder="e.g., Uber, Starbucks" required />
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Amount" id="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="0.00" required />
        <Select label="Category" id="category" value={formData.category} onChange={handleChange} options={categories} required />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea 
          id="description" 
          rows="3"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.description}
          onChange={handleChange}
          placeholder="e.g., Client meeting lunch"
        ></textarea>
      </div>
      <div>
        <label htmlFor="receipt" className="block text-sm font-medium text-gray-700">Receipt (Optional)</label>
        <input type="file" id="receipt" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"/>
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">{expense ? 'Update Expense' : 'Add Expense'}</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;