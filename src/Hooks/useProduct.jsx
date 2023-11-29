
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
const useProduct = () => {
     const { user } = useContext(AuthContext);
     const axiosSecure = useAxiosSecure();
     const {data: product=[]} = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addProducts?email=${user.email}`)
              console.log(res.data);
            return res.data;
        }
    })
    return [product];
};

export default useProduct;