interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const stats: StatCard[] = [
  {
    title: 'Total Users',
    value: '12,458',
    change: '+12%',
    trend: 'up',
    icon: '👥'
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+8%',
    trend: 'up',
    icon: '💰'
  },
  {
    title: 'Content',
    value: '1,234',
    change: '-2%',
    trend: 'down',
    icon: '📝'
  },
  {
    title: 'Engagement',
    value: '78.5%',
    change: '+15%',
    trend: 'up',
    icon: '📈'
  }
];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className={`text-sm mt-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </div>
            <div className="text-2xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};