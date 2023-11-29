import { Link, NavLink, Outlet } from "react-router-dom";
import useShop from "../Hooks/useShop";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Dashboard = () => {
     const { logOut } = useContext(AuthContext);
     const handleLogOut = () => {
       logOut().then().catch();
     };
    const [shop] = useShop();
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-[#f31312]">
          <div className="justify-center flex">
            <img className="w-[150px]" src={shop[0]?.shopLogo} alt="" />
          </div>
          <ul className="menu p-4">
            <li className="font-bold">
              <NavLink
                to="/dashboard/shopProfile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-[#fff] border-b-4 border-[#fff] rounded-none"
                    : ""
                }
              >
                Shop Profile
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                to="/dashboard/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-[#fff] border-b-4 border-[#fff] rounded-none"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                to="/dashboard/myProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-[#fff] border-b-4 border-[#fff] rounded-none"
                    : ""
                }
              >
                Manage Product
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                to="/dashboard/salesCollection"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[#fff]"
                    : isActive
                    ? "text-[#fff]  border-b-4  bg-transparent border-[#fff] rounded-none"
                    : ""
                }
              >
                Sales Collection
              </NavLink>
            </li>
            <div className="divider"></div>
            <li className="font-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[#fff]"
                    : isActive
                    ? "text-[#fff]  border-b-4  bg-transparent border-[#fff] rounded-none"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-bold">
              <Link
                onClick={handleLogOut}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[#fff]"
                    : isActive
                    ? "text-[#fff]  border-b-4  bg-transparent border-[#fff] rounded-none"
                    : ""
                }
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;