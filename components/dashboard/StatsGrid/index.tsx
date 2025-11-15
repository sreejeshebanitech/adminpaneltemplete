interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  gradient: string;
}

const stats: StatCard[] = [
  {
    title: 'Total Users',
    value: '12,458',
    change: '+12.5%',
    trend: 'up',
    icon: '👥',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+8.2%',
    trend: 'up',
    icon: '💰',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Content',
    value: '1,234',
    change: '+3.1%',
    trend: 'up',
    icon: '📝',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Engagement',
    value: '78.5%',
    change: '+15.3%',
    trend: 'up',
    icon: '📈',
    gradient: 'from-orange-500 to-red-500'
  }
];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
              <p className={`text-sm mt-2 flex items-center ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <span className="mr-1">{stat.trend === 'up' ? '↗' : '↘'}</span>
                {stat.change}
              </p>
            </div>
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};