import { IProduct } from 'src/app/models/Product';

export class ProductService {
  public product?: IProduct[] = [
    {
      id: "1",
      name: "Yonex duora 10"
    },
    {
      id: "2",
      name: "Canon Y812"
    },
    {
      id: "3",
      name: "Nintendo Switch v2"
    }
  ];
  constructor() { }

  getProducts() {
    return this.product;
  }
}
