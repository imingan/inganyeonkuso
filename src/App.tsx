import { Users, ShoppingCart, TrendingUp, DollarSign } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { Chart } from './components/Chart';

function App() {
  // 샘플 메트릭 데이터
  const metrics = [
    {
      title: '총 방문자',
      value: '45,239',
      change: 12.5,
      icon: <Users className="w-6 h-6" />,
      trend: 'up' as const,
    },
    {
      title: '전환율',
      value: '3.24%',
      change: 8.2,
      icon: <TrendingUp className="w-6 h-6" />,
      trend: 'up' as const,
    },
    {
      title: '총 주문',
      value: '1,463',
      change: 4.3,
      icon: <ShoppingCart className="w-6 h-6" />,
      trend: 'down' as const,
    },
    {
      title: '매출',
      value: '$52,432',
      change: 15.8,
      icon: <DollarSign className="w-6 h-6" />,
      trend: 'up' as const,
    },
  ];

  // 샘플 차트 데이터
  const visitorData = [
    { date: '1월', value: 4200 },
    { date: '2월', value: 5100 },
    { date: '3월', value: 4800 },
    { date: '4월', value: 6200 },
    { date: '5월', value: 5900 },
    { date: '6월', value: 7100 },
    { date: '7월', value: 6800 },
  ];

  const revenueData = [
    { date: '1월', value: 32000 },
    { date: '2월', value: 38000 },
    { date: '3월', value: 35000 },
    { date: '4월', value: 42000 },
    { date: '5월', value: 45000 },
    { date: '6월', value: 51000 },
    { date: '7월', value: 52432 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">마케팅 대시보드</h1>
          <p className="text-sm text-gray-600 mt-1">실시간 마케팅 성과 분석</p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 메트릭 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart
            data={visitorData}
            title="월별 방문자 추이"
            type="area"
          />
          <Chart
            data={revenueData}
            title="월별 매출 추이"
            type="line"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
