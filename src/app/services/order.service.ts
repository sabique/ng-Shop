import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { FirebaseDatabase } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  placeOrder(order) {
    return this.db.list('/orders').push(order);
  }
}
