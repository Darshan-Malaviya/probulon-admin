import { Form } from "react-bootstrap";

const UserId = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">ClientId :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="clientId"
            placeholder="Enter Your ClientId"
            className="col-6"
            name="clientId"  
            value={formik.values.clientId}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.clientId && formik.errors.clientId ? (
            <div className="error ms-2 text-danger">
              {formik.errors.clientId}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">DeviceId :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="deviceId"
            placeholder="Enter Your DeviceId"
            className="col-6"
            name="deviceId"      
            value={formik.values.deviceId}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.deviceId && formik.errors.deviceId ? (
            <div className="error ms-2 text-danger">
              {formik.errors.deviceId}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Email :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="col-6"
            name="email"        
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error ms-2 text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label>Password :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter Your Password"
            className="col-6"
            name="password"
            value={formik.values.password}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error ms-2 text-danger">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">PostalCode :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="postalCode"
            placeholder="Enter Your PostalCode"
            className="col-6"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.PostalCode && formik.errors.postalCode ? (
            <div className="error ms-2 text-danger">
              {formik.errors.postalCode}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Country :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="country"
            placeholder="Enter Your Country"
            className="col-6"
            name="country"
            value={formik.values.country}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.country && formik.errors.country ? (
            <div className="error ms-2 text-danger">
              {formik.errors.country}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Town :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="town"
            placeholder="Enter Your Town"
            className="col-6"
            name="town"
            value={formik.values.town}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.town && formik.errors.town ? (
            <div className="error ms-2 text-danger">{formik.errors.town}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">SecondaryEmail :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="email"
            id="secondaryEmail"
            placeholder="Enter Your SecondaryEmail"
            className="col-6"
            name="secondaryEmail"
            
            value={formik.values.secondaryEmail}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.secondaryEmail && formik.errors.secondaryEmail ? (
            <div className="error ms-2 text-danger">
              {formik.errors.secondaryEmail}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Position :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="position"
            placeholder="Enter Your Position"
            className="col-6"
            name="position"
            value={formik.values.position}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select Position</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Salesperson">Salesperson</option>
            <option value="Administration">Administration</option>
            <option value="Technician">Technician</option>
          </Form.Select>

          {formik.touched.position && formik.errors.position ? (
            <div className="error ms-2 text-danger">
              {formik.errors.position}
            </div>
          ) : null}
        </div>
      </div>

    </div>
  );
};

export default UserId;
