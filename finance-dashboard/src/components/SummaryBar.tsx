import { totalIncome, totalExpenses, netSavings } from '../data/sampleData';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

interface SummaryCardProps {
  label: string;
  value: number;
  color: string;
}

function SummaryCard({ label, value, color }: SummaryCardProps) {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{formatCurrency(value)}</p>
    </div>
  );
}

export default function SummaryBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <SummaryCard label="Total Income" value={totalIncome} color="text-green-600" />
      <SummaryCard label="Total Expenses" value={totalExpenses} color="text-red-500" />
      <SummaryCard
        label="Net Savings"
        value={netSavings}
        color={netSavings >= 0 ? 'text-blue-600' : 'text-red-500'}
      />
    </div>
  );
}
