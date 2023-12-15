import { Form, FloatingLabel } from "react-bootstrap";

const ClientId = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">   //stepe - 2 form
      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Collaborator :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="collaborator"
            className="col-6"
            name="collaborator"
            value={formik.values.collaborator}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select Type Of Collaborator</option>
            <option value="1">Exclusive</option>
            <option value="2">Occasional</option>
          </Form.Select>

          {formik.touched.collaborator && formik.errors.collaborator ? (
            <div className="error ms-2 text-danger">
              {formik.errors.collaborator}
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
            <option value="1"> Individual</option>
            <option value="2"> Self-Employed</option>
            <option value="3"> Limited Company</option>
            <option value="4">Public Limited Company</option>
            <option value="5">General Partnership</option>
            <option value="6">Community of Property</option>
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

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">DocumentType :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="documentType"
            className="col-6"
            name="documentType"
            value={formik.values.documentType}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select DocumentType</option>
            <option value="1">NIF(Tax Id number)</option>
            <option value="2">NIE (Foreigner Identification Number)</option>
            <option value="3">CIF (Corporate Tax ID)</option>
          </Form.Select>

          {formik.touched.documentType && formik.errors.documentType ? (
            <div className="error ms-2 text-danger">
              {formik.errors.documentType}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Id Number :</Form.Label>
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

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">ThirdEmail :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="email"
            id="thirdEmail"
            placeholder="Enter Your ThirdEmail"
            className="col-6"
            name="thirdEmail"
            value={formik.values.thirdEmail}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.thirdEmail && formik.errors.thirdEmail ? (
            <div className="error ms-2 text-danger">
              {formik.errors.thirdEmail}
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

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Timezone :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="timezone"
            placeholder="Enter Your timezone"
            className="col-6"
            name="timezone"
            value={formik.values.timezone}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.timezone && formik.errors.timezone ? (
            <div className="error ms-2 text-danger">
              {formik.errors.timezone}
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
    </div>
  );
};

export default ClientId;
