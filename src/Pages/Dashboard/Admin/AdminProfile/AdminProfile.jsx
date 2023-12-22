
const AdminProfile = () => {
    return (
      <div>
        <div className="mt-16">
          <div className="card bg-[#faf5f5] w-[600px] mx-auto shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/WtVHj01/7ad01839e2bbf81b9ed32f6fd1b54d62-removebg-preview.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
                 <p className="font-bold text-3xl italic">
              <span className="text-[#f31312]">Brand Name:</span>{" "}
              Techno Minds
            </p>
              <p>
                <span className="text-[#f31312]">Admin Email: </span>{" "}
                admin@technominds.com
              </p>
              <p>
                <span className="text-[#f31312]"> Roll:</span>{" "}
                Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminProfile;