import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { HttpService } from "../../service/base-service/httpService";
import { ApiCall } from "../../service/base-service/ApiService";

const fetchProducts = async ({ pageParam = 1, limit, filter }) => {
  const response = await ApiCall.getFilteredProducts({ 
                        page: pageParam,
                        limit,         
                        filter,    
                    }) 

    return response.data;
};

export const useFilteredProductItems = (limit, filter) => {
  return useInfiniteQuery(
    ["products", filter],
    ({ pageParam = 1 }) => fetchProducts({ pageParam, limit, filter }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1; // 👈 move to the next page
        }
        return undefined; // 👈 no more pages left
      },
    }
  );
};
