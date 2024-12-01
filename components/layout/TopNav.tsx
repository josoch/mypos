'use client';

import { Bell, Search, Settings } from 'lucide-react';
import Link from 'next/link';
import { MenuBar } from '@/components/menu/MenuBar';

export function TopNav() {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <MenuBar />
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-md border border-input bg-background px-8 py-2 text-sm"
            />
          </div>
          <button className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-white">
              3
            </span>
          </button>
          <Settings className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}