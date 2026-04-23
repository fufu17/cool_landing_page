import { categoryInsights } from '../data/sampleData';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function TrendArrow({ change, changePercent }: { change: number; changePercent: number }) {
  if (change === 0) {
    return (
      <span className="text-xs font-medium text-gray-400">
        &#8212; 0%
      </span>
    );
  }

  const isUp = change > 0;

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium ${
        isUp ? 'text-red-500' : 'text-green-600'
      }`}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className={isUp ? '' : 'rotate-180'}
      >
        <path
          d="M6 2L10 7H2L6 2Z"
          fill="currentColor"
        />
      </svg>
      {Math.abs(changePercent).toFixed(0)}%
    </span>
  );
}

export default function InsightsPanel() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Spending Insights</h2>
      <p className="text-sm text-gray-500 mb-4">
        Top 3 spending categories vs. last month
      </p>

      <div className="space-y-4">
        {categoryInsights.map((insight, index) => (
          <div
            key={insight.category}
            className="flex items-center gap-4 py-3 border-b border-gray-100"
          >
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white shrink-0"
              style={{ backgroundColor: insight.color }}
            >
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">{insight.category}</p>
              <p className="text-xs text-gray-400">
                Last month: {formatCurrency(insight.previousAmount)}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-gray-800">
                {formatCurrency(insight.currentAmount)}
              </p>
              <TrendArrow
                change={insight.change}
                changePercent={insight.changePercent}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
