import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { Card, CardBody, Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import UserDetails from "./UpdateUsers/UserDetails";
import UserId from "./UpdateUsers/UserId";
import Other from "./UpdateUsers/Other";
import { toast } from "react-toastify";
import swal from "../../../components/sweetAlert";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import "./index.css";
const UserTable = ({ data ,fetchUser}) => {
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);
  const [updateuser, setUpdateuser] = useState();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);

  const handleShow = async (id) => {
    try {
      const resData = await api.get(`/users/getById?userId=${id}`); //user get id for edit data
      if (resData.isSuccess) {
        console.log(resData.data, "-----getid");
        setUpdateuser(resData.data);
        setShow(true);
      } else toast.error(resData.message);
    } catch (error) {
      toast.error(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      clientId: "",
      typeOfCollaborator: "",
      position: "",
      name: "",
      surname: "",
      lastSurname: "",
      mobile: "",
      secondaryMobile: "",
      email: "",
      secondaryEmail: "",
      taxStatus: "",
      tipoDeDocument: "",
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
      userType: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("LastName is required"),
      clientId: Yup.string().required("ClientId is required"),
      typeOfCollaborator: Yup.string().required(
        "TypeOfCollaborator is required"
      ),
      position: Yup.string().required("Position is required"),
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      lastSurname: Yup.string().required("LastSurname is required"),
      mobile: Yup.number().required("Mobile is required"),
      secondaryMobile: Yup.number().required("SecondaryMobile is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      secondaryEmail: Yup.string()
        .email("Invalid email")
        .required("SecondaryEmail is required"),
      taxStatus: Yup.string().required("TaxStatus is required"),
      tipoDeDocument: Yup.string().required("TipoDeDocument is required"),
      idNumber: Yup.string().required("IdNumber is required"),
      postalCode: Yup.string().required("PostalCode is required"),
      town: Yup.string().required("Town is required"),
      province: Yup.string().required("province is required"),
      country: Yup.string().required("country is required"),
      notes: Yup.string().required("notes is required"),
      taxAddress: Yup.string().required("taxAddress is required"),
      deviceId: Yup.string().required("deviceId is required"),
      password: Yup.string()
        .min(6, "Password is too short - should be 6 chars minimum")
        .required("password is required"),
      gender: Yup.string().required("gender is required"),
      userType: Yup.string().required("userType is required"),
    }),
    onSubmit: async (value) => {
      console.log(value);
      try {
        const resData = await api.put("/users/update", value);//user upadte api
        console.log(resData);
        if (resData.isSuccess) {
          toast.success("User Data Update SuccessFull");
          navigate("/dashboard/users");
        } else toast.error(resData.message);
      } catch (error) {
        toast.error("User Data Not Update", error);
      }
    },
  });
  const { handleChange, handleSubmit } = formik;

  const handleDelete = async (id) => {
    try {
      const resData = await api.delete(`/users/delete?userId=${id}`);//delete user api call
      if (resData.isSuccess) {
        fetchUser()
       navigate("/dashboard/users");
      } else toast.error(resData.message);
    } catch (error) {
      toast.error(error);
    }
  };
  const Formtitle = ["User Details", "User Device Informaion", "Other"];

  const handleNext = (e) => {
    e.preventDefault();
    const errors = Object.keys(formik.errors);
    let currentFields = [];

    if (page === 0) {
      currentFields = [
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
        "startDate",
        "postalCode",
        "country",
        "town",
      ];
    } else if (page === 2) {
      currentFields = ["taxAddress", "notes", "timezone", "scheduleTime"];
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
  return (
    <Card className="shadow">
      <CardBody>
        <div className="table-responsive ">
          <table className="table  text-center table-hover ">
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
              {data?.map((value, index) => {
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
                              <UserId
                                formik={formik}
                                handleChange={handleChange}
                              />
                            ) : (
                              <Other
                                formik={formik}
                                handleChange={handleChange}
                              />
                            )}
                            <Button
                              variant="secondary"
                              className={
                                page === 1 ? "ms-5 me-2 mt-2 " : "ms-4 mt-3"
                              }
                              onClick={handleClose}
                            >
                              Close
                            </Button>
                            {page === 0 ? null : (
                              <Button
                                variant=""
                                className="prevbutton mt-2 me-2 ms-3 "
                                type="button"
                                onClick={() => handlePrev()}
                              >
                                <GrFormPrevious /> Prev Form
                              </Button>
                            )}
                            {page !== Formtitle.length - 1 ? (
                              <Button
                                variant=""
                                className={
                                  page === 1
                                    ? "nextbutton mt-2  "
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
                                className="nextbutton mt-3 ms-2"
                                type="submit"
                              >
                                {" "}
                                Update
                              </Button>
                            )}
                          </Form>
                        </Modal.Body>
                      </Modal>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserTable;
