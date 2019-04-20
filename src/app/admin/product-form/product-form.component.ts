import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(
    private router: Router,
    categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
