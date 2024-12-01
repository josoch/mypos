'use client';

import { useState } from 'react';
import { InventoryItem } from '@/types/inventory';

export function useInventory() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorSearch, setVendorSearch] = useState('');

  const addItem = (item: InventoryItem) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(0, newItems[index].quantity + delta);
    setItems(newItems);
  };

  const total = items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return {
    items,
    searchQuery,
    vendorSearch,
    setSearchQuery,
    setVendorSearch,
    addItem,
    removeItem,
    updateQuantity,
    total,
  };
}