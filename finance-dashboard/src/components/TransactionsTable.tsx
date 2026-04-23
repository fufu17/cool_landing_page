import { transactions } from '../data/sampleData';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    signDisplay: 'always',
  }).format(value);
}

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 font-semibold text-gray-600">Date</th>
            <th className="py-3 px-4 font-semibold text-gray-600">Description</th>
            <th className="py-3 px-4 font-semibold text-gray-600">Category</th>
            <th className="py-3 px-4 font-semibold text-gray-600 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-700 whitespace-nowrap">{tx.date}</td>
              <td className="py-3 px-4 text-gray-800">{tx.description}</td>
              <td className="py-3 px-4">
                <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">
                  {tx.category}
                </span>
              </td>
              <td
                className={`py-3 px-4 text-right font-medium whitespace-nowrap ${
                  tx.amount >= 0 ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {formatCurrency(tx.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
