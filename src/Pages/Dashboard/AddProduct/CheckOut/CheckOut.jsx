import { Link } from "react-router-dom";
import useCheckOut from "../../../../Hooks/useCheckOut";

const CheckOut = () => {
    const [check] = useCheckOut();
    const totalCost = check.reduce((total, item) => total + item.cost, 0)
    return (
      <div className="w-[800px] mx-auto">
        <h2 className="text-4xl text-center mt-14  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span>Check Out{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
        <div className="flex justify-between mt-16">
          <h2 className="text-4xl">Total Cost: {totalCost}</h2>
          <Link to="/dashboard/payment">
            <button className="btn rounded-none text-white bg-[#f31312] border-none">
            Check Out
          </button>
          </Link>
        </div>
        <div className="overflow-x-auto mt-16">
          <table className="table bg-[#faf5f5]">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Cost</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {check?.map((products, index) => (
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
                  <td>{products?.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CheckOut;