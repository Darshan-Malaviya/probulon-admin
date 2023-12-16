import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import NavBar from "../../components/navbar";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Users from "./users";
import Clients from "./clients";
import Devices from "./devices";
import Technician from "./technition";
import Executive from "./executive";
import { FaUsers, FaHome } from "react-icons/fa";
import { BsHouseLockFill } from "react-icons/bs";
import { RiFolderUserFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsPersonGear } from "react-icons/bs";
import AddTechnitionSteper from "./technition/AddTechnitionSteper";
import AddExecutiveSteper from "./executive/AddExecutiveSteper";
import AddSteper from "./users/AddSteper";
import AddClientSteper from "./clients/AddClientSteper";
import AddDevicesSteper from "./devices/AddDevicesSteper";
import "./index.css"
const Dashboard = () => {
  const [path, setPath] = useState([]);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const routes = [
    {
      name: "Clients",
      icon: <RiFolderUserFill />,
      path: "/dashboard/clients",
      element: <Clients />,
    },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/dashboard/users",
      element: <Users />,
    },
    {
      name: "Devices",
      icon: <BsHouseLockFill />,
      path: "/dashboard/devices",
      element: <Devices />,
    },
    {
      name:"Technition",
      icon:<BsPersonGear />,
      path:"/dashboard/technician",
      element:<Technician/>,
    },
    {
      name:"Executive",
      icon:<BsPersonCheckFill />,
      path:"/dashboard/executive",
      element:<Executive/>,
    }
  ];
  useEffect(() => {
    setPath(location.pathname.split("/").slice(2));
  }, [location.pathname]);

  return (
    <>
      <div className="d-flex flex-row mt-5 h-100 dashboard">
      <div className={`${toggle ? "col-2 d-flex flex-column " : ""}`}>
        <Sidebar  routes={routes} toggle={toggle} />
      </div>
        <div className={`${toggle ? "col-10 d-flex flex-column  container":"col-12 d-flex flex-column "}`}>
          <NavBar toggle={toggle} setToggle={setToggle} />
          <div className="m-2 mt-4 card rounded-2 shadow">
            <nav aria-label="breadcrumb ">
              <ol className="d-flex justify-content-start align-content-center h-100 breadcrumb">
                <li className="px-2 breadcrumb-item">
                  <FaHome className="homeicon fs-4"/>
                </li>
                {path.map((item, index) => (
                  <li key={index} className="breadcrumb-item">
                    <NavLink
                      to={`/dashboard/${item}`}
                      className="text-decoration-none fw-bold breadcrumb-item-color"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<AddSteper />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/add" element={<AddClientSteper />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/devices/add" element={<AddDevicesSteper />} />
            <Route path="/technician" element={<Technician />} />
            <Route path="/technician/add" element={<AddTechnitionSteper  />} />
            <Route path="/executive" element={<Executive />} />
            <Route path="/executive/add" element={<AddExecutiveSteper  />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
