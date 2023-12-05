import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, Form } from "react-bootstrap";
import TableComponent from "../../../components/table";
import api from "../../../services/api";
import swal from "../../../components/sweetAlert";
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
          <div className="d-flex flex-row justify-content-between ">
            <input
              className="outline-none col-6 rounded-2 border-1px px-2"
              type="text"
              placeholder="Filter Devices..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <Button className="float-end" onClick={() => navigate('/dashboard/devices/add')}>
              Add Device
            </Button>
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
