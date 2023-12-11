import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import adddata from "./Fuatures/UserSlice";
import * as Yup from "yup";
import swal from "../../../components/sweetAlert";
import UserDetails from "./UserDetails";
import UserId from "./UserId";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Other from "./Other";
import api from "../../../services/api";
import { toast } from "react-toastify";
const AddSteper = () => {
  const [page, setPage] = useState(0);
  // const [userupdate, setUserupdate] = useState();
  const navigate = useNavigate()
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
    onSubmit: (value) => {
      console.log(value);
      value && (toast.success("User Data Add SuccessFull") & navigate("/dashboard/users") )
    },
  });
  const { handleChange, handleSubmit } = formik;

  const Formtitle = ["User Details", "User Device Informaion", "Other"];

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
        "typeOfCollaborator"
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
  return (
    <Card className="m-2">
      <CardHeader className="fw-bolder fs-4">
        <Link to={"/dashboard/users"}>
          <FaArrowLeftLong className="me-3 text-black" />
        </Link>
        {Formtitle[page]}
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          {page === 0 ? (
            <UserDetails formik={formik} handleChange={handleChange} />
          ) : page === 1 ? (
            <UserId formik={formik} handleChange={handleChange} />
          ) : (
            <Other formik={formik} handleChange={handleChange} />
          )}
          {/* button for next and prev  */}
          <div className="ms-sm-3.5 ms-md-4 ms-lg-5">
            {page === 0 ? null : (
              <Button
              variant=""
                className="prevbutton mt-3 me-2 ms-3 ms-lg-0"
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
                className={page === 1 ? "nextbutton mt-3   ms-lg-0 " : "nextbutton mt-2 ms-3 "}
                type="button"
                onClick={(e) => handleNext(e)}
              >
                {" "}
                Next Form <MdNavigateNext />
              </Button>
            ) : (
              <Button variant="" className="nextbutton mt-3 ms-2" type="submit">
                {" "}
                Submit
              </Button>
            )}
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default AddSteper;
