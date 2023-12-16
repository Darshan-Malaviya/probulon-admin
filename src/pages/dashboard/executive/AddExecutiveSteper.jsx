import { useState } from "react";
import { Card, CardHeader, CardBody, Button, Form } from "react-bootstrap";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "../../../components/sweetAlert";
import TechnitionDetails from "./TechnitionDetails";
import TechnitionId from "./TechnitionId";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Other from "./Other";
import api from "../../../services/api";
import { toast } from "react-toastify";
const AddExecutiveSteper = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
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
      country: "",
      taxAddress: "",
      notes: "",
      password: "",
      gender: "",
      startDate: "",
      thirdEmail: "",
      timezone: "",
      scheduleTime: "",
    },
    validationSchema: Yup.object({
      collaborator: Yup.number().required("Collaborator is required"),
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      lastSurname: Yup.string().required("LastSurname is required"),
      mobile: Yup.string().required("Mobile is required"),
      secondaryMobile: Yup.string().required("SecondaryMobile is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      secondaryEmail: Yup.string()
        .email("Invalid email")
        .required("SecondaryEmail is required"),
      startDate: Yup.date().required("StartDate is required"),
      taxStatus: Yup.string().required("TaxStatus is required"),
      documentType: Yup.string().required("documentType is required"),
      idNumber: Yup.string().required("IdNumber is required"),
      postalCode: Yup.string().required("PostalCode is required"),
      town: Yup.string().required("Town is required"),
      country: Yup.string().required("country is required"),
      notes: Yup.string().required("notes is required"),
      taxAddress: Yup.string().required("taxAddress is required"),
      password: Yup.string()
        .min(6, "Password is too short - should be 6 chars minimum")
        .required("password is required"),
      gender: Yup.string().required("gender is required"),
      thirdEmail: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      timezone: Yup.string().required("Timezone is required"),
      scheduleTime: Yup.string().required("Schedule time is required"),
    }),
    onSubmit: async (value) => {
      const addExecutive = {
        ...value,
        userType: "4",
      };
      console.log(addExecutive);
      try {
        const resData = await api.post("/users/create", addExecutive);
        console.log(resData);
        if (resData.isSuccess) {
          toast.success("Executive Data Add SuccessFull");
          navigate("/dashboard/executive");
        } else toast.error(resData.message);
      } catch (error) {
        toast.error("Executive Data Not Add", error);
      }
    },
  });
  const { handleChange, handleSubmit } = formik;

  const Formtitle = ["Executive Details", "Executive Informaion", "Other"];

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
      currentFields = ["taxAddress", "thirdEmail", "timezone", "scheduleTime"];
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
        <Link to={"/dashboard/technician"}>
          <FaArrowLeftLong
            style={{ color: "rgb(46, 46, 63)" }}
            className="me-3 "
          />
        </Link>
        {Formtitle[page]}
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          {page === 0 ? (
            <TechnitionDetails formik={formik} handleChange={handleChange} />
          ) : page === 1 ? (
            <TechnitionId formik={formik} handleChange={handleChange} />
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
                className={
                  page === 0
                    ? "nextbutton mt-3 ms-2 ms-lg-auto "
                    : "nextbutton mt-3 ms-1 "
                }
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

export default AddExecutiveSteper;
