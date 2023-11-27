import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaGoogle  } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Login = () => {
    const [show, setShow] = useState(false);
    const axiosPublic = useAxiosPublic()
    const { login, googleProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(location?.state ? location.state : "/");
        })
        
    };
    const handleGoogleLogin = () => {
      googleProvider()
        .then((result) => {
           const userInfo = {
             email: result.user?.email,
             name: result.user?.displayName,
           };
           axiosPublic.post("/users", userInfo).then((res) => {
             console.log(res.data);
             navigate(location?.state ? location.state : "/");
           });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div>
        <Helmet>
          <title>TechnoMinds | Login</title>
        </Helmet>
        <div className="hero min-h-screen  bg-base-200">
          <div className="hero-content grid grid-flow-row">
            <h1 className="text-3xl font-bold text-center ">Login Account</h1>
            <div className="card rounded-none flex-shrink-0 lg:w-[400px] shadow-2xl  bg-[#f31312] border-none">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered text-white  bg-transparent border-2 border-white rounded-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered text-white w-full bg-transparent border-2 border-white rounded-none"
                      required
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="absolute top-4 right-3"
                    >
                      {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn rounded-none bg-[#000000] border-none text-white">
                    Login
                  </button>
                </div>
                <div className="form-control mt-3">
                  <button
                    onClick={handleGoogleLogin}
                    className="btn rounded-none bg-[#000000] border-none text-white"
                  >
                    <FaGoogle /> Login with google
                  </button>
                </div>
                <p className="text-white">
                  Do not have any account, Please{" "}
                  <Link to="/register">
                    <span className="text-[#000] font-bold">Register</span>
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;