import { Form } from "react-bootstrap";
const UserDetails = ({ formik, handleChange}) => {
  
  return (
    <div className="ms-5">
      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">First Name :</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          placeholder="Enter Your First Name"
          className="w-25 one"
          name="firstName"
          autoFocus
          value={formik.values.firstName}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          required
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error text-danger">{formik.errors.firstName}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Last Name :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error text-danger">{formik.errors.lastName}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">Name :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter  Name"
          name="name"
          value={formik.values.name}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error text-danger">{formik.errors.name}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">Surname :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Surname"
          name="surname"
          value={formik.values.surname}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className="error text-danger">{formik.errors.surname}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">Tipo De Document :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Tipo De Document"
          name="tipoDeDocument"
          value={formik.values.tipoDeDocument}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tipoDeDocument && formik.errors.tipoDeDocument ? (
          <div className="error text-danger">
            {formik.errors.tipoDeDocument}
          </div>
        ) : null}
      </Form.Group>

      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">Last Surname :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter last Surname"
          name="lastSurname"
          value={formik.values.lastSurname}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastSurname && formik.errors.lastSurname ? (
          <div className="error text-danger">{formik.errors.lastSurname}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">Gender :</Form.Label>
        <Form.Select
          name="gender"
          className="w-25"
          value={formik.values.gender}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
        {formik.touched.gender && formik.errors.gender ? (
          <div className="error text-danger">{formik.errors.gender}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">UserType :</Form.Label>
        <Form.Select
          name="userType"
          className="w-25"
          value={formik.values.userType}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select UserType</option>
          <option value="Client">1 - Client</option>
          <option value="User">2 - User</option>
          <option value="Admin">3 - Admin</option>
        </Form.Select>
        {formik.touched.userType && formik.errors.userType ? (
          <div className="error text-danger">{formik.errors.userType}</div>
        ) : null}
      </Form.Group>
    </div>
  );
};

export default UserDetails;
