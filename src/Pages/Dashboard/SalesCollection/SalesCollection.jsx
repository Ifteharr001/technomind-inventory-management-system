import { useContext } from "react";
import useProduct from "../../../Hooks/useProduct";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SalesCollection = () => {
  const [product] = useProduct();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handleAddCheckOut = async (product) => {
    const email = user.email;
    const addSale = {
      email,
      product,
    };
    console.log(addSale);
      const addRes = await axiosPublic.post("/checkOut", addSale);
      console.log(addRes.data);

  };

  return (
    <div>
      <h2 className="text-4xl text-center  font-bold italic ... my-16">
        {" "}
        <span className="text-[#f31312]">----</span>Sales Collection{" "}
        <span className="text-[#f31312]">----</span>
      </h2>
      <div className="overflow-x-auto mt-16">
        <table className="table bg-[#faf5f5]">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((products, index) => (
              <tr key={products._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={products?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{products?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{products?._id}</td>
                <td>{products?.quantity}</td>
                <td>{products?.discount}</td>

                <th>
                  <button
                    onClick={() => handleAddCheckOut(products)}
                    className="btn btn-ghost btn-xs"
                  >
                    Add For Check-out
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesCollection;
