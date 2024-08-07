import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../config/axios.config"

interface IProductQuery {
    queryKey: string[]
    url: string
}

const useProductsQuery = ({queryKey, url}: IProductQuery)=>{
    return useQuery({
        queryKey,
        queryFn: async ()=>{
            const { data } = await axiosInstance.get(url);
            return data
        }
    })
}

export default useProductsQuery