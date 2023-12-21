import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button, 
} from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";
import {  toast } from 'react-toastify';
import UserTable from "./UserTable";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import "./index.css"
const Users = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();
  async function fetchUser() {
    const resData = await api.get("/users/getAll?type=2");
    console.log(resData)
    if (resData.isSuccess) {
      setData(resData.data);
    } else toast.error(resData.message);
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
      <Card className="m-2 h-100 border">
        <CardHeader className="fw-bold ps-3 ">Users</CardHeader>
        <CardBody>
        <div>
          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 p-0">
            <Button
              className="adduser ms-3 p-1.8 btn-sm shadow-sm"
              variant="outline"
              onClick={() => navigate("/dashboard/users/add")}
            >
              <IoMdAddCircle className="fs-3" />{" "}
              Create User 
            </Button>
             <Button variant="" className="activeuser mx-1 p-1.5  border-0 shadow-sm">Active</Button>
              <Button variant="" className="deleteuser border-0 p-1.5 shadow-sm me-auto ">Deleted</Button>
            </div>       
            <div className="col-sm-12 p-2 col-md-6 text-end p-0"> 
            <input 
              className="searchInput px-3 pt-1 fs-5 col-lg-10 rounded-5 ps-3 shadow-sm"
              type="search" 
              placeholder="Search..."
              value={filterText} 
              onChange={(e) => setFilterText(e.target.value)}
            />
           
            </div>
          </div>
        {data.length > 0 ? (
            <UserTable
              data={data.filter((item) => {
                if (filterText !== "")
                  return item.name
                    .toLowerCase()
                    .includes(filterText.toLowerCase());
                return item;
              })} fetchUser={fetchUser}
            
            />
          ) : 
            <h4 className="text-center mt-3">Data is Not Valide....</h4>
          }
          </div>
        </CardBody>
      </Card>
  );
};

export default Users;
