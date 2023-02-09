function Forgotpassword() {
    return (


        <>
            <div className="top-color"></div>
            <div className="bottom-color"></div>
            <div className="fp-form">

                <form className="reset-form">
                    <h1 className="text-center mt-5">
                        Reset password
                    </h1>
                    <p className="text-center mt-5">
                        Enter your email address
                    </p>

                    <input type="email" className="fp-forminp" placeholder="Enter email address here" ></input >
                    <button className="continue-btn">Continue</button>
                </form>
            </div>
        </>

    )


}
export default Forgotpassword