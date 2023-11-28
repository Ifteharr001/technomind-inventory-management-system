import useShop from "../../../Hooks/useShop";

const ShopProfile = () => {
    const [shop] = useShop()
    return (
      <div className="mt-16">
        <div className="card bg-[#faf5f5] w-[600px] mx-auto shadow-xl">
          <figure>
            <img src={shop[0]?.shopLogo} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <p className="font-bold text-3xl italic">
              <span className="text-[#f31312]">Shop Name:</span>{" "}
              {shop[0]?.shopName}
            </p>
            <p className="text-xl font-bold mb-4">
              <span className="text-[#f31312]">Shop Location:</span>{" "}
              {shop[0]?.shopLocation}
            </p>
            <p className="mb-6">
              <span className="text-[#f31312]">Shop Description:</span>{" "}
              {shop[0]?.shopInfo}
            </p>
            <p>
              <span className="text-[#f31312]">Owner Name:</span>{" "}
              {shop[0]?.ownerName}
            </p>
            <p>
              <span className="text-[#f31312]">Owner Email:</span>{" "}
              {shop[0]?.ownerEmail}
            </p>
            <p>
              <span className="text-[#f31312]">Owner Roll:</span>{" "}
              {shop[0]?.roll}
            </p>
          </div>
        </div>
      </div>
    );
};

export default ShopProfile;