interface Action {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

const actions: Action[] = [
  { id: 'add-user', label: 'Add User', icon: '➕', description: 'Create new user account', color: 'bg-blue-50 text-blue-600' },
  { id: 'upload', label: 'Upload Content', icon: '📤', description: 'Upload new files or media', color: 'bg-green-50 text-green-600' },
  { id: 'analytics', label: 'View Analytics', icon: '📊', description: 'Check performance metrics', color: 'bg-purple-50 text-purple-600' },
  { id: 'settings', label: 'Settings', icon: '⚙️', description: 'Manage system settings', color: 'bg-gray-50 text-gray-600' }
];

export const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm text-left"
          >
            <span className={`text-xl p-2 rounded-lg mr-3 ${action.color}`}>
              {action.icon}
            </span>
            <div>
              <p className="font-medium text-gray-900">{action.label}</p>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};