// hooks/react-query/useProductAdditionalInfo.js
import { useQuery } from "react-query";
import axios from "axios";
import { ApiCall } from "../../service/base-service/ApiService";

const fetchProductAdditionalInfo = async (id) => {
    console.log('oo' , id)
  if (!id) return null; // safeguard for empty id
  const { data } = await ApiCall.getProductAdditionalInfo(id);
  return data;
};

export const useProductAdditionalInfo = (id) => {
  return useQuery(
    ["productAdditionalInfo", id],
    () => fetchProductAdditionalInfo(id),
    {
      enabled: !!id, // only run if id exists
      staleTime: 1000 * 60 * 5, // 5 mins cache
    }
  );
};
