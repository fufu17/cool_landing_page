import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { monthlySpending } from '../data/sampleData';

export default function SpendingLineChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Spending Over Last 6 Months
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={monthlySpending}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis
            stroke="#6b7280"
            tickFormatter={(value: number) => `$${value}`}
          />
          <Tooltip
            formatter={(value: number) => [
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(value),
              'Spending',
            ]}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 5, fill: '#6366f1' }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
