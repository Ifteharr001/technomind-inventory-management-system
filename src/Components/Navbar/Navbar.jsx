import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navMenu = (
      <>
        <li className="font-bold">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#38b879] border-b-4 border-[#38b879] rounded-none"
                : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li className="font-bold">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#38b879] border-b-4 border-[#38b879] rounded-none"
                : ""
            }
          >
            Login
          </NavLink>
        </li>
      </>
    );
    return (
      //#38b879
      // #262c38
      <div className="navbar bg-[#262c38] text-white">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navbar */}
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;