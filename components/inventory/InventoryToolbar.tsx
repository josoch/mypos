'use client';

import { Search, FileText, Package, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InventoryToolbarProps {
  searchQuery: string;
  vendorSearch: string;
  onSearchChange: (value: string) => void;
  onVendorSearchChange: (value: string) => void;
}

export function InventoryToolbar({
  searchQuery,
  vendorSearch,
  onSearchChange,
  onVendorSearchChange,
}: InventoryToolbarProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex space-x-4 flex-1">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Scan or enter item information"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Enter vendor name or phone"
            value={vendorSearch}
            onChange={(e) => onVendorSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      <div className="flex space-x-2 ml-4">
        <Button variant="outline" size="sm">
          <FileText className="h-4 w-4 mr-2" />
          Receive from PO
        </Button>
        <Button variant="outline" size="sm">
          <Package className="h-4 w-4 mr-2" />
          Quick Pick Items
        </Button>
        <Button variant="outline" size="sm">
          <Printer className="h-4 w-4 mr-2" />
          Print Tags
        </Button>
      </div>
    </div>
  );
}