'use client';

import { Home, ShoppingCart, Package, Users, FolderOpen, BarChart2, DollarSign, Globe } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: ShoppingCart, label: 'Make a Sale', href: '/pos' },
  { icon: Package, label: 'Receive Items', href: '/inventory/receive' },
  { icon: Package, label: 'Item List', href: '/inventory/items' },
  { icon: Users, label: 'Customer List', href: '/customers' },
  { icon: FolderOpen, label: 'Department List', href: '/departments' },
  { icon: BarChart2, label: 'Reports', href: '/reports' },
  { icon: DollarSign, label: 'End of Day', href: '/end-of-day' },
  { icon: Globe, label: 'Ecommerce', href: '/ecommerce' },
];

export function LeftSidebar() {
  const router = useRouter();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex flex-col space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}