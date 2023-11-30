
const Location = () => {
    return (
      <div className="w-[1140px] mx-auto my-16">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
          <figure>
            <img
              className="w-[500px]"
              src="https://i.ibb.co/g7WmqDW/Screenshot-2023-11-30-000153.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl text-center mt-16  font-bold italic ...">
              {" "}
              <span className="text-[#f31312]">----</span> Our Shop Location{" "}
              <span className="text-[#f31312]">----</span>
            </h2>
            <p className="mt-8 w-[500px]">
              Welcome to the heart of Sylhet City —an enclave of exquisite
              discoveries awaits at TechnoMinds. Strategically located at Sylhet
              city, our shop is more than just a place.
              <div className="mt-8">
                <p className="text-[#f31312] font-bold">
                  Shop Location: Sylhet, Bangladesh
                </p>
                <p className="text-[#f31312] font-bold">
                  Email: shop@tachnominds.com
                </p>
                <p className="text-[#f31312] font-bold">
                  Hotline: +880 17000000000
                </p>
              </div>
              <br /> <br />
              <button className="btn rounded-none items-center justify-center text-center text-white bg-[#f31312] border-none">
                Create Shop
              </button>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Location;