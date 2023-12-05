import {useState} from "react";
import { Button,Dropdown } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
// import { FaUserCircle } from "react-icons/fa";
import profileImg from "../../assets/profile.png"
import { BsPersonFill, BsBoxArrowRight } from "react-icons/bs";

const NavBar = ({toggle, setToggle}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuItemClick = (action) => {
    console.log("Clicked:", action);
    setShowDropdown(false); 
  };

  return <nav className="navbar w-100 bg-body-tertiary">
    <Button className="bg-light text-black border-0" onClick={() => setToggle(!toggle)}> { !toggle ?<RxHamburgerMenu className="m-2 fw-bold fs-4"/> : <GrClose className="m-2 fw-bold "/> }</Button>
    <Dropdown
        align="end"
        show={showDropdown}
        onToggle={handleDropdownToggle}
      >
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          onClick={handleDropdownToggle}
          style={{ visibility: "hidden", position: "absolute" }}
        />
        <Dropdown.Menu
          show={showDropdown}
          onHide={() => setShowDropdown(false)}
          className="me-2"
        >
          <Dropdown.Item onClick={() => handleMenuItemClick("Profile")}>
            <BsPersonFill className="me-2" />
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleMenuItemClick("Log Out")}>
            <BsBoxArrowRight className="me-2" />
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
        <img
          src={profileImg}
          alt=""
          width="25px"
          height="25px"
          className="profile-img me-3"
          onClick={handleDropdownToggle}
        />
      </Dropdown>
  </nav>;
};

export default NavBar;
