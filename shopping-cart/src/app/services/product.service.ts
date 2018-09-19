import { Injectable } from '@angular/core';
import { Product } from '../entities/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      { id: 'p01', name: 'Samsung Galaxy Z', price: 38999, photo: 'product-1.jpg' },
      { id: 'p02', name: 'Nokia X6', price: 24500, photo: 'product-2.jpg' },
      { id: 'p03', name: 'LG V30+', price: 30990, photo: 'product-3.jpg' },
      { id: 'p04', name: 'Sony Experia XZ2', price: 27890, photo: 'product-4.jpg' },
      { id: 'p05', name: 'Apple iPhone X', price: 107000, photo: 'product-5.jpg' }
    //   { id: 'p03', name: 'Samsung Galaxy Z8', price: 45000, photo: 'product-6.jpg' }
   ];
  }

  findAll(): Product[] {
    return this.products;
}

find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
}
}
