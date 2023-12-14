import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import UserDetails from "./UpdateClient/UserDetails";
import UserId from "./UpdateClient/UserId";
import Other from "./UpdateClient/Other";
import { toast } from "react-toastify";
import swal from "../../../components/sweetAlert";
import api from "../../../services/api";
// import "./index.css";
const UserTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [clientdata, setClientdata] = useState(data);
  const [show, setShow] = useState(false);
  const [updateuser, setUpdateuser] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleShow = async (id) => {
    try {
      const resData = await api.get(`/users/getById?userId=${id}`);
      if (resData.isSuccess) {
        console.log(resData, "-----getid");
        setUpdateuser(resData.data);
        setShow(true);
      } else toast.error(resData.message);
    } catch (error) {
      toast.error(error);
    }
  };
  console.log(updateuser);
  const formik = useFormik({
    initialValues: {
      name: "",
      collaborator: "",
      surname: "",
      lastSurname: "",
      mobile: "",
      secondaryMobile: "",
      email: "",
      secondaryEmail: "",
      taxStatus: "",
      documentType: "",
      idNumber: "",
      postalCode: "",
      town: "",
      province: "",
      country: "",
      taxAddress: "",
      notes: "",
      deviceId: "",
      password: "",
      gender: "",
      secondSupervisor: "",
      thirdEmail: "",
      supervisor: "",
      technician: "",
      timezone: "",
      deviceStatus: "",
      scheduleTime: "",
      contactPerson: "",
      address: "",
      deviceNotes: "",
    },
    validationSchema: Yup.object({
      collaborator: Yup.number().optional(),
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      lastSurname: Yup.string().optional(),
      mobile: Yup.string().required("Mobile is required"),
      secondaryMobile: Yup.string().required("SecondaryMobile is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      secondaryEmail: Yup.string()
        .email("Invalid email")
        .required("SecondaryEmail is required"),

      taxStatus: Yup.string().optional(),
      documentType: Yup.number().required("documentType is required"),
      idNumber: Yup.string().required("IdNumber is required"),
      postalCode: Yup.string().required("PostalCode is required"),
      town: Yup.string().required("Town is required"),
      province: Yup.string().required("province is required"),
      country: Yup.string().required("country is required"),
      notes: Yup.string().required("notes is required"),
      taxAddress: Yup.string().required("taxAddress is required"),
      deviceId: Yup.string().optional().min(24).max(24),
      password: Yup.string()
        .min(6, "Password is too short - should be 6 chars minimum")
        .required("password is required"),
      gender: Yup.string().required("gender is required"),
      secondSupervisor: Yup.string().required("Second supervisor is required"),
      thirdEmail: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      supervisor: Yup.string().required("Supervisor is required"),
      technician: Yup.string().required("Technician is required"),
      timezone: Yup.string().required("Timezone is required"),
      deviceStatus: Yup.string().required("Device status is required"),
      scheduleTime: Yup.string().required("Schedule time is required"),
      contactPerson: Yup.string().required("Contact person is required"),
      address: Yup.string().required("Address is required"),
      deviceNotes: Yup.string().required("Device notes are required"),
    }),
    onSubmit: async (value) => {
      try {
        const resData = await api.put("/users/update", value);
        console.log(resData);
        if (resData.isSuccess) {
          toast.success("Client Create SuccessFull");
          navigate("/dashboard/clients");
        } else toast.error(resData.message);
      } catch (error) {
        toast.error("User Data Not Add", error);
      }
    },
  });
  const { handleChange, handleSubmit } = formik;

  const handleDelete = async (id) => {
    try {
      const resData = await api.delete(`/users/delete?userId=${id}`);
      console.log(resData);
      if (resData.isSuccess) {
        navigate("/dashboard/clients");
      } else toast.error(resData.message);
    } catch (error) {
      toast.error(error);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    const errors = Object.keys(formik.errors);
    let currentFields = [];

    if (page === 0) {
      currentFields = [
        "deviceId",
        "email",
        "lastSurname",
        "name",
        "secondaryEmail",
        "password",
        "surname",
        "gender",
        "secondaryMobile",
        "mobile",
      ];
    } else if (page === 1) {
      currentFields = [
        "taxStatus",
        "collaborator",
        "idNumber",
        "documentType",
        "postalCode",
        "country",
        "town",
        "thirdEmail",
        "notes",
        "timezone",
        "taxAddress",
      ];
    } else if (page === 2) {
      currentFields = [
        "province",
        "secondSupervisor",
        "supervisor",
        "technician",
        "deviceStatus",
        "scheduleTime",
        "contactPerson",
        "address",
        "deviceNotes",
      ];
    }

    const hasErrors = currentFields.some((field) => errors.includes(field));

    if (!hasErrors && page !== Formtitle.length - 1) {
      setPage((cur) => cur + 1);
    } else {
      swal.error("Please Enter Your Oll Filds");
    }
  };

  const handlePrev = () => {
    setPage((cur) => cur - 1);
  };
  const Formtitle = ["Client Details", "Client Device Informaion", "Other"];
  return (
    <div className="table-responsive">
      <table className="table  text-center  table-hover ">
        <thead>
          <tr>
            <th>#IdNumber</th>
            <th>#Collaborator</th>
            <th>#Name</th>
            <th>#Surname</th>
            <th>#Email</th>
            <th>#Country</th>
            <th>#Town</th>
            <th>#PostalCode</th>
            <th>#TaxStatusText</th>
            <th>#Gender</th>
            <th>#Mobile</th>
            <th>#TaxStatusText</th>
            <th>#StatusText</th>
            <th>#Action</th>
          </tr>
        </thead>
        <tbody>
          {clientdata?.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.idNumber}</td>
                <td>{value.collaborator}</td>
                <td>{value.name}</td>
                <td>{value.surname}</td>
                <td>{value.email}</td>
                <td>{value.country}</td>
                <td>{value.town}</td>
                <td>{value.postalCode}</td>
                <td>{value.taxStatusText}</td>
                <td>{value.gender}</td>
                <td>{value.mobile}</td>
                <td>{value.taxStatusText}</td>
                <td>
                  {value.statusText === "Active" ? (
                    <Button className="btn btn-success btn-sm">
                      {value.statusText}
                    </Button>
                  ) : (
                    <Button className="btn btn-danger btn-sm">
                      {value.statusText}
                    </Button>
                  )}
                </td>
                <td className="d-flex text-center ">
                  <Button
                    variant=""
                    className="editicon   btn-sm fs-6"
                    onClick={() => handleShow(value._id)}
                  >
                    <BiSolidEdit className="icon fs-4" />{" "}
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="ms-2 fw-bold">
                        {Formtitle[page]}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleSubmit}>
                        {page === 0 ? (
                          <UserDetails
                            formik={formik}
                            handleChange={handleChange}
                          />
                        ) : page === 1 ? (
                          <UserId formik={formik} handleChange={handleChange} />
                        ) : (
                          <Other formik={formik} handleChange={handleChange} />
                        )}
                        <Button
                          variant="secondary"
                          className={
                            page === 1
                              ? "ms-5 me-2 mt-2 "
                              : page === 0
                              ? "ms-3 mt-3"
                              : "ms-5 me-2 mt-2 "
                          }
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                        {page === 0 ? null : (
                          <Button
                            variant=""
                            className="prevbutton mt-2 me-2 ms-3 ms-lg-3"
                            type="button"
                            onClick={() => handlePrev()}
                          >
                            <GrFormPrevious /> Prev Form
                          </Button>
                        )}
                        {console.log(page, page !== Formtitle.length - 1)}
                        {page !== Formtitle.length - 1 ? (
                          <Button
                            variant=""
                            className={
                              page === 1
                                ? "nextbutton mt-2   ms-lg-0 "
                                : "nextbutton mt-3 ms-3 "
                            }
                            type="button"
                            onClick={(e) => handleNext(e)}
                          >
                            {" "}
                            Next Form <MdNavigateNext />
                          </Button>
                        ) : (
                          <Button
                            variant=""
                            className="nextbutton mt-2 ms-2"
                            type="submit"
                          >
                            {" "}
                            Update
                          </Button>
                        )}
                      </Form>
                    </Modal.Body>
                  </Modal>
                  <Button
                    variant=""
                    className="deleteicon  btn-sm fs-5 ms-2"
                    onClick={() => handleDelete(value._id)}
                  >
                    <MdDelete className="fs-4" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
