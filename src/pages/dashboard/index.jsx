import React, { useState, useEffect } from "react";

import Sidebar from "../../components/sidebar";
import NavBar from "../../components/navbar";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Users from "./users";
import Clients from "./clients";
import Devices from "./devices";
import { FaUsers, FaHome } from "react-icons/fa";
import { BsHouseLockFill } from "react-icons/bs";
import { RiFolderUserFill } from "react-icons/ri";
import AddSteper from "./users/AddSteper";
import AddClientSteper from "./clients/AddClientSteper";
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
  ];
  useEffect(() => {
    setPath(location.pathname.split("/").slice(2));
  }, [location.pathname]);

  return (
    <>
      <div className="d-flex flex-row mt-5 h-100 dashboard">
        <Sidebar routes={routes} toggle={toggle} />
        <div className="d-flex flex-column w-100">
          <NavBar toggle={toggle} setToggle={setToggle} />
          <div className="m-2 mt-4 card rounded-2">
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
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
