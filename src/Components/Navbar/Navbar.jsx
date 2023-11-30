import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Navbar = () => {
const [emails, setEmails] = useState([]);
const [shop, setShop] = useState();

useEffect(() => {
  fetch("http://localhost:5000/userShop")
    .then((res) => res.json())
    .then((data) => {
      setShop(data);
    });
}, []);

useEffect(() => {
  if (shop && shop.length > 0) {
    const allEmails = shop.map((s) => s.ownerEmail);
    setEmails(allEmails);
  }
}, [shop]); 

console.log(emails);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const isUserEmailInArray = emails.includes(user?.email);
  const navMenu = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#f31312] border-b-4 border-[#f31312] rounded-none"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="font-bold">
        {isUserEmailInArray ? (
          <NavLink
            to="/dashboard/shopProfile"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#f31312] border-b-4 border-[#f31312] rounded-none"
                : ""
            }
          >
            Dashboard
          </NavLink>
        ) : (
          <NavLink
            to="/create-store"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#f31312] border-b-4 border-[#f31312] rounded-none"
                : ""
            }
          >
            Create Store
          </NavLink>
        )}
      </li>
      <li className="font-bold">
        <NavLink
          to="https://www.youtube.com/watch?v=sL15VM-xN60"
          target="_blank"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "text-[#f31312] border-b-4 border-[#f31312] rounded-none"
              : ""
          }
        >
          Watch Demo
        </NavLink>
      </li>
    </>
  );

  return (
    <div id="navbar" className="bg-[#f2f2f2] mx-auto sticky z-10 top-0">
      <div className="navbar w-[1140px]  mx-auto text-[#000] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* navbar */}
              {navMenu}
            </ul>
          </div>
          <div className="flex text-center justify-center items-center">
            <img
              className="w-16"
              src="https://i.ibb.co/WtVHj01/7ad01839e2bbf81b9ed32f6fd1b54d62-removebg-preview.png"
              alt=""
            />
            <h2 className="font-bold text-[#f31312] text-2xl">TechnoMinds</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navbar */}
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full border-4 border-[#f31312] h-[40px] w-[40px]">
                {user ? (
                  <img className="mr-4" src={user?.photoURL} alt="" />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                {user && (
                  <p className="font-bold mr-4 text-center dark:text-white">
                    {user.displayName}
                  </p>
                )}
              </li>
              <li>
                {user ? (
                  <Link
                    onClick={handleLogOut}
                    className="btn pt-3 rounded-none text-white bg-[#f31312] border-none"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn pt-3 rounded-none text-white bg-[#f31312] border-none"
                  >
                    Login / Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
