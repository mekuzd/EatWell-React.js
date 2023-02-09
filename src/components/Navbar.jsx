import { useEffect, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [changeNav, setchangeNav] = useState(false);
  const [show, setShow] = useState(false);
  const changeNavbarClass = () => {
    if (window.scrollY > 80) {
      setchangeNav(true);
    } else {
      setchangeNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarClass);
    return () => {
      window.removeEventListener("scroll", changeNavbarClass);
    };
  }, [window.scrollY]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <nav className="shadow d-flex justify-content-around p-2 ">
      {/* mobile navbar  */}

      <Link to={"/"} className="fs-1 fw-bold eatwelltext">
        Eatwell
      </Link>

      <button className="d-block d-md-none ms-auto barsbtn ">
        <FaBars className=" fs-4" onClick={handleShow} />
      </button>
      {/* toggle bar */}

      <Sidebar show={show} handleClose={handleClose} />

      {/* nav links on desktop */}

      <div className="d-none d-md-flex justify-content-center align-items-center">
        <Link to={"/signup"} className="text-dark fs-5 ">
          <span className="mx-2">
            <FaUserCircle />
          </span>
          SignUp
        </Link>
        <Link to={"/login"} className="mx-4 text-dark fs-5  ">
          Login
          <span>
            <AiOutlineLogin />
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
