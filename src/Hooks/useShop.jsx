
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
const useShop = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const {data: shop=[]} = useQuery({
        queryKey: ['shop', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userShop?email=${user.email}`)
              console.log(res.data);
            return res.data;
        }
    })
    
    return [shop]
};

export default useShop;