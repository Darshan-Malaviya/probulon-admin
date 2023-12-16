import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Button } from "react-bootstrap";
import api from "../../../services/api";
import swal from "../../../components/sweetAlert";
import { IoMdAddCircle } from "react-icons/io";
import DevicesTable from "./DevicesTable";
import { useNavigate } from "react-router-dom";
const Devices = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();
  const fetchData = async () => {
    const resData = await api.get("/devices/getAll");
    if (resData.isSuccess) {
      setData(resData.data);
    } else swal.error(resData.message);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Card className="m-2 h-100 border">
        <CardHeader className="fw-bold  ps-3">Devices</CardHeader>
        <CardBody>
          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-6 p-0">
              <Button
                className="adduser ms-3 p-1.8 btn-sm shadow-sm"
                variant="outline"
                onClick={() => navigate("/dashboard/devices/add")}
              >
                <IoMdAddCircle className="fs-3" /> Create Devices
              </Button>
              <Button
                variant=""
                className="activeuser mx-1 p-1.5 border-0 shadow-sm"
              >
                Active
              </Button>
              <Button
                variant=""
                className="deleteuser border-0  p-1.5 shadow-sm  me-auto "
              >
                Deleted
              </Button>
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
          {data.length > 0 ? (
            <DevicesTable
              data={data.filter((item) => {
                if (filterText !== "")
                  return item.name
                    .toLowerCase()
                    .includes(filterText.toLowerCase());
                return item;
              })}
              fetchData={fetchData}
            />
          ) : (
            <h4 className="text-center mt-3">Loading....</h4>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default Devices;
