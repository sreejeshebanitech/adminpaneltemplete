export const UserProfile = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <div className="p-4 border-t border-gray-700">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
        </div>
        
        {!isCollapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Admin User</p>
            <p className="text-xs text-gray-400 truncate">admin@example.com</p>
          </div>
        )}
      </div>
    </div>
  );
};