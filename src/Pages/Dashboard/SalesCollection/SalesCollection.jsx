import { useContext, useState } from "react";
import useProduct from "../../../Hooks/useProduct";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SalesCollection = () => {
  const [product] = useProduct();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");


  const handleAddCheckOut = async (id, image, name, quantity, discount, cost) => {
    try {
      console.log("clicked on id", id);
        const email = user.email;
      
       const data = {
         productId: id,
         quantity: quantity, 
         image: image,
         name: name,
         discount: discount,
         cost: cost,
         email: email
       };

       console.log(data);

      const res = await axiosPublic.post(`/checkOut/${id}`, data);
      console.log(res.data.insertedId);
      if (res.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "product added to checkout page",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding checkout:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchId = e.target.search.value;
    setSearch(searchId);
    await axiosPublic(`/addProducts?search=${search}`);
  };

  return (
    <div>
      <h2 className="text-4xl text-center  font-bold italic ... my-16">
        {" "}
        <span className="text-[#f31312]">----</span>Sales Collection{" "}
        <span className="text-[#f31312]">----</span>
      </h2>

      <form
        className="flex justify-center items-center"
        onSubmit={handleSearch}
      >
        <input
          name="search"
          type="text"
          placeholder="Search Here"
          className="input input-bordered w-full max-w-xs rounded-r-none"
        />
        <input
          type="submit"
          value="Search"
          className="btn rounded-none text-white bg-[#f31312] border-none"
        />
      </form>

      <div className="overflow-x-auto mt-16 w-[800px] mx-auto">
        <table className="table bg-[#faf5f5]">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Selling Price</th>
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
                <td>{products?.cost}</td>

                <th>
                  <button
                    onClick={() =>
                      handleAddCheckOut(
                        products._id,
                        products?.image,
                        products?.name,
                        products.quantity,
                        products?.discount
                      , products?.cost)
                    }
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
