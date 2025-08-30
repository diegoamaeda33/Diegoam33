
export type View = 'lead' | 'quote';
export type TeamView = 'quotationTool' | 'priceList';

export interface Lead {
  leadId: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  clientStatus: 'new' | 'existing';
  items: QuoteItem[];
  sellerName: string;
  sellerPhone: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  path?: string;
}

export interface ProductCategory {
  name: string;
  subcategories: ProductCategory[];
  products: Product[];
}

export interface SpecialClient {
  name: string;
  discount: string;
  notes?: string;
}

// This type represents a row from the simplified price update CSV.
export type CsvProductRow = {
  name: string;
  price: string;
};

export type FlatProduct = {
  product: Product;
  path: string;
};