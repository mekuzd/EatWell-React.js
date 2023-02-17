const ResetPassword = () => {
  return (
    <>
      <div className="top-color"></div>
      <div className="bottom-color"></div>
      <div className="fp-form">
        <form className="reset-form">
          <FaUnlock size={60} style={{ marginTop: "30px" }} />
          <h1 className="text-center mt-3">Reset Account password</h1>
          <p className="text-center mt-2">Enter a new password for Eatwell</p>

          <input
            type="email"
            className="fp-forminp"
            placeholder="Password"
          ></input>
          <input
            type="email"
            className="fp-forminp"
            placeholder="New password"
          ></input>
          <button className="continue-btn">Reset password</button>
        </form>
      </div>
    </>
  );
};
export default ResetPassword;
