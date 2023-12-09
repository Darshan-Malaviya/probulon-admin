import { Form, FloatingLabel } from "react-bootstrap";
const Other = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Province :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="province"
            placeholder="Enter Your Province"
            className="col-6"
            name="province"
            value={formik.values.province}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.province && formik.errors.province ? (
            <div className="error ms-2 text-danger">
              {formik.errors.province}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Mobile :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="number"
            id="mobile"
            placeholder="Enter Your Mobile"
            className="col-6"
            name="mobile"
            value={formik.values.mobile}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="error ms-2 text-danger">{formik.errors.mobile}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">secondaryMobile :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="number"
            id="secondaryMobile"
            placeholder="Enter Your secondaryMobile"
            className="col-6"
            name="secondaryMobile"
            value={formik.values.secondaryMobile}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.secondaryMobile && formik.errors.secondaryMobile ? (
            <div className="error ms-2 text-danger">
              {formik.errors.secondaryMobile}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">IdNumber :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="idNumber"
            placeholder="Enter Your IdNumber"
            className="col-6"
            name="idNumber"
            value={formik.values.idNumber}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.idNumber && formik.errors.idNumber ? (
            <div className="error ms-2 text-danger">
              {formik.errors.idNumber}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">typeOfCollaborator :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="typeOfCollaborator"
            placeholder="Enter Your Surname"
            className="col-6"
            name="typeOfCollaborator"
            value={formik.values.typeOfCollaborator}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select Type Of Collaborator</option>
            <option value="Exclusive">1 - Exclusive</option>
            <option value="Exclusive">2 - Exclusive 2</option>
          </Form.Select>

          {formik.touched.typeOfCollaborator &&
          formik.errors.typeOfCollaborator ? (
            <div className="error ms-2 text-danger">
              {formik.errors.typeOfCollaborator}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">TaxStatus :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="taxStatus"
            placeholder="Enter Your TaxStatus"
            className="col-6"
            name="taxStatus"
            value={formik.values.taxStatus}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
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

          {formik.touched.taxStatus && formik.errors.taxStatus ? (
            <div className="error ms-2 text-danger">
              {formik.errors.taxStatus}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">TaxAddress :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <FloatingLabel type="text" name="taxAddress" className=" ">
            <Form.Control
              as="textarea"
              id="taxAddress"
              placeholder="Enter Your TaxAddress"
              className="col-6"
              name="taxAddress"
              value={formik.values.taxAddress}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              required
            />
          </FloatingLabel>

          {formik.touched.taxAddress && formik.errors.taxAddress ? (
            <div className="error ms-2 text-danger">
              {formik.errors.taxAddress}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">  
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Notes :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
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
              required
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
