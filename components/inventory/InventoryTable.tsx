'use client';

import { Button } from '@/components/ui/button';
import { Plus, Minus, X } from 'lucide-react';
import { InventoryItem } from '@/types/inventory';

interface InventoryTableProps {
  items: InventoryItem[];
  onQuantityChange: (index: number, delta: number) => void;
  onRemove: (index: number) => void;
}

export function InventoryTable({ items, onQuantityChange, onRemove }: InventoryTableProps) {
  return (
    <table className="w-full">
      <thead className="bg-muted/50">
        <tr>
          <th className="text-left p-2">Item #</th>
          <th className="text-left p-2">Item Name</th>
          <th className="text-left p-2">Attribute</th>
          <th className="text-left p-2">Size</th>
          <th className="text-right p-2">Qty</th>
          <th className="text-right p-2">Voucher Cost</th>
          <th className="text-right p-2">Ext Cost</th>
          <th className="p-2"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="p-2">{item.id}</td>
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.attribute}</td>
            <td className="p-2">{item.size}</td>
            <td className="p-2">
              <div className="flex items-center justify-end space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => onQuantityChange(index, -1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => onQuantityChange(index, 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </td>
            <td className="p-2 text-right">{item.cost.toFixed(2)}</td>
            <td className="p-2 text-right">
              {(item.cost * item.quantity).toFixed(2)}
            </td>
            <td className="p-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => onRemove(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}