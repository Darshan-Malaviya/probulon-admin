import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
function Sidebar({ routes, toggle }) {
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div className={`sidebar border h-100  ${!toggle ? 'd-none' : ''}`} style={{"width": "20%"}}>
      <div className="sidebar-wrapper">
        <div style={{backgroundColor:"rgb(46, 46, 63)",color:"white"}} className="logo d-flex align-items-center justify-content-start border p-2 fw-bolder">
          <span>Probulon</span>
        </div>
        <Nav className="flex-column">
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <Nav.Item className={activeRoute(prop.path) ? "sidebar-tab-active" : ''} key={key}>
                  <NavLink to={prop.path} 
                  style={{backgroundColor:"rgb(46, 46, 63)"}}
                  className="sidebar-tab btn fw-bold d-flex justify-content-start" >
                    <span style={{"fontSize": "20px",color:"#D0E1F9"}}>{prop.icon}</span>
                    <span className="mx-3" style={{"margin": "3px"}}>{prop.name}</span>
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
