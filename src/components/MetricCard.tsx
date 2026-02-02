import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

export function MetricCard({ title, value, change, icon, trend }: MetricCardProps) {
  const isPositive = trend === 'up';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600 text-sm font-medium">{title}</div>
        <div className="text-blue-500">{icon}</div>
      </div>

      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-gray-900">{value}</div>

        <div className={`flex items-center text-sm font-medium ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? (
            <ArrowUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
}
