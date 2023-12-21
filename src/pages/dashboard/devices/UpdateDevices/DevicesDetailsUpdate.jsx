import { Form } from "react-bootstrap";
const DevicesDetailsUpdate = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className=""> Name :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="col-6"
            name="name"
            autoFocus
            value={formik.values.name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error ms-2 text-danger">{formik.errors.name}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Mobile :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="text"
            id="mobile"
            placeholder="Enter Your Mobile"
            className="col-6"
            name="mobile"
            value={formik.values.mobile}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="error ms-2 text-danger">{formik.errors.mobile}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">secondaryMobile:</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="text"
            id="secondaryMobile"
            placeholder="Enter Your secondaryMobile"
            className="col-6"
            name="secondaryMobile"
            value={formik.values.secondaryMobile}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.secondaryMobile && formik.errors.secondaryMobile ? (
            <div className="error ms-2 text-danger">
              {formik.errors.secondaryMobile}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Email :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="col-6"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error ms-2 text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">SecondaryEmail:</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="email"
            id="secondaryEmail"
            placeholder="Enter Your SecondaryEmail"
            className="col-6"
            name="secondaryEmail"
            value={formik.values.secondaryEmail}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.secondaryEmail && formik.errors.secondaryEmail ? (
            <div className="error ms-2 text-danger">
              {formik.errors.secondaryEmail}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Technician :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="text"
            id="technician"
            placeholder="Enter Your Technician"
            className="col-6"
            name="technician"
            value={formik.values.technician}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.technician && formik.errors.technician ? (
            <div className="error ms-2 text-danger">
              {formik.errors.technician}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DevicesDetailsUpdate;
