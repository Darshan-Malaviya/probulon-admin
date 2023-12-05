import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, Form } from "react-bootstrap";
import TableComponent from "../../../components/table";
import api from "../../../services/api";
import swal from "../../../components/sweetAlert";
import { useNavigate } from "react-router-dom";
const Client = () => {
  const [data, setData] = useState([]);
  const [row, setRow] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  async function fetchUser() {
    const resData = await api.get("/users/getAll");
    if (resData.isSuccess) {
      setData(resData.data);
    } else swal.error(resData.message);
  }
  useEffect(() => {
    fetchUser();
  }, []);
  const columns = [
    {
      name: "Name",
      selector: (row) => row["firstName"],
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row["email"],
      sortable: true,
    },
    {
      name: "LastName",
      selector: (row) => row["lastName"],
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
        <ModalHeader>Add New Client</ModalHeader>
        <ModalBody>
          
        </ModalBody>
      </Modal>
      <Card className="m-2 h-100 border">
        <CardHeader className="fw-bold">Client</CardHeader>
        <CardBody>
          <div className="d-flex flex-row justify-content-between ">
            <input
              className="outline-none col-6 rounded-2 border-1px px-2"
              type="text"
              placeholder="Filter Clients..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <div>
              <Button className="bg-success mx-2 border-0">Active</Button>
              <Button className="bg-danger border-0">Deleted</Button>
            </div>
            <Button className="float-end" onClick={() => navigate('/dashboard/clients/add')}>
              Add Client
            </Button>
          </div>
          <TableComponent
            data={data.filter((item) => {
              if (filterText !== "")
                return item.firstName
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
}

export default Client