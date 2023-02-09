import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Context";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaKey, FaUserCircle } from "react-icons/fa";


function Login() {
  const navigate = useNavigate();
  const username = useRef()
  const password = useRef()

  return (
    <DefaultLayout>

      <section className="signupsection">
        <div className="advertisementcase">
          <div className="adv-case">
            <div className="img-case">
              <img className="food-img" src="food.jpg"></img>
            </div>
            <div className="text-case">
              <p>We are always at your service.</p>
              <p>
                Customers service represents the heart of a brand in the hearts of its cusomers.
              </p>
            </div>
          </div>
        </div>

        <div className="signupcase">
          <form className="form-case">
            <h1 className="eatwelltext">Eatwell</h1>
            <h3>Welcome to Eatwell</h3>
            <div className="inp-case">
              <span className="mx-2">
                <FaUserCircle />
              </span>
              <input className="input" id="username" ref={username} placeholder="Email or Username"></input>
              <span className="mx-2">
                <FaKey />
              </span>
              <input className="input" ref={password} placeholder="Password"></input>
            </div>

            <span className="forgot-password"><Link to="/forgotpassword">Forgot password</Link></span>
            <button className="login-btn">Login</button>
            <div className="d-flex hr-case">
              <hr className="hr" />
              <span>or</span>
              <hr className="hr" /></div>
            <button className="google-sign">
              <AiOutlineGoogle color="red" size={22} /> Sign in with Google</button>
            <p>New? <Link to={"/signup"} >Create Account</Link></p>
          </form>
        </div>

      </section>

    </DefaultLayout>
  );
};
export default Login;
