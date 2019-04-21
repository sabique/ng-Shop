import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {};
  categories$;
  productId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    this.productId = this.route.snapshot.paramMap.get('id');

    if(this.productId)
    {
      this.productService.get(this.productId).pipe(take(1)).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }

  save(product){
    if(this.productId)
    {
      this.productService.update(this.productId, this.product);
    } else
    {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }
}
