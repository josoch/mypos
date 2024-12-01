'use client';

import { ModuleCard } from '@/components/dashboard/ModuleCard';
import { ShoppingCart, Package, Users, DollarSign, BarChart2, Settings, Clock, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

const posModules = [
  { title: 'New Sale', icon: ShoppingCart, description: 'Process a new transaction', href: '/pos' },
  { title: 'Inventory', icon: Package, description: 'Manage your stock', href: '/inventory/items' },
  { title: 'Customers', icon: Users, description: 'View customer database', href: '/customers' },
  { title: 'Reports', icon: BarChart2, description: 'View sales analytics', href: '/reports' },
];

const purchasingModules = [
  { title: 'Purchase Orders', icon: FileText, description: 'Create and manage POs', href: '/purchasing/orders' },
  { title: 'Receive Items', icon: Package, description: 'Process incoming inventory', href: '/inventory/receive' },
  { title: 'Vendors', icon: Users, description: 'Manage supplier relationships', href: '/purchasing/vendors' },
  { title: 'Order History', icon: Clock, description: 'View past orders', href: '/purchasing/history' },
];

const employeeModules = [
  { title: 'Time Clock', icon: Clock, description: 'Manage employee hours', href: '/employees/time' },
  { title: 'Settings', icon: Settings, description: 'System configuration', href: '/settings' },
  { title: 'End of Day', icon: DollarSign, description: 'Close daily operations', href: '/end-of-day' },
  { title: 'Reports', icon: BarChart2, description: 'View employee metrics', href: '/reports/employees' },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold">Point of Sale</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posModules.map((module) => (
            <ModuleCard 
              key={module.title} 
              {...module} 
              onClick={() => router.push(module.href)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Purchasing</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {purchasingModules.map((module) => (
            <ModuleCard 
              key={module.title} 
              {...module}
              onClick={() => router.push(module.href)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Employee</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {employeeModules.map((module) => (
            <ModuleCard 
              key={module.title} 
              {...module}
              onClick={() => router.push(module.href)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}