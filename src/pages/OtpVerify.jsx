import { useContext, useState, useRef } from "react";
import Alert from "../Components/Alert";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpClient";

const OtpVerify = () => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { email } = useContext(Context);
  const submitOtp = useRef({ user_otp: "" });

  const postUserOtp = async () => {
    try {
      const response = await httpClient.post(
        "/users/verifyotp",
        submitOtp.current,
      );
      console.log(response);
      setalert(true);
      setalertMessage(response.data.msg);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (submitOtp.current.user_otp) {
      postUserOtp();
    }
  };

  const closeAlert = () => {
    setalert(false);
  };
  return (
    <DefaultLayout>
      <main className=" d-flex ">
        <div className="m-auto">
          <form action="" onSubmit={handleVerifyOtp}>
            <p className="fw-bold fs-4">
              please input the otp that was sent to {email}
            </p>
            <input
              required
              type="text"
              className="p-2"
              onChange={(e) => (submitOtp.current.user_otp = e.target.value)}
            />{" "}
            <br /> <br />
            <button type="submit" className="btn btn-primary mx-4 p-2 w-25">
              {" "}
              submit
            </button>
          </form>
          {alert && (
            <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
          )}
        </div>
      </main>
    </DefaultLayout>
  );
};
export default OtpVerify;
