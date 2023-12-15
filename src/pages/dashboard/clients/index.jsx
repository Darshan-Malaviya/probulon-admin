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
import TableComponent from "../../../components/table";
import api from "../../../services/api";
// import swal from "../../../components/sweetAlert";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import ClientTable from "./ClientTable";
const Client = () => {
  const [data, setData] = useState([]);
  const [row, setRow] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  async function fetchUser() {
    const resData = await api.get("/users/getAll");
    if (resData.isSuccess) {
      setData(resData.data);
    } else toast.error(resData.message);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  function handleSelectedRow(state) {
    setRow(state.selectedRows);
  }
  return (
    <Card className="m-2 h-100 border w-auto">
      <CardHeader className="fw-bold  ps-3">Client</CardHeader>
      <CardBody>
        <div>
          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 p-0">
              <Button
                className="adduser ms-3 p-1.8 btn-sm shadow-sm"
                variant="outline"
                onClick={() => navigate("/dashboard/clients/add")}
              >
                <IoMdAddCircle className="fs-3" /> Create Client
              </Button>
              <Button
                variant=""
                className="activeuser mx-1 p-1.5  border-0 shadow-sm"
              >
                Active
              </Button>
              <Button
                variant=""
                className="deleteuser border-0 p-1.5 shadow-sm me-auto "
              >
                Deleted
              </Button>
            </div>
            <div className="col-sm-12 p-2 col-md-6 text-end p-0">
              <input
                className="input outline-none fs-5 col-lg-10 rounded-3 border-1px px-2 shadow-sm"
                type="search"
                placeholder="Filter Users..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>
          </div>
          {data.length > 0 ? (
            <ClientTable
              data={data.filter((item) => {
                if (filterText !== "")
                  return item.name
                    .toLowerCase()
                    .includes(filterText.toLowerCase());
                return item;
              })}
              setData={setData}
            />
          ) : (
            <h4 className="text-center mt-3">Data is Not Define....</h4>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Client;
