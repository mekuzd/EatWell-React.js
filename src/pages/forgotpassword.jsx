import { useRef } from "react";

import { FaLock } from "react-icons/fa";

function Forgotpassword() {
  const mail = useRef({ email: "" });
  const handleForgetPassword = (e) => {
    e.preventDefault();
    console.log(mail.current.email);
  };

  return (
    <div className="top-color d-flex justify-content-center align-items-center p-1">
      <div className="fp-form ">
        <form className="reset-form" onSubmit={handleForgetPassword}>
          <FaLock size={50} style={{ marginTop: "30px" }} />
          <h1 className="text-center mt-3">Reset password</h1>
          <p className="text-center mt-5">Enter your email address</p>

          <div>
            <input
              ref={mail}
              type="email"
              className="fp-forminp"
              placeholder="Enter email address here"
              onChange={(e) => (mail.current.email = e.target.value)}
            />
          </div>
          <button className="continue-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
export default Forgotpassword;
