import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
const useCheckOut = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: check = [], refetch } = useQuery({
      queryKey: ["check", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/checkOut?email=${user.email}`);
        console.log(res.data);
        return res.data;
      },
    });
    return [check, refetch];
};

export default useCheckOut;