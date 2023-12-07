import { Form } from "react-bootstrap";

const UserId = ({ formik, handleChange }) => {
  return (
    <div className="ms-5">
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">Client Id :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter Client Id"
          name="clientId"
          value={formik.values.clientId}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.clientId && formik.errors.clientId ? (
          <div className="error text-danger">{formik.errors.clientId}</div>
        ) : null}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">DeviceId :</Form.Label>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Enter Device Id"
          name="deviceId"
          value={formik.values.deviceId}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.deviceId && formik.errors.deviceId ? (
          <div className="error text-danger">{formik.errors.deviceId}</div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">Email :</Form.Label>
        <Form.Control
          type="email"
          className="w-25"
          placeholder="Enter Email"
          name="email"
          value={formik.values.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error text-danger">{formik.errors.email}</div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">Password :</Form.Label>
        <Form.Control
          type="password"
          className="w-25"
          placeholder="Enter Password"
          name="password"
          value={formik.values.password}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error text-danger">{formik.errors.password}</div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">PostalCode :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter PostalCode"
          name="postalCode"
          value={formik.values.postalCode}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <div className="error text-danger">{formik.errors.postalCode}</div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Country :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter Country"
          name="country"
          value={formik.values.country}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.country && formik.errors.country ? (
          <div className="error text-danger">{formik.errors.country}</div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Town :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter town"
          name="town"
          value={formik.values.town}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.town && formik.errors.town ? (
          <div className="error text-danger">{formik.errors.town}</div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">Secondary Email :</Form.Label>
        <Form.Control
          type="email"
          className="w-25"
          placeholder="Enter Secondary Emai"
          name="secondaryEmail"
          value={formik.values.secondaryEmail}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.secondaryEmail && formik.errors.secondaryEmail ? (
          <div className="error text-danger">
            {formik.errors.secondaryEmail}
          </div>
        ) : null}{" "}
      </Form.Group>

      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3">Position :</Form.Label>
        <Form.Select
          name="position"
          className="w-25"
          value={formik.values.position}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Position</option>
          <option value="1">Supervisor</option>
          <option value="2">Salesperson</option>
          <option value="3">Administration</option>
          <option value="3">Technician</option>
        </Form.Select>
        {formik.touched.position && formik.errors.position ? (
          <div className="error text-danger">{formik.errors.position}</div>
        ) : null}{" "}
      </Form.Group>
    </div>
  );
};

export default UserId;
