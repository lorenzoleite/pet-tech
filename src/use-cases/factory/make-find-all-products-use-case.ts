import { ProductRepository } from '@/repositories/typeorm/product.repository';
import { FindAllProductsUseCase } from '../find-all-products';

export function makeFindAllProductsUseCase() {
  const productRepository = new ProductRepository();
  const findAllProductUseCase = new FindAllProductsUseCase(productRepository);

  return findAllProductUseCase;
}
