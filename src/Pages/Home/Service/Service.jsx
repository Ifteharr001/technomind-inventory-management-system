
const Service = () => {
    return (
      <div className="mt-16 lg:w-[1140px] mx-auto">
        <div className="card grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  text-white font-bold border-none shadow-xl">
          <div className="card-body shadow-none rounded-none grid grid-cols-2 justify-center bg-[#35ca4975] border-none text-white font-bold items-center">
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="//noraure-5.myshopify.com/cdn/shop/files/free-delivery_small.png?v=1645701204"
                alt=""
              />
            </div>
            <div>
              <h2 className="card-title">Free Shipping</h2>
            </div>
          </div>
          <div className="card-body grid shadow-none rounded-none grid-cols-2 bg-[#ca353575] border-none text-white font-bold justify-center items-center">
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="//noraure-5.myshopify.com/cdn/shop/files/shield_small.png?v=1645701325"
                alt=""
              />
            </div>
            <div>
              <h2 className="card-title">Secure Payment</h2>
            </div>
          </div>
          <div className="card-body shadow-none rounded-none grid grid-cols-2 bg-[#1259f385]  border-none text-white font-bold justify-center items-center">
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="//noraure-5.myshopify.com/cdn/shop/files/best-price_small.png?v=1645701387"
                alt=""
              />
            </div>
            <div>
              <h2 className="card-title">Best Price</h2>
            </div>
          </div>
          <div className="card-body shadow-none rounded-none grid grid-cols-2 bg-[#12b3f362] border-none text-white font-bold justify-center items-center">
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="//noraure-5.myshopify.com/cdn/shop/files/return_small.png?v=1645701443"
                alt=""
              />
            </div>
            <div>
              <h2 className="card-title">Easy Return</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;