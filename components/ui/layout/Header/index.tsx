'use client';
import { useState } from 'react';

export const Header = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400 text-sm">Welcome back, Admin! Here's what's happening today.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 relative text-gray-300 hover:text-white"
            >
              <span className="text-lg">🔔</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-600 rounded-xl shadow-2xl z-50">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="font-semibold text-white">Notifications</h3>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors">
                      <p className="text-sm text-white">New user registered</p>
                      <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button className="p-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 text-gray-300 hover:text-white">
            <span className="text-lg">🌙</span>
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-3 p-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">Root</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};