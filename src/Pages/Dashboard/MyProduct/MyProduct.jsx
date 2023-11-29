import useProduct from "../../../Hooks/useProduct";

const MyProduct = () => {
    const [product] = useProduct();
    const handleDeleteProduct = (products) => {
        
    }
    return (
      <div className="w-[800px] mx-auto">
        <h2 className="text-4xl text-center mt-16  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span>Manage Product{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
        <div className="overflow-x-auto mt-16">
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
                    <button className="btn btn-ghost btn-xs">update</button>
                  </th>
                  <th>
                    <button onClick={() => handleDeleteProduct(products)} className="btn btn-ghost btn-xs">delete</button>
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