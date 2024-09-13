import { IProduct } from '@/entities/models/product.interface';
import { IProductRepository } from '../product.repository.interface';

export class ProductRepository implements IProductRepository {
  create(product: IProduct): Promise<IProduct | undefined> {
    throw new Error('Method not implemented.');
  }
}
