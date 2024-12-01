'use client';

import { useState } from 'react';
import { Search, Plus, Minus, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SaleItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  attribute?: string;
  size?: string;
}

export default function POSPage() {
  const [items, setItems] = useState<SaleItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [customerSearch, setCustomerSearch] = useState('');

  const addItem = (item: SaleItem) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(1, newItems[index].quantity + delta);
    setItems(newItems);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 0;
  const total = subtotal + tax;

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex space-x-4 p-4 bg-white border-b">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Scan or enter item information"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Enter customer name or phone"
            value={customerSearch}
            onChange={(e) => setCustomerSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-2">Item #</th>
              <th className="text-left p-2">Item Name</th>
              <th className="text-left p-2">Attribute</th>
              <th className="text-left p-2">Size</th>
              <th className="text-right p-2">Qty</th>
              <th className="text-right p-2">Price</th>
              <th className="text-right p-2">Ext Price</th>
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
                      onClick={() => updateQuantity(index, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </td>
                <td className="p-2 text-right">{item.price.toFixed(2)}</td>
                <td className="p-2 text-right">
                  {(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => removeItem(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t bg-white p-4">
        <div className="flex justify-between text-sm mb-2">
          <span>No. of Items Sold</span>
          <span>{items.length}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Total Qty Sold</span>
          <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>SubTotal</span>
          <span>{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Tax</span>
          <span>{tax.toFixed(2)}</span>
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
          <Button className="flex-1">Pay</Button>
        </div>
      </div>
    </div>
  );
}