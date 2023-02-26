import { useContext, useRef, useState } from "react";
import Alert from "../Components/Alert";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Context } from "../Provider/Context";
import httpClient from "../Services/httpClient";

const ChangePass = () => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { email } = useContext(Context);
  const postNewPass = useRef({
    user_otp: "",
    password: "",
    confirmPassword: "",
  });

  const postNewPassword = async () => {
    try {
      const response = await httpClient.post(
        "/users/changePassword",
        postNewPass.current,
      );
      setalert(true);
      setalertMessage(response.data.msg);
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
    }
  };

  const handleChangePass = (e) => {
    e.preventDefault();
    if (postNewPass.current.password.length < 8) {
      setalert(true);
      setalertMessage("New password length is less than 8 characters");
      return;
    }
    if (postNewPass.current.password != postNewPass.current.confirmPassword) {
      setalert(true);
      setalertMessage("please input same password");
      return;
    }
    postNewPassword();
  };

  const closeAlert = () => {
    setalert(false);
  };

  return (
    <DefaultLayout>
      <main className=" d-flex ">
        <div className="m-auto p-3">
          <form action="" onSubmit={handleChangePass}>
            <p className="fw-bold fs-4">
              please input the otp that was sent to {email} to verify change
              your password
            </p>
            <div>
              <label htmlFor="otp">OTP</label> <br />
              <input
                id="otp"
                required
                type="text"
                className="p-2"
                onChange={(e) =>
                  (postNewPass.current.user_otp = e.target.value)
                }
              />{" "}
            </div>{" "}
            <div className="my-2">
              <label htmlFor="new">New Password</label> <br />
              <input
                id="new"
                required
                type="text"
                className="p-2"
                onChange={(e) =>
                  (postNewPass.current.password = e.target.value)
                }
              />{" "}
            </div>{" "}
            <div>
              <label htmlFor="confirm">Confirm Password</label> <br />
              <input
                id="confirm"
                required
                type="text"
                className="p-2"
                onChange={(e) =>
                  (postNewPass.current.confirmPassword = e.target.value)
                }
              />{" "}
            </div>{" "}
            <br />
            <button type="submit" className="btn btn-primary w-25">
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
export default ChangePass;
