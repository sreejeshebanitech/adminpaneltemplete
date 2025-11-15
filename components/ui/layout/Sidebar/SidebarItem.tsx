'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarItem as ISidebarItem } from '@/lib/constants/sidebar';

interface SidebarItemProps {
  item: ISidebarItem;
  isCollapsed?: boolean;
}

export const SidebarItem = ({ item, isCollapsed = false }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`
        flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group
        ${isActive 
          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }
      `}
    >
      <span className="text-lg mr-3">{item.icon}</span>
      
      {!isCollapsed && (
        <span className="flex-1">{item.label}</span>
      )}
      
      {item.badge && !isCollapsed && (
        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
          {item.badge}
        </span>
      )}
      
      {isActive && !isCollapsed && (
        <div className="w-1 h-4 bg-blue-600 rounded-full ml-2"></div>
      )}
    </Link>
  );
};