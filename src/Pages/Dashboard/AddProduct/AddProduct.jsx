
const AddProduct = () => {
    const handleAddBook = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const authorName = form.authorName.value;
      const image = form.image.value;
      const bookCategory = form.bookCategory.value;
      const quantity = form.quantity.value;
      const description = form.description.value;

      const newBook = {
        name,
        authorName,
        image,
        bookCategory,
        quantity,
        description,
      };
      console.log(newBook);

      // fetch("https://library-management-system-server-steel.vercel.app/books", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(newBook),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     if (data.insertedId) {
      //       Swal.fire({
      //         title: "Success",
      //         text: "Book Added Successfully",
      //         icon: "success",
      //         confirmButtonText: "Ok",
      //       });
      //     }
      //   });
    };
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
                <form onSubmit={handleAddBook} className="card-body ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text  text-white font-bold">
                          Product Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="productName"
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
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                        required
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
                        name="quantity"
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
                        name="description"
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
                        type="text"
                        placeholder="Product Location"
                        name="description"
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
                        type="text"
                        placeholder="Profit"
                        name="profit"
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
                        type="text"
                        placeholder="discount"
                        name="profit"
                        className="input input-bordered  text-white bg-transparent border-2 border-white rounded-none"
                        required
                      />
                    </div>
                    {/* Product Desription */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text  text-white font-bold">
                         Product Description
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product Description"
                        name="description"
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