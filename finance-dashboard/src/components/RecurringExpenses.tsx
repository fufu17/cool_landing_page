import {
  recurringExpenses,
  totalRecurringMonthly,
  totalRecurringAnnual,
} from '../data/sampleData';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export default function RecurringExpenses() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recurring Expenses</h2>

      <div className="space-y-3 mb-4">
        {recurringExpenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between py-2 border-b border-gray-100"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">
                {expense.description}
              </p>
              <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium mt-1">
                {expense.category}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-red-500">
                {formatCurrency(expense.monthlyCost)}/mo
              </p>
              <p className="text-xs text-gray-400">
                {formatCurrency(expense.monthlyCost * 12)}/yr
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">Total Recurring</span>
          <div className="text-right">
            <p className="text-sm font-bold text-red-500">
              {formatCurrency(totalRecurringMonthly)}/mo
            </p>
            <p className="text-xs font-medium text-gray-500">
              {formatCurrency(totalRecurringAnnual)}/yr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
