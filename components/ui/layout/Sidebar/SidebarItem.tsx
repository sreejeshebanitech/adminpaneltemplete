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
        flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 group relative
        ${isActive 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25' 
          : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-md'
        }
        ${isCollapsed ? 'justify-center' : ''}
      `}
    >
      <span className={`text-lg transition-transform duration-300 group-hover:scale-110 ${isCollapsed ? '' : 'mr-3'}`}>
        {item.icon}
      </span>
      
      {!isCollapsed && (
        <>
          <span className="flex-1">{item.label}</span>
          
          {item.badge && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              {item.badge}
            </span>
          )}
        </>
      )}
      
      {isActive && !isCollapsed && (
        <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-ping"></div>
      )}
    </Link>
  );
};