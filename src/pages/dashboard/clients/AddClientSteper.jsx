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
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";
// import adddata from "./Fuatures/UserSlice"
import * as Yup from "yup";
// import UserDetails from "./UserDetails";
// import UserId from "./UserId";
// import Other from "./Other";
const AddClientSteper = () => {
  const [page, setPage] = useState(0);
  // const dispatch = useDispatch()
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
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
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
    onSubmit: (value) => {
      console.log(value);
      // dispatch(adddata(JSON.stringify(value)))
    },
  });

  const Formtitle = ["Client Details", "Client Device Informaion", "Other"];
  const renderError = (field) =>
    formik.errors[field] ? (
      <div className="error ms-2 text-danger">{formik.errors[field]}</div>
    ) : null;
  const UserDetails = () => {
    return (
      <div className="ms-5">
        <Form.Group controlId="firstName" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">First Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your First Name"
            className="w-25"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("firstName")}
        <Form.Group controlId="lastName" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Last Name :</Form.Label>
          <Form.Control
            type="text"
            className="w-25"
            placeholder="Enter Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("lastName")}
        <Form.Group controlId="name" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Name :</Form.Label>
          <Form.Control
            type="text"
            className="w-25"
            placeholder="Enter  Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("name")}

        <Form.Group controlId="surname" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Surname :</Form.Label>
          <Form.Control
            type="text"
            className="w-25"
            placeholder="Enter Surname"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("surname")}
        <Form.Group controlId="tipoDeDocument" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Tipo De Document :</Form.Label>
          <Form.Control
            type="text"
            className="w-25"
            placeholder="Enter Tipo De Document"
            name="tipoDeDocument"
            value={formik.values.tipoDeDocument}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("tipoDeDocument")}
        <Form.Group controlId="lastSurname" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Last Surname :</Form.Label>
          <Form.Control
            type="text"
            className="w-25"
            placeholder="Enter last Surname"
            name="lastSurname"
            value={formik.values.lastSurname}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("lastSurname")}
        <Form.Group controlId="gender" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Gender :</Form.Label>
          <Form.Select
            name="gender"
            className="w-25"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        {renderError("gender")}
        <Form.Group controlId="userType" className="d-flex flex-row m-2">
          <Form.Label className="col-3">UserType :</Form.Label>
          <Form.Select
            name="userType"
            className="w-25"
            value={formik.values.userType}
            onChange={formik.handleChange}
          >
            <option value="">Select UserType</option>
            <option value="Client">1 - Client</option>
            <option value="User">2 - User</option>
            <option value="Admin">3 - Admin</option>
          </Form.Select>
        </Form.Group>
        {renderError("userType")}
      </div>
    );
  };

  const UserId = () => {
    return (
      <div className="ms-5">
        <Form.Group controlId="clientId" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Client Id :</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Enter Client Id"
            name="clientId"
            value={formik.values.clientId}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("clientId")}
        <Form.Group controlId="deviceId" className="d-flex flex-row m-2">
          <Form.Label className="col-3">DeviceId :</Form.Label>
          <Form.Control
            type="text"
            className="w-25"
            placeholder="Enter Device Id"
            name="deviceId"
            value={formik.values.deviceId}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("deviceId")}
        <Form.Group controlId="email" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Email :</Form.Label>
          <Form.Control
            type="email"
            className="w-25"
            placeholder="Enter Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("email")}
        <Form.Group controlId="password" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Password :</Form.Label>
          <Form.Control
            type="password"
            className="w-25"
            placeholder="Enter Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("password")}
        <Form.Group controlId="postalCode" className="d-flex flex-row m-2">
          <Form.Label className="col-3">PostalCode :</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Enter PostalCode"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("postalCode")}
        <Form.Group controlId="country" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Country :</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Enter Country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("country")}
        <Form.Group controlId="town" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Town :</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Enter town"
            name="town"
            value={formik.values.town}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("town")}
        <Form.Group controlId="secondaryEmail" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Secondary Email :</Form.Label>
          <Form.Control
            type="email"
            className="w-25"
            placeholder="Enter Secondary Emai"
            name="secondaryEmail"
            value={formik.values.secondaryEmail}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("secondaryEmail")}
        <Form.Group controlId="position" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Position :</Form.Label>
          <Form.Select
            name="position"
            className="w-25"
            value={formik.values.position}
            onChange={formik.handleChange}
          >
            <option value="">Select Position</option>
            <option value="1">Supervisor</option>
            <option value="2">Salesperson</option>
            <option value="3">Administration</option>
            <option value="3">Technician</option>
          </Form.Select>
        </Form.Group>
        {renderError("position")}
      </div>
    );
  };

  const Other = () => {
    return (
      <div className="ms-5">
        <Form.Group controlId="province" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Province :</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Enter Province"
            name="province"
            value={formik.values.province}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("province")}
        <Form.Group controlId="mobile" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Mobile :</Form.Label>
          <Form.Control
            className="w-25"
            type="number"
            placeholder="Enter Mobile No"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("mobile")}
        <Form.Group controlId="secondaryMobile" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Secondary Mobile :</Form.Label>
          <Form.Control
            className="w-25"
            type="number"
            placeholder="Enter SecondaryMobile"
            name="secondaryMobile"
            value={formik.values.secondaryMobile}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("secondaryMobile")}
        <Form.Group controlId="idNumber" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Id Number :</Form.Label>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Enter IdNumber No"
            name="idNumber"
            value={formik.values.idNumber}
            onChange={formik.handleChange}
          />
        </Form.Group>
        {renderError("idNumber")}
        <Form.Group
          controlId="typeOfCollaborator"
          className="d-flex flex-row m-2"
        >
          <Form.Label className="col-3">Type Of Collaborator :</Form.Label>
          <Form.Select
            name="typeOfCollaborator"
            className="w-25"
            value={formik.values.typeOfCollaborator}
            onChange={formik.handleChange}
          >
            <option value="">Select Type Of Collaborator</option>
            <option value="Exclusive">1 - Exclusive</option>
            <option value="Exclusive">2 - Exclusive 2</option>
          </Form.Select>
        </Form.Group>
        {renderError("typeOfCollaborator")}
        <Form.Group controlId="taxStatus" className="d-flex flex-row m-2">
          <Form.Label className="col-3">Tax Status :</Form.Label>
          <Form.Select
            name="taxStatus"
            className="w-25"
            value={formik.values.taxStatus}
            onChange={formik.handleChange}
          >
            <option value="">Select Tax Status</option>
            <option value="Individual">1 - Individual</option>
            <option value="Self-Employed">2 - Self-Employed</option>
            <option value="Limited Company">3 - Limited Company</option>
            <option value="Public Limited Company">
              3 - Public Limited Company
            </option>
            <option value="GeneralPartnership">3 - GeneralPartnership</option>
            <option value="Community of Property">
              3 - Community of Property
            </option>
          </Form.Select>
        </Form.Group>
        {renderError("taxStatus")}
        <Form.Group controlId="taxAddress" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Tax Address :</Form.Label>
          <FloatingLabel type="text" name="taxAddress" className="mb-3 w-25">
            <Form.Control
              as="textarea"
              name="taxAddress"
              value={formik.values.taxAddress}
              onChange={formik.handleChange}
              placeholder="Leave a comment here"
            />
          </FloatingLabel>
        </Form.Group>
        {renderError("taxAddress")}
        <Form.Group controlId="notes" className="d-flex flex-row m-2">
          <Form.Label className="col-3 w-25">Notes :</Form.Label>
          <FloatingLabel
            controlId="notes"
            placeholder="Notes"
            type="text"
            name="notes"
            className="mb-3 w-25"
          >
            <Form.Control
              as="textarea"
              name="notes"
              value={formik.values.notes}
              onChange={formik.handleChange}
              placeholder="Leave a comment here"
            />
          </FloatingLabel>
        </Form.Group>
        {renderError("notes")}
      </div>
    );
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <UserDetails />;
    } else if (page === 1) {
      return <UserId />;
    } else {
      return <Other />;
    }
  };

  const handleNext = () => {
    setPage((cur) => cur + 1);
  };

  const handlePrev = () => {
    setPage((cur) => cur - 1);
  };
  return (
    <Card className="m-2">
      <CardHeader className="fw-bolder fs-4">{Formtitle[page]}</CardHeader>
      <CardBody>
        <Form action="POST" onSubmit={formik.handleSubmit}>
          {PageDisplay()}
          {page == 0 ? null : (
            <Button
              variant="danger"
              className=" ms-5 mt-3"
              onClick={handlePrev}
            >
              <GrFormPrevious /> Prev Form
            </Button>
          )}

          {page !== Formtitle.length - 1 ? (
            <Button
              variant="primary"
              className="mt-3  ms-5"
              onClick={handleNext}
            >
              Next Form <MdNavigateNext />
            </Button>
          ) : (
            <Button variant="primary" className=" mt-3  ms-5" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default AddClientSteper;
