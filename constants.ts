import type { ProductCategory, SpecialClient } from './types';

// This data is now the initial or fallback data if nothing is in local storage.
export const INITIAL_PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: 'Wireless',
    subcategories: [
      {
        name: 'Normal',
        subcategories: [
          {
            name: 'Normal', // The second "Normal" as requested
            subcategories: [
              {
                name: '220VC',
                subcategories: [],
                products: [],
              },
              {
                name: '24VDC',
                subcategories: [
                  {
                    name: 'LTA 4G SIM',
                    subcategories: [],
                    products: [],
                  },
                  {
                    name: 'WIFI',
                    products: [
                      {
                        id: 101,
                        name: 'CMWA6600',
                        price: 1000,
                        description: 'Standard WIFI connectivity module.',
                        category: 'Wireless Modules'
                      }
                    ],
                    subcategories: [],
                  },
                  {
                    name: 'Red Ethernet',
                    products: [
                      {
                        id: 102,
                        name: 'CMWA 6600-EX',
                        price: 1500,
                        description: 'Extended range Red Ethernet connectivity module.',
                        category: 'Wireless Modules'
                      }
                    ],
                    subcategories: [],
                  }
                ],
                products: [],
              },
              {
                name: 'PoE',
                subcategories: [],
                products: [],
              }
            ],
            products: [],
          }
        ],
        products: [],
      },
      {
        name: 'Classified',
        subcategories: [],
        products: [],
      }
    ],
    products: [],
  },
  {
    name: 'Wired',
    subcategories: [],
    products: [],
  }
];

// This data is now the initial or fallback data if nothing is in local storage.
export const INITIAL_SPECIAL_CLIENTS: SpecialClient[] = [
  { name: 'Alpha Corp', discount: '15%', notes: 'Long-term partner, priority support.' },
  { name: 'Beta Industries', discount: '10%', notes: 'Bulk purchaser, standard terms.' },
  { name: 'Gamma Solutions', discount: '12%', notes: 'Discount applied on service contracts.' },
  { name: 'Delta Enterprises', discount: '5%', notes: 'Newer client, volume-based discount.' },
];