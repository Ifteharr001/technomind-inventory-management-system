import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import { useNavigate } from "react-router-dom";
const CreateStore = () => {
   const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const handleCreateShop = (e) => {
    e.preventDefault();
    const form = e.target;
    const shopName = form.shopName.value;
    const shopLogo = form.shopLogo.value;
    const shopLocation = form.shopLocation.value;
    const shopInfo = form.shopInfo.value;
    const ownerName = form.ownerName.value;
    const ownerEmail = form.ownerEmail.value;

    const createShop = {
      shopName,
      shopLogo,
      shopLocation,
      shopInfo,
      ownerName,
      ownerEmail,
      roll: 'manager'
    };
    console.log(createShop);

    axiosPublic.post('/userShop', createShop)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        navigate("/dashboard");
      }
    })
  };




    return (
      <div>
        <Helmet>
          <title>TechnoMinds | Create Store</title>
        </Helmet>

        <div className="hero">
          <div className="hero-content ">
            <div className="card flex-shrink-0 lg:w-[800px] shadow-2xl bg-[#f31312] rounded-none border-none">
              <form onSubmit={handleCreateShop} className="card-body ">
                <h2 className="text-4xl font-bold my-8 text-[#fff]  text-center ">
                  Create Your Own Shop
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Shop Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Shop Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      placeholder="Shop Name"
                      className="input input-bordered text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Shop Logo */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Shop Logo
                      </span>
                    </label>
                    <input
                      type="text"
                      name="shopLogo"
                      placeholder="Shop Logo"
                      className="input input-bordered text-white  bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>

                  {/* Shop Location */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Shop Location
                      </span>
                    </label>
                    <input
                      type="text"
                      name="shopLocation"
                      placeholder="Shop Location"
                      className="input input-bordered text-white  bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>


                  {/* Shop Info */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white font-bold">
                        Shop Info
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Shop Info"
                      name="shopInfo"
                      className="input input-bordered  text-white bg-transparent border-2 border-white rounded-None"
                      required
                    />
                  </div>


                  {/* Owner Name */}
                  {user && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text  text-white font-bold">
                          Owner Name
                        </span>
                      </label>
                      <input
                        defaultValue={user?.displayName}
                        type="text"
                        name="ownerName"
                        className="input input-bordered  text-white bg-transparent border-2 border-white rounded-None"
                        required
                        readOnly={true}
                      />
                    </div>
                  )}
                  {user && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text  text-white font-bold">
                          Owner Email
                        </span>
                      </label>
                      <input
                        defaultValue={user?.email}
                        type="text"
                        name="ownerEmail"
                        className="input input-bordered  text-white bg-transparent border-2 border-white rounded-None"
                        required
                        readOnly={true}
                      />
                    </div>
                  )}
                </div>

                <input
                  className="btn btn-block rounded-none bg-[#000] border-none text-white mt-8"
                  type="submit"
                  value="Create Shop"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CreateStore;