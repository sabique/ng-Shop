import { ShoppingCart } from './../models/shopping-cart';
import { take } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productKey: string) {
    return this.db.object<ShoppingCart>('/shopping-carts/' + cartId + '/items/' + productKey);
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');

    if (cartId) { return cartId; }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(productArgs: Product) {
    this.updateItemQuantity(productArgs, 1);
  }

  async removeFromCart(productArgs: Product) {
    this.updateItemQuantity(productArgs, -1);
  }

  private async updateItemQuantity(productArgs: Product, change: number) {
    const $key = productArgs['$key'];
    const cartId = await this.getOrCreateCartId();
    let items = this.getItem(cartId, $key);

    items.valueChanges().pipe(take(1)).subscribe( item => {
      items.update({
        product: this.getTranposedProduct(productArgs),
        quantity: (item ? item.quantity : 0) + change
      });
    });
  }

  private getTranposedProduct(productArg: Product){
    const product: Product = {
      category: productArg.category,
      imageUrl: productArg.imageUrl,
      price: productArg.price,
      title: productArg.title
    };

    return product;
  }
}
