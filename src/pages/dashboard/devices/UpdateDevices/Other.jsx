import { Form, FloatingLabel } from "react-bootstrap";
const Other = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">ThirdEmail :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="email"
            id="thirdEmail"
            placeholder="Enter Your ThirdEmail"
            className="col-6"
            name="thirdEmail"
            value={formik.values.thirdEmail}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.thirdEmail && formik.errors.thirdEmail ? (
            <div className="error ms-2 text-danger">
              {formik.errors.thirdEmail}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Province :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="text"
            id="province"
            placeholder="Enter Your Province"
            className="col-6"
            name="province"
            value={formik.values.province}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.province && formik.errors.province ? (
            <div className="error ms-2 text-danger">
              {formik.errors.province}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Fault :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="text"
            id="fault"
            placeholder="Enter Your Fault"
            className="col-6"
            name="fault"
            value={formik.values.fault}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fault && formik.errors.fault ? (
            <div className="error ms-2 text-danger">{formik.errors.fault}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Status :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Select
            type="text"
            id="status"
            className="col-6"
            name="status"
            value={formik.values.status}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select status</option>
            <option value="1">1 - </option>
            <option value="2">2 - </option>
            <option value="3">3 - </option>
          </Form.Select>

          {formik.touched.status && formik.errors.status ? (
            <div className="error ms-2 text-danger">{formik.errors.status}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Address :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <FloatingLabel type="text" name="address" className=" ">
            <Form.Control
              as="textarea"
              id="address"
              placeholder="Enter Your address"
              className="col-6"
              name="address"
              value={formik.values.address}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
          </FloatingLabel>

          {formik.touched.address && formik.errors.address ? (
            <div className="error ms-2 text-danger">
              {formik.errors.address}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Notes :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <FloatingLabel
            type="text"
            placeholder="Notes"
            name="notes"
            className="mb-3 "
          >
            <Form.Control
              as="textarea"
              id="notes"
              placeholder="Enter Your Notes"
              className="col-6"
              name="notes"
              value={formik.values.notes}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
          </FloatingLabel>

          {formik.touched.notes && formik.errors.notes ? (
            <div className="error ms-2 text-danger">{formik.errors.notes}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Other;
