import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(false);
    const { createUser, googleProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      const registerUser = { email, password, name, photo };
      console.log(registerUser);
      setRegisterError("");
      setSuccess("");
      if (password.length < 6) {
        setRegisterError("Password should be at least 6 characters");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setRegisterError("Do not have a capital letter");
        return;
      } else if (!/[#?!@$%^&*-]/.test(password)) {
        setRegisterError("Do not have a spacial character");
        return;
      }

      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("User Created Successfully");
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.log(error);
          setRegisterError("ERROR: Email Already Used");
        });
    };
    const handleGoogleRegister = () => {
      googleProvider()
        .then((result) => {
          console.log(result.user);
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div>
        <Helmet>
          <title>TechnoMinds | Register</title>
        </Helmet>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-flow-row ">
              <h1 className="text-3xl font-bold text-center ">
                Create New Account
              </h1>
              <div className="card flex-shrink-0 lg:w-[400px] shadow-2xl rounded-none   bg-[#f31312] border-none">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-white font-bold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered text-white bg-transparent border-2 border-white rounded-none"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-white font-bold">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="photo"
                      placeholder="Photo URL"
                      className="input input-bordered text-white bg-transparent border-2 border-white rounded-none"
                    />
                  </div>
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
                      className="input input-bordered text-white bg-transparent border-2 border-white rounded-none"
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
                    <button className="btn bg-[#000000] rounded-none border-none text-white">
                      Register
                    </button>
                  </div>
                  <div className="form-control mt-3">
                    <button
                      onClick={handleGoogleRegister}
                      className="btn bg-[#000000] rounded-none border-none text-white"
                    >
                      <FaGoogle /> Register with google
                    </button>
                  </div>
                  {registerError && (
                    <p className="text-red-900 font-bold">{registerError}</p>
                  )}
                  {success && (
                    <p className="text-green-700 font-bold">{success}</p>
                  )}
                  <p className="text-white">
                    Already have an account, Please{" "}
                    <Link to="/login">
                      <span className="text-[#000] font-bold">Login</span>
                    </Link>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;