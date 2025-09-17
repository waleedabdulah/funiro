import { HttpService } from "./httpService";

export class ApiService extends HttpService{

    getAllProducts = async () => this.get('products');
    getFilteredProducts = async (data) => this.get('filtered-products' , data)
    getProductAdditionalInfo = async (id) => this.get(`product-additional-info/${id}`)

}

export const ApiCall = new ApiService();  