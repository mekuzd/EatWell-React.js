import { useContext } from "react";
import DefaultLayout from "../Layouts/DefaultLayouts";
import { Context } from "../Provider/Context";

const OtpVerify = () => {
  const { email } = useContext(Context);
  return (
    <DefaultLayout>
      <main className=" d-flex ">
        <div className="m-auto">
          <form action="">
            <p className="fw-bold fs-4">
              please input the otp that was sent to {email}
            </p>
            <input type="text" className="p-2" /> <br /> <br />
            <button className="btn btn-primary mx-4 p-2 w-25"> submit</button>
          </form>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default OtpVerify;
