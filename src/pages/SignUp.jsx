import { useContext, useEffect, useRef, useState } from "react";
import Alert from "../Components/Alert";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Link, useNavigate } from "react-router-dom";
import httpClient from "../Services/httpClient";
import { Context } from "../Provider/Context";

const Signup = () => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { setEmail } = useContext(Context);
  const navigate = useNavigate();
  const state = useRef({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const postUserDetails = async () => {
    try {
      const response = await httpClient.post("/users/regUsers", state.current);
      setalert(true);
      setalertMessage(response.data.message);
      setEmail(state.current.email);
      navigate("/otpverify");
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.message);
    }
  };

  const firstname = useRef(null);

  useEffect(() => {
    firstname.current.focus();
  }, []);

  const closeAlert = () => {
    setalert(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !state.current.email.includes("@") &&
      state.current.firstname &&
      state.current.lastname &&
      state.current.password
    ) {
      setalert(true);
      setalertMessage("include @ in email");
    } else if (
      !state.current.email.includes("@") &&
      state.current.firstname &&
      state.current.lastname
    ) {
      setalert(true);
      setalertMessage("include @ in email");
    } else if (
      state.current.email.includes("@") &&
      state.current.firstname &&
      state.current.lastname &&
      state.current.password.length < 8
    ) {
      setalert(true);
      setalertMessage("password length at least 8 characters");
    } else {
      postUserDetails();
    }
  };

  return (
    <DefaultLayout>
      <main className="row justify-content-center p-3">
        <div className=" mt-3 col-sm-4  m-auto rounded p-3 SignupPage">
          <h6 className="text-white fw-bold">EW</h6>
          <h1 className="text-center text-light fs-2 my-5">Welcome Back!</h1>
          <p className="text-center text-light p-3">
            To keep connected with us please Login with your personal info
          </p>
          <div className="text-center my-5">
            <Link
              to={"/login"}
              className="text-center text-white  border signin"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* form */}
        <div className="col-sm-5  mt-3   ">
          <form
            action=""
            className={` border-0  form-control  p-3`}
            style={{ width: "300px" }}
            onSubmit={handleSubmit}
          >
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            {/* First NAme  */}
            <div>
              <label htmlFor="firstname">First Name</label> <br />
              <input
                ref={firstname}
                required
                type="text"
                id="firstname"
                className="form-control "
                onChange={(e) => (state.current.firstname = e.target.value)}
              />
            </div>
            <br />
            {/* LastName  */}
            <div>
              <label htmlFor="lastname">Last Name</label> <br />
              <input
                required
                type="text"
                id="lastname"
                className="form-control"
                onChange={(e) => (state.current.lastname = e.target.value)}
              />
            </div>
            <br />
            {/* Email  */}
            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                required
                type="text"
                id="email"
                className="form-control"
                onChange={(e) => (state.current.email = e.target.value)}
              />
            </div>{" "}
            <br />
            {/* password  */}
            <div>
              <label htmlFor="password">Password</label> <br />
              <input
                required
                type="password"
                id="password"
                className="form-control"
                onChange={(e) => (state.current.password = e.target.value)}
              />
            </div>{" "}
            <br />
            <p>Forgot Password?</p>
            <div className="text-center">
              <button type="submit" className="p-2 rounded registerbtn">
                Register
              </button>
            </div>
          </form>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default Signup;
