import React from "react";
import { Button } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import profileImg from "../../assets/profile.png"

const NavBar = ({toggle, setToggle}) => {
  return <nav className="navbar w-100 bg-body-tertiary">
    <Button className="bg-light text-black border-0" onClick={() => setToggle(!toggle)}> { !toggle ?<RxHamburgerMenu className="m-2 fw-bold"/> : <GrClose className="m-2 fw-bold"/> }</Button>
    <Button className="bg-light border-0 float-end"> <img src={profileImg} alt="" width="30px" height="30px" className="profile-img"/></Button>
  </nav>;
};

export default NavBar;
