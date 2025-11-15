'use client';
import { useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { UserProfile } from './UserProfile';
import { SIDEBAR_ITEMS } from '@/lib/constants/sidebar';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const categories = SIDEBAR_ITEMS.reduce((acc, item) => {
    const category = item.category || 'OTHER';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof SIDEBAR_ITEMS>);

  return (
    <div className={`
      bg-gray-900 border-r border-gray-700 h-screen transition-all duration-500 sticky top-0
      ${isCollapsed ? 'w-20' : 'w-80'}
      flex flex-col
    `}>
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <h1 className="text-xl font-bold text-white">AdminPanel</h1>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 text-gray-400 hover:text-white"
          >
            {isCollapsed ? 
              <span className="text-lg">→</span> : 
              <span className="text-lg">←</span>
            }
          </button>
        </div>
      </div>

      {/* Search Section */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
            />
            <span className="absolute right-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category}>
            {!isCollapsed && category !== 'OTHER' && (
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                {category}
              </p>
            )}
            <div className="space-y-2">
              {items.map((item) => (
                <SidebarItem 
                  key={item.id} 
                  item={item} 
                  isCollapsed={isCollapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* User Profile */}
      <UserProfile isCollapsed={isCollapsed} />
    </div>
  );
};