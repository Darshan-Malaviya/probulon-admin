import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, Form } from "react-bootstrap";
import TableComponent from "../../../components/table";
import api from "../../../services/api";
import swal from "../../../components/sweetAlert";
import { IoMdAddCircle } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Devices = () => {
  const [data, setData] = useState([]);
  const [row, setRow] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  async function fetchData() {
    const resData = await api.get("/devices/getAll");
    if (resData.isSuccess) {
      setData(resData.data);
    } else swal.error(resData.message);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      name: "Name",
      selector: (row) => row["name"],
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row["email"],
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row["status"],
      sortable: true,
      right: "true",
    },
  ];

  function handleSelectedRow(state) {
    setRow(state.selectedRows);
  }

  return (
    <>
      <Modal show={show}>
        <ModalHeader>Add New Device</ModalHeader>
        <ModalBody>
          
        </ModalBody>
      </Modal>
      <Card className="m-2 h-100 border">
        <CardHeader>Devices</CardHeader>
        <CardBody>
        <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 p-0">
            <Button
              className="adduser ms-3 p-1.8 btn-sm shadow"
              variant="outline"
              onClick={() => navigate("/dashboard/users/add")}
            >
              <IoMdAddCircle className="fs-3" />{" "}
              Create Divices
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
          <TableComponent
            data={data.filter((item) => {
              if (filterText !== "")
                return item.name
                  .toLowerCase()
                  .includes(filterText.toLowerCase());
              return item;
            })}
            columns={columns}
            handleSelectedRow={handleSelectedRow}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Devices;
