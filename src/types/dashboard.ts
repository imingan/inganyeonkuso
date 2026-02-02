export interface MetricCardData {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface DashboardData {
  metrics: MetricCardData[];
  chartData: ChartDataPoint[];
}
