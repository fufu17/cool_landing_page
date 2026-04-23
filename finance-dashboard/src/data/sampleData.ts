export interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
}

export interface MonthlySpending {
  month: string;
  amount: number;
}

export interface CategorySpending {
  name: string;
  value: number;
  color: string;
}

export const transactions: Transaction[] = [
  { id: 1, date: '2024-06-01', description: 'Whole Foods Market', category: 'Groceries', amount: -127.43 },
  { id: 2, date: '2024-06-02', description: 'Monthly Salary', category: 'Income', amount: 5200.00 },
  { id: 3, date: '2024-06-03', description: 'Netflix Subscription', category: 'Entertainment', amount: -15.99 },
  { id: 4, date: '2024-06-04', description: 'Shell Gas Station', category: 'Transportation', amount: -52.30 },
  { id: 5, date: '2024-06-05', description: 'Rent Payment', category: 'Housing', amount: -1800.00 },
  { id: 6, date: '2024-06-06', description: 'Starbucks Coffee', category: 'Dining', amount: -6.75 },
  { id: 7, date: '2024-06-07', description: 'Freelance Project', category: 'Income', amount: 1500.00 },
  { id: 8, date: '2024-06-08', description: 'Electric Bill', category: 'Utilities', amount: -142.50 },
  { id: 9, date: '2024-06-09', description: 'Amazon Purchase', category: 'Shopping', amount: -89.99 },
  { id: 10, date: '2024-06-10', description: 'Gym Membership', category: 'Health', amount: -49.99 },
  { id: 11, date: '2024-06-11', description: 'Chipotle', category: 'Dining', amount: -12.45 },
  { id: 12, date: '2024-06-12', description: 'Uber Ride', category: 'Transportation', amount: -18.50 },
  { id: 13, date: '2024-06-13', description: 'Spotify Premium', category: 'Entertainment', amount: -9.99 },
  { id: 14, date: '2024-06-14', description: 'Target', category: 'Shopping', amount: -67.23 },
  { id: 15, date: '2024-06-15', description: 'Water Bill', category: 'Utilities', amount: -38.00 },
];

export const monthlySpending: MonthlySpending[] = [
  { month: 'Jan', amount: 3200 },
  { month: 'Feb', amount: 2800 },
  { month: 'Mar', amount: 3500 },
  { month: 'Apr', amount: 3100 },
  { month: 'May', amount: 2950 },
  { month: 'Jun', amount: 2430 },
];

export const categorySpending: CategorySpending[] = [
  { name: 'Housing', value: 1800, color: '#6366f1' },
  { name: 'Groceries', value: 127, color: '#22c55e' },
  { name: 'Transportation', value: 71, color: '#f59e0b' },
  { name: 'Utilities', value: 181, color: '#ef4444' },
  { name: 'Entertainment', value: 26, color: '#8b5cf6' },
  { name: 'Dining', value: 19, color: '#ec4899' },
  { name: 'Shopping', value: 157, color: '#14b8a6' },
  { name: 'Health', value: 50, color: '#f97316' },
];

export const totalIncome = transactions
  .filter((t) => t.amount > 0)
  .reduce((sum, t) => sum + t.amount, 0);

export const totalExpenses = Math.abs(
  transactions.filter((t) => t.amount < 0).reduce((sum, t) => sum + t.amount, 0)
);

export const netSavings = totalIncome - totalExpenses;

export interface BudgetItem {
  category: string;
  limit: number;
  spent: number;
  color: string;
}

export const budgets: BudgetItem[] = categorySpending.map((cat) => ({
  category: cat.name,
  limit: Math.ceil(cat.value * 1.3 / 10) * 10,
  spent: cat.value,
  color: cat.color,
}));

export interface RecurringExpense {
  id: number;
  description: string;
  category: string;
  monthlyCost: number;
}

export const recurringExpenses: RecurringExpense[] = transactions
  .filter((t) =>
    t.amount < 0 &&
    ['Netflix Subscription', 'Spotify Premium', 'Gym Membership'].includes(t.description)
  )
  .map((t, i) => ({
    id: i + 1,
    description: t.description,
    category: t.category,
    monthlyCost: Math.abs(t.amount),
  }));

export const totalRecurringMonthly = recurringExpenses.reduce(
  (sum, e) => sum + e.monthlyCost,
  0
);

export const totalRecurringAnnual = totalRecurringMonthly * 12;

export interface MonthlyCategory {
  month: string;
  category: string;
  amount: number;
}

export const monthlyCategorySpending: MonthlyCategory[] = [
  { month: 'May', category: 'Housing', amount: 1800 },
  { month: 'May', category: 'Groceries', amount: 145 },
  { month: 'May', category: 'Transportation', amount: 85 },
  { month: 'May', category: 'Utilities', amount: 165 },
  { month: 'May', category: 'Entertainment', amount: 32 },
  { month: 'May', category: 'Dining', amount: 28 },
  { month: 'May', category: 'Shopping', amount: 195 },
  { month: 'May', category: 'Health', amount: 50 },
  { month: 'Jun', category: 'Housing', amount: 1800 },
  { month: 'Jun', category: 'Groceries', amount: 127 },
  { month: 'Jun', category: 'Transportation', amount: 71 },
  { month: 'Jun', category: 'Utilities', amount: 181 },
  { month: 'Jun', category: 'Entertainment', amount: 26 },
  { month: 'Jun', category: 'Dining', amount: 19 },
  { month: 'Jun', category: 'Shopping', amount: 157 },
  { month: 'Jun', category: 'Health', amount: 50 },
];

export interface CategoryInsight {
  category: string;
  currentAmount: number;
  previousAmount: number;
  change: number;
  changePercent: number;
  color: string;
}

export const categoryInsights: CategoryInsight[] = categorySpending
  .map((cat) => {
    const current = monthlyCategorySpending.find(
      (m) => m.month === 'Jun' && m.category === cat.name
    );
    const previous = monthlyCategorySpending.find(
      (m) => m.month === 'May' && m.category === cat.name
    );
    const currentAmount = current?.amount ?? 0;
    const previousAmount = previous?.amount ?? 0;
    const change = currentAmount - previousAmount;
    const changePercent =
      previousAmount > 0 ? (change / previousAmount) * 100 : 0;
    return {
      category: cat.name,
      currentAmount,
      previousAmount,
      change,
      changePercent,
      color: cat.color,
    };
  })
  .sort((a, b) => b.currentAmount - a.currentAmount)
  .slice(0, 3);
