import { Form } from "react-bootstrap";

const UserId = ({formik,handleChange}) => {
  const renderError1 = (field) =>
    formik.errors[field] ? (
      <div className="error ms-2 text-danger">{formik.errors[field]}</div>
    ) : null;
  return (
    <div className="ms-5">
      <Form.Group controlId="clientId" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Client Id :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter Client Id"
          name="clientId"
          value={formik.clientId}
          onChange={handleChange}
        />
        {renderError1("clientId")}
      </Form.Group>

      <Form.Group controlId="deviceId" className="d-flex flex-row m-2">
        <Form.Label className="col-3">DeviceId :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"

          placeholder="Enter Device Id"
          name="deviceId"
          value={formik.deviceId}
          onChange={handleChange}
        />
        {renderError1("deviceId")}
      </Form.Group>

      <Form.Group controlId="email" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Email :</Form.Label>
        <Form.Control
          type="email"
          className="w-25"
          placeholder="Enter Email"
          name="email"
          value={formik.email}
          onChange={handleChange}
        />
        {renderError1("email")}
      </Form.Group>

      <Form.Group controlId="password" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Password :</Form.Label>
        <Form.Control
          type="password"
          className="w-25"
          placeholder="Enter Password"
          name="password"
          value={formik.password}
          onChange={handleChange}
        />
        {renderError1("password")}
      </Form.Group>

      <Form.Group controlId="postalCode" className="d-flex flex-row m-2">
        <Form.Label className="col-3">PostalCode :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter PostalCode"
          name="postalCode"
          value={formik.postalCode}
          onChange={handleChange}
        />
        {renderError1("postalCode")}
      </Form.Group>

      <Form.Group controlId="country" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Country :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter Country"
          name="country"
          value={formik.country}
          onChange={handleChange}
        />
        {renderError1("country")}
      </Form.Group>

      <Form.Group controlId="town" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Town :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter town"
          name="town"
          value={formik.town}
          onChange={handleChange}
        />
        {renderError1("town")}
      </Form.Group>

      <Form.Group controlId="secondaryEmail" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Secondary Email :</Form.Label>
        <Form.Control
          type="email"
          className="w-25"
          placeholder="Enter Secondary Emai"
          name="secondaryEmail"
          value={formik.secondaryEmail}
          onChange={handleChange}
        />
        {renderError1("secondaryEmail")}
      </Form.Group>

      <Form.Group controlId="position" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Position :</Form.Label>
        <Form.Select
          name="position"
          className="w-25"
          value={formik.position}
          onChange={handleChange}
        >
          <option value="">Select Position</option>
          <option value="1">Supervisor</option>
          <option value="2">Salesperson</option>
          <option value="3">Administration</option>
          <option value="3">Technician</option>
        </Form.Select>
        {renderError1("position")}
      </Form.Group>
    </div>
  );
};

export default UserId;
