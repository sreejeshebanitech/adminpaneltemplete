interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  avatar: string;
}

const activities: Activity[] = [
  { id: 1, user: 'John Doe', action: 'created new post', time: '2 min ago', avatar: 'JD' },
  { id: 2, user: 'Sarah Smith', action: 'updated profile', time: '5 min ago', avatar: 'SS' },
  { id: 3, user: 'Mike Johnson', action: 'commented on article', time: '12 min ago', avatar: 'MJ' },
  { id: 4, user: 'Emily Davis', action: 'uploaded file', time: '1 hour ago', avatar: 'ED' }
];

export const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {activity.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.user} <span className="text-gray-600 font-normal">{activity.action}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};