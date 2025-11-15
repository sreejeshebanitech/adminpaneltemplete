export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    path: '/root/dashboard'
  },
  {
    id: 'users',
    label: 'Users',
    icon: '👥',
    path: '/root/users',
    badge: 12
  },
  {
    id: 'content',
    label: 'Content',
    icon: '📝',
    path: '/root/content'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📈',
    path: '/root/analytics'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    path: '/root/settings'
  }
];