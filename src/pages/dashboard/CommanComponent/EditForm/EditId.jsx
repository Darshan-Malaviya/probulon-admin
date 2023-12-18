import { Form } from "react-bootstrap";

const Editid = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">

{/* <div className="row d-flex p-0 m-2 ">
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
            <option value="1">Supervisor</option>
            <option value="2">Salesperson</option>
            <option value="3">Administration</option>
            <option value="4">Technician</option>
          </Form.Select>

          {formik.touched.position && formik.errors.position ? (
            <div className="error ms-2 text-danger">
              {formik.errors.position}
            </div>
          ) : null}
        </div>
      </div> */}

<div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Collaborator :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
            <option value="1">1 - Exclusive</option>
            <option value="2">2 - Exclusive 2</option>
          </Form.Select>

          {formik.touched.collaborator &&
          formik.errors.collaborator ? (
            <div className="error ms-2 text-danger">
              {formik.errors.collaborator}
            </div>
          ) : null}
        </div>
      </div>

  {/* <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Client Id :</Form.Label>
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
      </div> */}

 <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">TaxStatus :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
            <option value="1">1 - Individual</option>
            <option value="2">2 - Self-Employed</option>
            <option value="3">3 - Limited Company</option>
            <option value="4">
              4 - Public Limited Company
            </option>
            <option value="5">5 - GeneralPartnership</option>
            <option value="6">
              6 - Community of Property
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
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">PostalCode :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Country :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Town :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Start Date :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="date"
            id="startDate"
            className="col-6"
            name="startDate"  
            value={formik.values.startDate}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <div className="error ms-2 text-danger">
              {formik.errors.startDate}
            </div>
          ) : null}
        </div>
      </div>

      {/* <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Tarminaion Date :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="date"
            id="tarminationDate"
            className="col-6"
            name="tarminationDate"  
            value={formik.values.tarminationDate}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.tarminationDate && formik.errors.tarminationDate ? (
            <div className="error ms-2 text-danger">
              {formik.errors.tarminationDate}
            </div>
          ) : null}
        </div>
      </div> */}

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">DocumentType :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
            <option value="2">NIE</option>
          </Form.Select>

          {formik.touched.documentType && formik.errors.documentType ? (
            <div className="error ms-2 text-danger">
              {formik.errors.documentType}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Id Number :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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

    </div>
  );
};

export default Editid;
