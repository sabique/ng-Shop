import { ShoppingCartService } from './../services/shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number = 0;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    let items = await this.shoppingCartService.getCart();
    items.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (let productKey in cart.items)
        this.shoppingCartItemCount += cart.items[productKey].quantity;
    });
  }

  logout() {
    this.auth.logout();
  }
}
