import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {
    const { register, handleSubmit } = useForm();
    const {name, quantity, location, cost, profit, discount, description, _id} = useLoaderData();

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
      console.log(data);
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const addProduct = {
          name: data.name,
          image: res.data.data.display_url,
          quantity: parseFloat(data.quantity),
          location: data.location,
          cost: parseFloat(data.cost),
          profit: parseFloat(data.profit),
          discount: parseFloat(data.discount),
          description: data.description,
          email: user?.email,
        };
        const addRes = await axiosPublic.patch(`/addProducts/${_id}`, addProduct);
        console.log(addRes.data);
        if (addRes.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is updated`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      console.log(res.data);
    };




    return (
      <div>
        <h2 className="text-4xl text-center mt-16  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span>Update Product{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
          <div className="hero">
          <div className="hero-content ">
            <div className="card flex-shrink-0 lg:w-[800px] rounded-none shadow-2xl bg-[#f31312] border-none">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Name
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={name}
                      {...register("name")}
                      placeholder="Product Name"
                      className="input input-bordered text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                 <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="file"
                      {...register("image")}
                      className="file-input w-full max-w-full  text-white  bg-transparent border-2 border-white rounded-none"
                    />
                  </div> 

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Quantity
                      </span>
                    </label>
                    <input
                      type="number"
                      defaultValue={quantity}
                      placeholder="Product Quantity"
                      {...register("quantity")}
                      className="input input-bordered text-white  bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Location
                      </span>
                    </label>
                    <input
                    defaultValue={location}
                      type="text"
                      placeholder="Product Location"
                      {...register("location")}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Production Cost
                      </span>
                    </label>
                    <input
                    defaultValue={cost}
                      type="number"
                      placeholder="Production Cost"
                      {...register("cost")}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Profit
                      </span>
                    </label>
                    <input
                      type="number"
                      defaultValue={profit}
                      placeholder="Profit"
                      {...register("profit")}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Discount
                      </span>
                    </label>
                    <input
                    defaultValue={discount}
                      type="number"
                      placeholder="discount"
                      {...register("discount")}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Description
                      </span>
                    </label>
                    <input
                    defaultValue={description}
                      type="text"
                      placeholder="Product Description"
                      {...register("description")}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>
                </div>
                <input
                  className="btn btn-block rounded-none bg-[#192e44] border-none text-white mt-8"
                  type="submit"
                  value="Update Product"
                />
              </form>
            </div>
          </div> 
        </div>  
      </div>
    );
};

export default UpdateProduct;