import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://server-side-ten-nu.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
