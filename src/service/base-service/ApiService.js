import { HttpService } from "./httpService";

export class ApiService extends HttpService{

    getAllProducts = async () => this.get('products')
}

export const ApiCall = new ApiService();  