import { budgets } from '../data/sampleData';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export default function BudgetTracker() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Budget Tracker</h2>
      <div className="space-y-4">
        {budgets.map((item) => {
          const percent = Math.min((item.spent / item.limit) * 100, 100);
          const overBudget = item.spent > item.limit;

          return (
            <div key={item.category}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {item.category}
                </span>
                <span className="text-sm text-gray-500">
                  {formatCurrency(item.spent)}{' '}
                  <span className="text-gray-400">/ {formatCurrency(item.limit)}</span>
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: overBudget ? '#ef4444' : item.color,
                  }}
                />
              </div>
              {overBudget && (
                <p className="text-xs text-red-500 mt-1">
                  Over budget by {formatCurrency(item.spent - item.limit)}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
