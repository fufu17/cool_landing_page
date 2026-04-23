import SummaryBar from './components/SummaryBar';
import SpendingPieChart from './components/SpendingPieChart';
import SpendingLineChart from './components/SpendingLineChart';
import BudgetTracker from './components/BudgetTracker';
import RecurringExpenses from './components/RecurringExpenses';
import InsightsPanel from './components/InsightsPanel';
import TransactionsTable from './components/TransactionsTable';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Personal Finance Dashboard</h1>
        <p className="text-gray-500 mt-1">Track your income, expenses, and savings</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-6">
        <SummaryBar />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpendingPieChart />
          <SpendingLineChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BudgetTracker />
          <div className="grid grid-cols-1 gap-6">
            <RecurringExpenses />
            <InsightsPanel />
          </div>
        </div>

        <TransactionsTable />
      </main>
    </div>
  );
}
