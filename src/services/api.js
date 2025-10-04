// MOCK USER DATA
const users = {
  'employee@test.com': { id: 1, name: 'John Doe', email: 'employee@test.com', role: 'Employee' },
  'manager@test.com': { id: 2, name: 'Jane Smith', email: 'manager@test.com', role: 'Manager' },
  'admin@test.com': { id: 3, name: 'Super Admin', email: 'admin@test.com', role: 'Admin' },
};

// MOCK EXPENSE DATA
const mockExpenses = [
  { id: 101, date: '2025-10-01', merchant: 'Uber', amount: '$25.50', category: 'Travel', description: 'Trip to client office', status: 'Approved' },
  { id: 102, date: '2025-09-28', merchant: 'Starbucks', amount: '$7.20', category: 'Meals', description: 'Coffee with client', status: 'Approved' },
  { id: 103, date: '2025-10-02', merchant: 'Amazon AWS', amount: '$150.00', category: 'Software', description: 'Monthly server costs', status: 'Pending' },
  { id: 104, date: '2025-09-25', merchant: 'The Grand Hotel', amount: '$450.80', category: 'Travel', description: 'Stay for conference', status: 'Rejected' },
];

// MOCK APPROVALS DATA
const mockApprovals = [
    { id: 201, employeeName: 'Alice Johnson', project: 'Project Phoenix', amount: '$150.00', submissionDate: '2025-10-02', description: 'Monthly server costs' },
    { id: 202, employeeName: 'Bob Williams', project: 'Project Titan', amount: '$85.40', submissionDate: '2025-10-01', description: 'Team lunch' },
];


// --- MOCK API FUNCTIONS ---

// Simulates a network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const loginUser = async (email, password) => {
  await delay(500);
  if (password === '123' && users[email]) {
    return Promise.resolve(users[email]);
  } else {
    return Promise.reject(new Error('Invalid email or password.'));
  }
};

export const getMyExpenses = async () => {
  await delay(500);
  return Promise.resolve(mockExpenses);
};

export const getPendingApprovals = async () => {
  await delay(500);
  return Promise.resolve(mockApprovals);
};