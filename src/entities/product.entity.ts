import { IProduct } from './models/product.interface';

export class Product implements IProduct {
  id?: string;
  name: string;
  description: string;
  image_url: string;
  price: number;

  constructor(
    name: string,
    description: string,
    image_url: string,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.price = price;
  }
}
