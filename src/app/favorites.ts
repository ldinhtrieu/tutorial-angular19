import { FavoritesService } from './favorites.service';
import { ProductViewService } from './product-view/product-view.service';
import { ProductsService } from './products.service';
export function favoritesFactory(isFavorite: boolean) {
  return (_productViewService: ProductViewService) => {
    if (isFavorite) {
      return new FavoritesService();
    }
    return new ProductsService();
  };
}
