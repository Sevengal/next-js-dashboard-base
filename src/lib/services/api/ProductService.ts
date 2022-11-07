import AxiosClient from '../http/AxiosClient';
import { ErrorResponse } from '../http/response/ErrorResponse';
// import { Response } from '../http/response/Response';

export interface ProductResponse {
  products: Product[];
}

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
    ProductResponse | ErrorResponse | null
  > => {
    const response = await this.axiosClient.get<ProductResponse>('/products');
    if (response.getStatus() === 200) {
      return response.getData();
    }
    return null;
  };
}

export default new ProductService();
