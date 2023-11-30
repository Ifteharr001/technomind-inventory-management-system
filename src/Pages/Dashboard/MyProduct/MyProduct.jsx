import Swal from "sweetalert2";
import useProduct from "../../../Hooks/useProduct";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MyProduct = () => {
    const [product, refetch] = useProduct();
    const axiosPublic = useAxiosPublic();
    const handleDeleteProduct =  (products) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res =  await axiosPublic.delete(`/addProducts/${products._id}`);
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch();
            Swal.fire({
              title: "Deleted!",
              text: "This Product Is deleted.",
              icon: "success",
            });
            }
            
          }
        });
    }
    return (
      <div className="w-[800px] mx-auto">
        <h2 className="text-4xl text-center mt-16  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span>Manage Product{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
        <div className="overflow-x-auto mt-16">
          <div className="flex justify-between items-center mb-8 border-t-4 border-b-4 ">
            <h2 className="font-bold text-2xl">
              Total {product.length} Product Added
            </h2>
            <Link to="/dashboard/addProduct">
              <button className="btn bg-[#f31312] rounded-none hover:bg-[#81391e] text-white font-bold border-none w-[200px]">
                Add Product
              </button>
            </Link>
          </div>
          <table className="table bg-[#faf5f5]">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Sales Count</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
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
                  <td>{products?.quantity}</td>
                  <td>{products?.discount}</td>
                  <th>
                    <Link to={`/dashboard/updateProduct/${products._id}`}>
                      <button className="btn btn-ghost btn-xs">update</button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteProduct(products)}
                      className="btn btn-ghost btn-xs"
                    >
                      delete
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

export default MyProduct;