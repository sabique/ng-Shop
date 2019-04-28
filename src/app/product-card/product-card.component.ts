import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
// tslint:disable-next-line: no-input-rename
  @Input('product') product: Product;
// tslint:disable-next-line: no-input-rename
  @Input('show-actions') showActions = false;
// tslint:disable-next-line: no-input-rename
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart || !this.shoppingCart.items) { return 0; }

    const item = this.shoppingCart.items[this.product['$key']];
    return item ? item.quantity : 0;
  }
}
