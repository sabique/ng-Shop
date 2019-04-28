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

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
