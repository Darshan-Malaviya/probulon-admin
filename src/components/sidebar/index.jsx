import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
function Sidebar({ routes, toggle }) {
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div style={{backgroundColor:"rgb(46, 46, 63)"}} className={`sidebar border h-100 shadow-lg  ${!toggle ? 'd-none' : ''}`}>
      <div className="sidebar-wrapper">
        <div 
        style={{color:"white"}} 
        className="logo d-flex align-items-center justify-content-start border p-2 fw-bolder shadow-lg">
          <span className="fs-3 text-info">Probulon</span>
        </div>
        <Nav className="flex-column">
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <Nav.Item className={activeRoute(prop.path) ? "sidebar-tab-active" : ''} key={key}>
                  <NavLink to={prop.path} 
                  style={{backgroundColor:"rgb(46, 46, 63)"}}
                  className="sidebar-tab btn p-2  fw-bold d-flex justify-content-start shadow-lg" >
                    <span className="ms-2 shadow-lg" style={{"fontSize": "20px",color:"#D0E1F9"}} >{prop.icon}</span>
                    <span className="mx-3 ms-4 " style={{"margin": "3px","fontSize": "15px"}}>{prop.name}</span>
                  </NavLink>
                </Nav.Item>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
