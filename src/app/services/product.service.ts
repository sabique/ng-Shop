import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productRefs: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { 
    this.productRefs = this.db.list('/products/');
  }

  create(product){
    this.productRefs.push(product);
  }

  getAll(){
    return this.productRefs.snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        $key: c.key,
        value: c.payload.val()
      }))));
  }

  get(productId){
    return this.db.object('/products/' + productId).valueChanges();
  }
}
