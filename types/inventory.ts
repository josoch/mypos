export interface InventoryItem {
  id: string;
  name: string;
  cost: number;
  quantity: number;
  attribute?: string;
  size?: string;
  vendor?: string;
}