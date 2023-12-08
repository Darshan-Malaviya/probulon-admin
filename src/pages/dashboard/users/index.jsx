import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";

import TableComponent from "../../../components/table";
import UserTable from "./UserTable";

import api from "../../../services/api";
import swal from "../../../components/sweetAlert";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [row, setRow] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  async function fetchUser() {
    const resData = await api.get("http://79.143.90.196/api/v1/users/getAll");
    if (resData.isSuccess) {
      swal.success(resData.message);
      setData(resData.data);
    } else swal.error(resData.message);
  }
  useEffect(() => {
    fetchUser();
  }, []);
  // const columns = [
  //   {
  //     name: "Name",
  //     selector: (row) => row["firstName"],
  //     sortable: true,
  //   },
  //   {
  //     name: "Email",
  //     selector: (row) => row["email"],
  //     sortable: true,
  //   },
  //   {
  //     name: "LastName",
  //     selector: (row) => row["lastName"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "FirstName",
  //     selector: (row) => row["firstName"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "PositionText",
  //     selector: (row) => row["positionText"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "SecondaryEmail",
  //     selector: (row) => row["secondaryEmail"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "StatusText",
  //     selector: (row) => row["statusText"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "StatusText",
  //     selector: (row) => row["statusText"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "StatusText",
  //     selector: (row) => row["statusText"],
  //     sortable: true,
  //     right: "true",
  //   },
  //   {
  //     name: "StatusText",
  //     selector: (row) => row["statusText"],
  //     sortable: true,
  //     right: "true",
  //   },
  // ];

  // function handleSelectedRow(state) {
  //   setRow(state.selectedRows);
  // }

  return (
    <>
      <Modal show={show}>
        <ModalHeader>Add New User</ModalHeader>
        <ModalBody></ModalBody>
      </Modal>
      <Card className="m-2 h-100 border">
        <CardHeader className="fw-bold">Users</CardHeader>
        <CardBody>
          <div className="d-flex flex-row justify-content-between ">
            <input
              className="outline-none col-6 rounded-2 border-1px px-2 "
              type="text"
              placeholder="Filter Users..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <div>
              <Button className="bg-success mx-2 border-0">Active</Button>
              <Button className="bg-danger border-0">Deleted</Button>
            </div>

            <Button
              className="float-end btn  btn-primary"
              variant="outline"
              onClick={() => navigate("/dashboard/users/add")}
            >
              <IoMdAddCircle className="fs-3" />{" "}
              <span className="fw-medium">Create User </span>
            </Button>
          </div>

          {data.length !== 0 ? (
            <UserTable
              data={data.filter((item) => {
                if (filterText !== "")
                  return item.firstName
                    .toLowerCase()
                    .includes(filterText.toLowerCase());
                return item;
              })}
            />
          ) : (
            <h4 className="text-center m-3">Data is Not Define....</h4>
          )}
          {/* <TableComponent
            data={data.filter((item) => {
              if (filterText !== "")
                return item.firstName
                  .toLowerCase()
                  .includes(filterText.toLowerCase());
              return item;
            })}
            columns={columns}
            handleSelectedRow={handleSelectedRow}
          /> */}
        </CardBody>
      </Card>
    </>
  );
};

export default Users;
