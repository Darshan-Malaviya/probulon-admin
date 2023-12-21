import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import profileImg from "../../assets/profile.png";
import { BsPersonFill, BsBoxArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocale } from "../../language/LocalSlice";
import "./index.css";
import local from "../../language";
const NavBar = ({ toggle, setToggle }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuItemClick = (action) => {
    console.log("Clicked:", action);
    action === "LogOut"
      ? localStorage.removeItem("user_token") & navigate("/login")
      : action === "Profile"
      ? navigate("/dashboard/*")
      : null;
    setShowDropdown(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setLocale(local[e.target.value]));
  };

  return (
    <div className="container">
      <nav
        className={
          toggle
            ? "navbar w-auto shadow-sm fixed-top  nav"
            : "navbar w-auto shadow-sm fixed-top  nav"
        }
      >
        <Button
          variant=""
          className="navopentogle p-1 ms-2 my-0 text-white border-0"
          onClick={() => setToggle(!toggle)}
        >
          {" "}
          {!toggle ? (
            <RxHamburgerMenu className="m-2 fw-bold fs-4" />
          ) : (
            <GrClose className="m-2 fw-bold" />
          )}
        </Button>

        <Dropdown
          align="end"
          show={showDropdown}
          onToggle={handleDropdownToggle}
        >
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            onMouseEnter={handleDropdownToggle}
            style={{ visibility: "hidden", position: "absolute" }}
          />
          <Dropdown.Menu
            show={showDropdown}
            onHide={() => setShowDropdown(false)}
            className=""
          >
            <Dropdown.Item onClick={() => handleMenuItemClick("Profile")}>
              <FaHome className="profileicon me-2" />
              Home
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleMenuItemClick("Profile")}>
              <BsPersonFill className="profileicon me-2" />
              Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleMenuItemClick("LogOut")}>
              <BsBoxArrowRight className="profileicon me-2" />
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
          <select
            name="language"
            id="language"
            onChange={(e) => handleChange(e)}
            className="me-3 rounded-2 btn text-white bg-gradient shadow-lg"
          >
            <option value="en" className="text-black" selected>
              English
            </option>
            <option value="es" className="text-black">
              Spanish
            </option>
            <option value="fr" className="text-black">
            French
            </option>
          </select>
          <FaUserCircle className="profile " onClick={handleDropdownToggle} />
        </Dropdown>
      </nav>
    </div>
  );
};

export default NavBar;
