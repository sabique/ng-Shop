import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories/', refs => refs.orderByChild('name')).snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        $key: c.key,
        value: c.payload.val()
      }))));
  }
}
