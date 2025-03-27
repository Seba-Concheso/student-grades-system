export type Order = "asc" | "desc";

export interface EnhancedTableHeadProps<T> {
  columns: Column<T>[];
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: keyof T;
  rowCount: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  tableName: string;
  onAdd?: () => void;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export interface Column<T> {
  id: keyof T | string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface EnhancedTableProps<T = unknown> {
  rows: T[];
  columns: Column<T>[];
  defaultOrderBy: keyof T;
  tableName: string;
  onAdd?: () => void;
}
