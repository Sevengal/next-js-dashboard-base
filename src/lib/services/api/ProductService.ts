import AxiosClient from '../http/AxiosClient';
import { ResponseStatus } from '../http/response/ResponseStatus';

export interface ProductResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: unknown[];
}

class ProductService {
  private readonly axiosClient: AxiosClient;

  constructor() {
    this.axiosClient = new AxiosClient('https://dummyjson.com');
  }

  public getProducts = async (): Promise<ProductResponse | null> => {
    const response = await this.axiosClient.get<ProductResponse>('/products');
    if (response.getStatus() === ResponseStatus.OK) {
      return response.getData() as ProductResponse;
    }
    return null;
  };

  public getProduct = async (
    id: string | number
  ): Promise<ProductResponse | null> => {
    const response = await this.axiosClient.get<ProductResponse>(
      `/products/${id}`
    );
    if (response.getStatus() === ResponseStatus.OK) {
      return response.getData() as ProductResponse;
    }
    return null;
  };
}

export default new ProductService();
