import AxiosClient from '../http/AxiosClient';
import { ErrorResponse } from '../http/response/ErrorResponse';
import { Response } from '../http/response/Response';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: unknown;
  images: unknown[];
}

class ProductService {
  private readonly axiosClient: AxiosClient;

  constructor() {
    this.axiosClient = new AxiosClient('https://dummyjson.com');
  }

  public getProducts = async (): Promise<
    Response<Product> | Response<ErrorResponse>
  > => {
    return await this.axiosClient.get<Product>('/products');
  };
}

export default ProductService;
