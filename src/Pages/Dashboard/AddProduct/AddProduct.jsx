import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProduct = () => {
    const {user} = useContext(AuthContext)
     const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();


    const onSubmit = async(data) => {
        console.log(data);
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const addProduct = {
              name: data.name,
              image: res.data.data.display_url,
              quantity: parseFloat(data.quantity),
              location: data.location,
              cost: parseFloat(data.cost),
              profit: parseFloat(data.profit),
              discount: parseFloat(data.discount),
              description: data.description,
              email: user?.email
            }
            const addRes = await axiosPublic.post('/addProducts', addProduct)
            console.log(addRes.data)
            if(addRes.data.insertedId){
                //show popup
            }
        }
        console.log(res.data)
    };
   
//
  return (
    <div>
      <div className="py-6 dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl text-center  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span> Add Product{" "}
          <span className="text-[#f31312]">----</span>
        </h2>

        <div className="hero">
          <div className="hero-content ">
            <div className="card flex-shrink-0 lg:w-[800px] rounded-none shadow-2xl bg-[#f31312] border-none">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Product Name"
                      className="input input-bordered text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* image uploading system */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="file"
                      {...register('image')}
                      className="file-input w-full max-w-full  text-white  bg-transparent border-2 border-white rounded-none"
                    />
                  </div>

                  {/* Product Quantity */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Quantity
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Product Quantity"
                      {...register('quantity')}
                      className="input input-bordered text-white  bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Product Location */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Location
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Location"
                      {...register('location')}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Production Cost */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Production Cost
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Production Cost"
                      {...register('cost')}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Profit */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Profit
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Profit"
                      {...register('profit')}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Discount */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Discount
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="discount"
                      {...register('discount')}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Product Description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Product Description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Description"
                      {...register('description')}
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>
                </div>
                <input
                  className="btn btn-block rounded-none bg-[#192e44] border-none text-white mt-8"
                  type="submit"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
