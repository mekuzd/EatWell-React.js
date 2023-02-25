import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpClient";

function Forgotpassword() {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { setEmail } = useContext(Context);
  const mail = useRef({ email: "" });
  const navigate = useNavigate();

  const postEmail = async () => {
    try {
      const response = await httpClient.post(
        "/users/forgetpassword",
        mail.current,
      );
      setalert(true);
      setalertMessage(response.data.msg);
      setEmail(mail.current.email);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
    }
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    if (mail.current.email) {
      postEmail();
    }
  };

  const closeAlert = () => {
    setalert(false);
  };
  return (
    <DefaultLayout>
      <div className="top-color d-flex justify-content-center align-items-center p-1">
        <div className="fp-form ">
          <form className="reset-form" onSubmit={handleForgetPassword}>
            <FaLock size={50} style={{ marginTop: "30px" }} />
            <h1 className="text-center mt-3">Reset password</h1>
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            <p className="text-center mt-5">Enter your email address</p>

            <div>
              {" "}
              <input
                required
                type="email"
                className="fp-forminp"
                placeholder="Enter email address here"
                onChange={(e) => (mail.current.email = e.target.value)}
              />
            </div>
            <button type="submit" className="continue-btn">
              Continue
            </button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
export default Forgotpassword;
