'use client';
import { useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { SIDEBAR_ITEMS } from '@/lib/constants/sidebar';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`
      bg-white border-r border-gray-200 h-screen transition-all duration-300 sticky top-0
      ${isCollapsed ? 'w-20' : 'w-64'}
    `}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-800">AdminPanel</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem 
            key={item.id} 
            item={item} 
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      {/* Search Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-3 top-2">🔍</span>
          </div>
        </div>
      )}
    </div>
  );
};