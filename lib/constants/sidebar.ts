export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
  category?: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { category: 'MAIN', id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/root/dashboard' },
  { category: 'MANAGE', id: 'users', label: 'Users', icon: '👥', path: '/root/users', badge: 12 },
  { id: 'content', label: 'Content', icon: '📝', path: '/root/content', badge: 3 },
  { id: 'analytics', label: 'Analytics', icon: '📈', path: '/root/analytics' },
  { id: 'messages', label: 'Messages', icon: '💬', path: '/root/messages', badge: 5 },
  { category: 'SYSTEM', id: 'settings', label: 'Settings', icon: '⚙️', path: '/root/settings' },
  { id: 'help', label: 'Help & Support', icon: '❓', path: '/root/help' }
];