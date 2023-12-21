import { useState } from "react";
import { Card, CardHeader, CardBody, Button, Form } from "react-bootstrap";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "../../../components/sweetAlert";
import DevicesId from "./DevicesId";
import DevicesDetails from "./DevicesDetails";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Other from "./Other";
import api from "../../../services/api";
import { toast } from "react-toastify";
import "./index.css";
const AddDevicesSteper = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      secondaryMobile: "",
      email: "",
      secondaryEmail: "",
      status: "",
      postalCode: "",
      town: "",
      province: "",
      country: "",
      notes: "",
      secondSupervisor: "",
      thirdEmail: "",
      supervisor: "",
      technician: "",
      fault: "",
      localTime: "",
      contactPerson: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      mobile: Yup.string().required("Mobile is required"),
      secondaryMobile: Yup.string().required("SecondaryMobile is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      secondaryEmail: Yup.string()
        .email("Invalid email")
        .required("SecondaryEmail is required"),
      status: Yup.string().required("status is required"),
      postalCode: Yup.number().required("PostalCode is required"),
      town: Yup.string().required("Town is required"),
      province: Yup.string().required("province is required"),
      country: Yup.string().required("country is required"),
      notes: Yup.string().required("notes is required"),

      secondSupervisor: Yup.string().required("Second supervisor is required"),
      thirdEmail: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      supervisor: Yup.string().required("Supervisor is required"),
      technician: Yup.string().required("Technician is required"),
      fault: Yup.string().required("Fault description is required"),
      localTime: Yup.string().required("localTime is required"),
      contactPerson: Yup.string().required("Contact person is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (value) => {
      try {
        const resData = await api.post("/devices/create", value);
        console.log(resData);
        if (resData.isSuccess) {
          toast.success("devices Data Add SuccessFull");
          navigate("/dashboard/devices");
        } else toast.error(resData.message);
      } catch (error) {
        toast.error("User Data Not Add", error);
      }
    },
  });
  const { handleChange, handleSubmit } = formik;

  const Formtitle = ["Devices Details", "Devices Informaion", "Other"];

  const handleNext = (e) => {
    e.preventDefault();
    const errors = Object.keys(formik.errors);
    let currentFields = [];

    if (page === 0) {
      currentFields = [
        "email",
        "technician",
        "name",
        "secondaryEmail",
        "secondaryMobile",
        "mobile",
      ];
    } else if (page === 1) {
      currentFields = [
        "supervisor",
        "secondSupervisor",
        "contactPerson",
        "localTime",
        "postalCode",
        "country",
        "town",
      ];
    } else if (page === 2) {
      currentFields = [
        "status",
        "fault",
        "province",
        "notes",
        "thirdEmail",
        "address",
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
        <Link to={"/dashboard/devices"}>
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
            <DevicesDetails formik={formik} handleChange={handleChange} />
          ) : page === 1 ? (
            <DevicesId formik={formik} handleChange={handleChange} />
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
              <Button variant="" className="nextbutton mt-2 ms-2" type="submit">
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

export default AddDevicesSteper;
