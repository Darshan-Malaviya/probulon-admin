import { useState } from "react";
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
import UserDetails from "./UserDetails";
import UserId from "./UserId";
import Other from "./Other";
const AddSteper = () => {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
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
      notes: "",
      deviceId: "",
      password: "",
      gender: "",
      userType: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required"),
      lastName: Yup.string()
        .required("LastName is required"),
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
      postalCode: Yup.number().required("PostalCode is required"),
      town: Yup.string().required("Town is required"),
      province: Yup.string().required("province is required"),
      country: Yup.string().required("country is required"),
      notes: Yup.string().required("notes is required"),
      deviceId: Yup.string().required("deviceId is required"),
      password: Yup.string()
        .min(6, "Password is too short - should be 6 chars minimum")
        .required("password is required"),
      gender: Yup.string().required("gender is required"),
      userType: Yup.string().required("userType is required"),
    }),
    onSubmit : (value) => {
      console.log(value);
      dispatch(adddata(JSON.stringify(value)));
      // formik.validateOnChange = true
    }
  });
  const {handleChange,handleSubmit} = formik;

  const Formtitle = ["User Details", "User Device Informaion", "Other"];
  const handleNext = () => {
    setPage((cur)=>cur + 1)
  };

  const handlePrev = () => {
    setPage((cur) => cur - 1);
  };
  return (
    <Card className="m-2">
      <CardHeader className="fw-bolder fs-4">{Formtitle[page]}</CardHeader>
      <CardBody>
        <Form  onSubmit={handleSubmit}>
          {page === 0 ? <UserDetails formik={formik}  handleChange={handleChange}/> : page === 1 ? <UserId formik={formik} handleChange={handleChange}/>  : <Other  formik={formik}  handleChange={handleChange}/>}
          {/* button for next and prev  */}
          <div className="ms-5">
          {page === 0 ? null : (
            <Button
              variant="danger"
              className=" mt-3 ms-2"
              onClick={() => handlePrev()}
            >
              <GrFormPrevious /> Prev Form
            </Button>
          )}

          {page !== Formtitle.length - 1 ? (
            <Button
              variant="primary"
              className="mt-3 ms-2"
              onClick={() => handleNext()}
            >
              Next Form <MdNavigateNext />
            </Button>
          ) : (
            <Button variant="primary" className=" mt-3 ms-3" type="submit">
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
