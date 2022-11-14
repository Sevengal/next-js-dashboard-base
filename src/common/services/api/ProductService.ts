import AxiosClient from '@services/http/AxiosClient';
import ResponseStatus from '@custom-types/response/ResponseStatus';
import ProductResponse from '@custom-types/product/ProductResponse';

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
