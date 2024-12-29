import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductViewService } from '../product-view/product-view.service';
@Component({
  selector: 'app-product-list',
  imports: [
    ProductDetailComponent,
    SortPipe,
    FavoritesComponent,
    ProductViewComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService, ProductViewService],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | undefined;
  private productService = inject(ProductsService);
  constructor() {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }
}
