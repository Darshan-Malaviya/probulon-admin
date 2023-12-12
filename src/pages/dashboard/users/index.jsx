import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  
} from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";
import {  toast } from 'react-toastify';
// import TableComponent from "../../../components/table";
import UserTable from "./UserTable";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import "./index.css"
const Users = () => {
  const [data, setData] = useState([]);
  const [row, setRow] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  async function fetchUser() {
    const resData = await api.get("http://79.143.90.196/api/v1/users/getAll");
    console.log(resData)
    if (resData.isSuccess) {
      setData(resData.data);
    } else toast.error(resData.message);
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Modal show={show}>
        <ModalHeader>Add New User</ModalHeader>
        <ModalBody></ModalBody>
      </Modal>
      <Card className="m-2 h-100  border">
        <CardHeader className="fw-bold ">Users</CardHeader>
        <CardBody>
          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 p-0">
            <Button
              className="adduser ms-3 p-1.8 btn-sm shadow"
              variant="outline"
              onClick={() => navigate("/dashboard/users/add")}
            >
              <IoMdAddCircle className="fs-3" />{" "}
              Create User 
            </Button>
             <Button variant="" className="activeuser mx-1 p-1.5  border-0 shadow">Active</Button>
              <Button variant="" className="deleteuser border-0 p-1.5 shadow me-auto ">Deleted</Button>
            </div>       
            <div className="col-sm-12 p-2 col-md-6 text-end p-0"> 
            <input 
              className="input outline-none fs-5 col-lg-10 rounded-3 border-1px px-2 shadow-sm"
              type="text" 
              placeholder="Filter Users..."
              value={filterText} 
              onChange={(e) => setFilterText(e.target.value)}
            />
           
            </div>
          </div>
<div className="">
{data.length > 0 ? (
            <UserTable
              data={data.filter((item) => {
                if (filterText !== "")
                  return item.name
                    .toLowerCase()
                    .includes(filterText.toLowerCase());
                return item;
              })}
            />
          ) : (
            <h4 className="text-center m-3">Data is Not Valide....</h4>
          )}
</div>   
        </CardBody>
      </Card>
    </>
  );
};

export default Users;
