'use client';

import { Button } from '@/components/ui/button';
import { InventoryItem } from '@/types/inventory';

interface InventoryFooterProps {
  items: InventoryItem[];
  total: number;
}

export function InventoryFooter({ items, total }: InventoryFooterProps) {
  return (
    <div className="border-t bg-white p-4">
      <div className="flex justify-between text-sm mb-2">
        <span>No. of Items Received</span>
        <span>{items.length}</span>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span>Total Qty Received</span>
        <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between space-x-2">
        <Button className="flex-1" variant="outline">
          Put on Hold
        </Button>
        <Button className="flex-1" variant="outline">
          Cancel
        </Button>
        <Button className="flex-1" variant="outline">
          Save Only
        </Button>
        <Button className="flex-1">
          Save & Print
        </Button>
      </div>
    </div>
  );
}