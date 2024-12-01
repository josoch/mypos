'use client';

import { useState } from 'react';
import { Search, Plus, Minus, X, Package, FileText, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InventoryTable } from '@/components/inventory/InventoryTable';
import { InventoryFooter } from '@/components/inventory/InventoryFooter';
import { InventoryToolbar } from '@/components/inventory/InventoryToolbar';
import { useInventory } from '@/hooks/use-inventory';

export function InventoryReceive() {
  const {
    items,
    searchQuery,
    vendorSearch,
    setSearchQuery,
    setVendorSearch,
    addItem,
    removeItem,
    updateQuantity,
    total,
  } = useInventory();

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <InventoryToolbar
        searchQuery={searchQuery}
        vendorSearch={vendorSearch}
        onSearchChange={setSearchQuery}
        onVendorSearchChange={setVendorSearch}
      />

      <div className="flex-1 p-4">
        <InventoryTable
          items={items}
          onQuantityChange={updateQuantity}
          onRemove={removeItem}
        />
      </div>

      <InventoryFooter
        items={items}
        total={total}
      />
    </div>
  );
}