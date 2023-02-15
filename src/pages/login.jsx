import { useEffect, useRef, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineGoogle,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { FaKey, FaUserCircle } from "react-icons/fa";
import Alert from "../Components/Alert";
import httpClient from "../Services/httpClient";

function Login() {
  const navigate = useNavigate();
  const state = useRef({ email: "", password: "" });
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const email = useRef(null);

  useEffect(() => {
    email.current.focus();
  });

  const checkUserDetails = async () => {
    try {
      const response = await httpClient.post("/users", state.current);
      setalert(true);
      setalertMessage(response.data.message);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!state.current.email.includes("@")) {
      setalert(true);
      setalertMessage("Include @ in email");
    } else if (state.current.password.length < 8) {
      setalert(true);
      setalertMessage("Password length is less than 8");
    } else {
      checkUserDetails();
    }
  };
  const closeAlert = () => {
    setalert(false);
  };

  return (
    <DefaultLayout>
      <section>
        <div className="signupsection row p-4">
          {/* food  img  */}

          <div className="adv-case col-sm-5">
            <div className="img-case">
              <img className="food-img" src="food.jpg"></img>
            </div>
            <div className="text-case">
              <p>We are always at your service.</p>
              <p>
                Customers service represents the heart of a brand in the hearts
                of its cusomers.
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="form-case col-sm-5">
            <h1 className="eatwelltext">Eatwell</h1>
            <h3>Welcome to Eatwell</h3>
            {/* alertmessage  */}
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            <div className="inp-case">
              {/* username */}
              <div>
                <span className="mx-2">
                  <FaUserCircle />
                </span>
                <input
                  required
                  className="input"
                  ref={email}
                  placeholder="Email or Username"
                  onChange={(e) => (state.current.email = e.target.value)}
                />
              </div>
              {/* password  */}
              <div className="position-relative">
                <span className="mx-2">
                  <FaKey />
                </span>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  onChange={(e) => (state.current.password = e.target.value)}
                />
                <p
                  onClick={() => setshowPassword(!showPassword)}
                  className="border-0 bg-transparent fs-5 showPass "
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </p>
              </div>
            </div>
            {/* forgotpassword */} <br />
            <Link to="/forgotpassword" className="text-dark ">
              Forgot password?
            </Link>
            <br />
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="d-flex hr-case">
              <hr className="hr" />
              <span className="mx-2">or</span>
              <hr className="hr" />
            </div>{" "}
            <br />
            <p className="google-sign text-center">
              <AiOutlineGoogle color="red" size={22} /> Sign in with Google
            </p>
            <p>
              New?{" "}
              <Link to={"/signup"} className="text-dark">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
}
export default Login;
