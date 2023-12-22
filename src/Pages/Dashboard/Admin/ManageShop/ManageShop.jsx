import { Link, useLoaderData } from "react-router-dom";

const ManageShop = () => {
    const allShop = useLoaderData()
      // if (!Array.isArray(allShop)) {
      //   console.error("allShop is not an array:", allShop);
      //   return <div>Error loading shop data</div>; 
      // }
    return (
      <div>
        <div className="w-[800px] mx-auto">
          <h2 className="text-4xl text-center mt-16  font-bold italic ...">
            {" "}
            <span className="text-[#f31312]">----</span>Manage Shop{" "}
            <span className="text-[#f31312]">----</span>
          </h2>
          <div className="overflow-x-auto mt-16">
            <table className="table bg-[#faf5f5]">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Shop Name</th>
                  <th>Product Limit</th>
                  <th>Shop Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allShop?.map((shop, index) => (
                  <tr key={shop._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={shop?.shopLogo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{shop?.shopName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{allShop.length}</td>
                    <td className="w-[110px]">{shop?.shopInfo}</td>
                    <th>
                      <Link>
                        <button className="btn  rounded-none text-white bg-[#f31312] border-none">Send Notice</button>
                      </Link>
                    </th>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default ManageShop;