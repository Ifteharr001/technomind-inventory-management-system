import { Link, NavLink, Outlet } from "react-router-dom";
import useShop from "../Hooks/useShop";
import { useContext} from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useCheckOut from "../Hooks/useCheckOut";

const Dashboard = () => {
   

  const [isAdmin] = useAdmin();
  const [check] = useCheckOut();
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
            {isAdmin ? (
              // admin dashboard

              <>
                <li className="font-bold">
                  <NavLink
                    to="/dashboard/adminProfile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "text-[#fff] border-b-4 border-[#fff] rounded-none"
                        : ""
                    }
                  >
                    Admin Profile
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/dashboard/manageShop"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "text-[#fff] border-b-4 border-[#fff] rounded-none"
                        : ""
                    }
                  >
                    Manage Shop
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/dashboard/saleSummary"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "text-[#fff] border-b-4 border-[#fff] rounded-none"
                        : ""
                    }
                  >
                    Sale Summary
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-[#fff]"
                        : isActive
                        ? "text-[#fff]  border-b-4  bg-transparent border-[#fff] rounded-none"
                        : ""
                    }
                  >
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              // shop dashboard
              <>
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
                <li className="font-bold">
                  <NavLink
                    to="/dashboard/checkOut"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-[#fff]"
                        : isActive
                        ? "text-[#fff]  border-b-4  bg-transparent border-[#fff] rounded-none"
                        : ""
                    }
                  > 
                    Check Out {check.length}
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            {/* / */}
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