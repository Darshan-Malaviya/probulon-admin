import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import UserDetails from "./UserDetails";
import UserId from "./UserId";
import Other from "./Other";
import { toast } from "react-toastify";
import swal from "../../../components/sweetAlert";
import api from "../../../services/api";
import "./index.css";
const UserTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);
  const[userdata,setUserdata]=useState(data)
  const [updateuser, setUpdateuser] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = async(id) => {
    try {
      const resData = await api.get(`http://79.143.90.196/api/v1/users/getById?userId=${id}`);
      if (resData.isSuccess) {
        console.log(resData,"-----getid")
        setUpdateuser(resData.data)
        setShow(true);
      } else toast.error(resData.message);
    } catch (error) {
      toast.error(error) 
    }    
  };
  console.log(updateuser)
  const formik = useFormik({
    initialValues: {
      firstName: updateuser.firstName,
      lastName: updateuser.lastName,
      clientId: updateuser.clientId,
      typeOfCollaborator: updateuser.typeOfCollaborator,
      position: updateuser.position,
      name: updateuser.name,
      surname: updateuser.surname,
      lastSurname: updateuser.lastSurname,
      mobile: updateuser.mobile,
      secondaryMobile: updateuser.secondaryMobile,
      email: updateuser.email,
      secondaryEmail: updateuser.secondaryEmail,
      taxStatus: updateuser.taxStatus,
      tipoDeDocument: updateuser.tipoDeDocument,
      idNumber: updateuser.idNumber,
      postalCode: updateuser.postalCode,
      town: updateuser.town,
      province: updateuser.province,
      country: updateuser.country,
      taxAddress: updateuser.taxAddress,
      notes: updateuser.notes,
      deviceId: updateuser.deviceId,
      password: updateuser.password,
      gender: updateuser.gender,
      userType: updateuser.userType,
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
    onSubmit: async(value) => {
      console.log(value);
      try {
        const resData = await api.put("http://79.143.90.196/api/v1/users/update",value);
        console.log(resData)
        if (resData.isSuccess) {
          toast.success("User Data Update SuccessFull") 
          navigate("/dashboard/users") 
        } else toast.error(resData.message);
      } catch (error) {
        toast.error("User Data Not Update",error) 
      }
    },
  });

  const { handleChange, handleSubmit } = formik;

  const handleDelete = async (id) => {
    try {
      const resData = await api.delete(`http://79.143.90.196/api/v1/users/delete?userId=${id}`);
      console.log(resData)
      if (resData.isSuccess) {
        setUserdata(resData.data);
      } else toast.error(resData.message);
    } catch (error) {
      toast.error(error)
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    const errors = Object.keys(formik.errors);
    let currentFields = [];

    if (page === 0) {
      currentFields = [
        "firstName",
        "lastName",
        "tipoDeDocument",
        "lastSurname",
        "name",
        "surname",
        "userType",
        "gender",
      ];
    } else if (page === 1) {
      currentFields = [
        "clientId",
        "deviceId",
        "email",
        "password",
        "postalCode",
        "country",
        "town",
        "secondaryEmail",
        "position",
      ];
    } else if (page === 2) {
      currentFields = [
        "taxStatus",
        "province",
        "taxAddress",
        "notes",
        "mobile",
        "idNumber",
        "secondaryMobile",
        "typeOfCollaborator",
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
  const Formtitle = ["User Details", "User Device Informaion", "Other"];
  return (
    <div>
      {userdata.length !== 0 ? (
        <div className="table-responsive">
          <table className="table  text-center  table-hover mt-3">
            <thead>
              <tr>
                <th>#IdNumber</th>
                <th>#Collaborator</th>
                <th>#FirstName</th>
                <th>#LastName</th>
                <th>#Email</th>
                <th>#Country</th>
                <th>#Town</th>
                <th>#PostalCode</th>
                <th>#TaxStatusText</th>
                <th>#Gender</th>
                <th>#Mobile</th>
                <th>#StatusText</th>
                <th>#TaxStatusText</th>
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
                    <td>{value.statusText}</td>
                    <td>{value.taxStatusText}</td>
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
                            <Button variant="secondary" className={page === 1 ? "ms-5 me-2 mt-2 ":"ms-5 mt-3"} onClick={handleClose}>
                            Close
                          </Button>
                          {page === 0 ? null : (
                            <Button
                              variant=""
                              className="prevbutton mt-2 me-2 ms-3 ms-lg-0"
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
      ) : (
        <div className="d-flex justify-content-center">
            <span className="">User Is Not Define...</span>
        </div>
      )}
    </div>
  );
};

export default UserTable;
