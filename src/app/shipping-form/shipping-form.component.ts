import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../models/order';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
// tslint:disable-next-line: no-input-rename
  @Input('cart') cart: ShoppingCart;
  shipping = {name: '', addressLine1: '', addressLine2: '', city: ''};
  userId: string;
  userSubscription: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    this.orderService.placeOrder(order).then(result => {
      this.router.navigate(['/order-success', result.key]);
    });
  }
}
