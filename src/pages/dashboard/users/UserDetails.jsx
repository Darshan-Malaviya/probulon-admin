import { Form } from "react-bootstrap";
const UserDetails = ({formik,values,handleChange}) => {
  //form error validation fun..
  const renderError = (field) => {
return  formik.errors[field] ? (
    <div className="error ms-2 text-danger">{formik.errors[field]}</div>
  ) : null;
  }
   
  return (
    <div className="ms-5">
      <Form.Group controlId="firstName" className="d-flex flex-row m-2">
        <Form.Label  className="col-3 w-25">First Name :</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          placeholder="Enter Your First Name"
          className="w-25"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          required
        />

        {renderError("firstName")}
      </Form.Group>
      <Form.Group controlId="lastName" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Last Name :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        {renderError("lastName")}
      </Form.Group>

      <Form.Group controlId="name" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Name :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter  Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {renderError("name")}
      </Form.Group>

      <Form.Group controlId="surname" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Surname :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Surname"
          name="surname"
          value={values.surname}
          onChange={handleChange}
        />
        {renderError("surname")}
      </Form.Group>

      <Form.Group controlId="tipoDeDocument" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Tipo De Document :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Tipo De Document"
          name="tipoDeDocument"
          value={values.tipoDeDocument}
          onChange={handleChange}
        />
        {renderError("tipoDeDocument")}
      </Form.Group>

      <Form.Group controlId="lastSurname" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Last Surname :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter last Surname"
          name="lastSurname"
          value={values.lastSurname}
          onChange={handleChange}
        />
        {renderError("lastSurname")}
      </Form.Group>

      <Form.Group controlId="gender" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Gender :</Form.Label>
        <Form.Select
          name="gender"
          className="w-25"
          value={values.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
        {renderError("gender")}
      </Form.Group>

      <Form.Group controlId="userType" className="d-flex flex-row m-2">
        <Form.Label className="col-3">UserType :</Form.Label>
        <Form.Select
          name="userType"
          className="w-25"
          value={values.userType}
          onChange={handleChange}
        >
          <option value="">Select UserType</option>
          <option value="Client">1 - Client</option>
          <option value="User">2 - User</option>
          <option value="Admin">3 - Admin</option>
        </Form.Select>
        {renderError("userType")}
      </Form.Group>
    </div>
  );
};

export default UserDetails;
