import { Form } from "react-bootstrap";

const DevicesId = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">SecondSupervisor :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="secondSupervisor"
            placeholder="Enter Your SecondSupervisor"
            className="col-6"
            name="secondSupervisor"
            value={formik.values.secondSupervisor}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.secondSupervisor && formik.errors.secondSupervisor ? (
            <div className="error ms-2 text-danger">
              {formik.errors.secondSupervisor}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Supervisor :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="supervisor"
            placeholder="Enter Your Supervisor"
            className="col-6"
            name="supervisor"
            value={formik.values.supervisor}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.supervisor && formik.errors.supervisor ? (
            <div className="error ms-2 text-danger">
              {formik.errors.supervisor}
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
            type="number"
            id="postalCode"
            placeholder="Enter Your PostalCode"
            className="col-6"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={handleChange}
            onBlur={formik.handleBlur}
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
          <Form.Label className="">ContactPerson :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="contactPerson"
            placeholder="Enter Your ContactPerson"
            className="col-6"
            name="contactPerson"
            value={formik.values.contactPerson}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contactPerson && formik.errors.contactPerson ? (
            <div className="error ms-2 text-danger">
              {formik.errors.contactPerson}
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
          />
          {formik.touched.town && formik.errors.town ? (
            <div className="error ms-2 text-danger">{formik.errors.town}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Local Time :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="time"
            id="localTime"
            className="col-6"
            name="localTime"
            value={formik.values.localTime}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.localTime && formik.errors.localTime ? (
            <div className="error ms-2 text-danger">
              {formik.errors.localTime}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DevicesId;
