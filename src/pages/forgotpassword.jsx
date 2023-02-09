import { useState } from "react"
import { FaLock, FaUnlock } from "react-icons/fa"

function Forgotpassword() {

    const [cont, setcont] = useState(true)
    const oncontinue = () => {
        setcont(false)
    }
    return (

        <>
            {
                cont && <div>
                    <div className="top-color"></div>
                    <div className="bottom-color"></div>
                    <div className="fp-form">

                        <form className="reset-form">
                            <FaLock size={60} style={{ marginTop: "30px" }} />
                            <h1 className="text-center mt-3">
                                Reset password
                            </h1>
                            <p className="text-center mt-5">
                                Enter your email address
                            </p>

                            <input type="email" className="fp-forminp" placeholder="Enter email address here" ></input >
                            <button className="continue-btn" onClick={oncontinue}>Continue</button>
                        </form>
                    </div>
                </div>

            }

            {!cont && <div>
                <div className="top-color" ></div>
                <div className="bottom-color"></div>
                <div className="fp-form">

                    <form className="reset-form">
                        <FaUnlock size={60} style={{ marginTop: "30px" }} />
                        <h1 className="text-center mt-3">
                            Reset Account password
                        </h1>
                        <p className="text-center mt-2">
                            Enter a new password for Eatwell
                        </p>

                        <input type="email" className="fp-forminp" placeholder="Password" ></input >
                        <input type="email" className="fp-forminp" placeholder="New password" ></input >
                        <button className="continue-btn">Reset password</button>
                    </form>
                </div>
            </div>}
        </>

    )


}
export default Forgotpassword