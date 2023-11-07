// app/services/FlickService.ts

import type { Product } from '../models/Product';

export default class ProductService {
    private products: Product[] = [
        { id: 1, name: 'product_1', category: 'basics', price: 10.54 },
        { id: 2, name: 'product_2', category: 'convenience', price: 20.50 },
        { id: 3, name: 'product_3', category: 'industrial', price: 32.50 },
        { id: 4, name: 'product_4', category: 'basics', price: 9.99 },
        { id: 5, name: 'product_5', category: 'emergency', price: 19.99 },
        { id: 6, name: 'product_6', category: 'convenience', price: 29.99 },

    ];

    getProducts(): Product[] {
        return this.products
    }

}