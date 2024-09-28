import { IProductRepository } from '@/repositories/product.repository.interface';

export class FindAllProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(page: number, limits: number) {
    return this.productRepository.findAll(page, limits);
  }
}
