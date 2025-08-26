import { axiosInstance } from '../axios/axios';

export class HttpService {
  
    get = async (url, params = {}) =>
    await axiosInstance.get(`/${url}`, {
      params,
    });

    post = async (url, body, options = {}) =>
    await axiosInstance.post(`/${url}`, body, {
      ...options,
    });

    delete = (url , params= {} , data = {}) =>
    axiosInstance.delete(`/${url}`, { params, data });

    put = (url, body = {} , params = {} ) =>
    axiosInstance.put(`/${url}`, body, {
      ...params,
    });

    patch = async ( url, body, options = {} ) =>
    await axiosInstance.patch(`/${url}`, body, {
      ...options,
    });

}
