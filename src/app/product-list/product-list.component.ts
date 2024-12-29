import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { ProductViewComponent } from '../product-view/product-view.component';
@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, ProductViewComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor(private productService: ProductsService) {}

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
