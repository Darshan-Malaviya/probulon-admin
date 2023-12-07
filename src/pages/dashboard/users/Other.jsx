
import {
    Form,
    FloatingLabel,
  } from "react-bootstrap";
const Other = ({formik,handleChange}) => {

  return (
    <div className="ms-5">
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Province :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter Province"
          name="province"
          value={formik.values.province}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
 {formik.touched.province && formik.errors.province ? (
          <div className="error text-danger">{formik.errors.province}</div>
        ) : null}      </Form.Group>
      
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Mobile :</Form.Label>
        <Form.Control
          className="w-25"
          type="number"
          placeholder="Enter Mobile No"
          name="mobile"
          value={formik.values.mobile}
          onChange={handleChange}
          onBlur={formik.handleBlur}

        />
 {formik.touched.mobile && formik.errors.mobile ? (
          <div className="error text-danger">{formik.errors.mobile}</div>
        ) : null}      </Form.Group>
      
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Secondary Mobile :</Form.Label>
        <Form.Control
          className="w-25"
          type="number"
          placeholder="Enter SecondaryMobile"
          name="secondaryMobile"
          value={formik.values.secondaryMobile}
          onChange={handleChange}
          onBlur={formik.handleBlur}

        />
 {formik.touched.secondaryMobile && formik.errors.secondaryMobile ? (
          <div className="error text-danger">{formik.errors.secondaryMobile}</div>
        ) : null}      </Form.Group>
      
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Id Number :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter IdNumber No"
          name="idNumber"
          value={formik.values.idNumber}
          onChange={handleChange}
          onBlur={formik.handleBlur}

        />
 {formik.touched.idNumber && formik.errors.idNumber ? (
          <div className="error text-danger">{formik.errors.idNumber}</div>
        ) : null}      </Form.Group>
      
      <Form.Group
      
        className="d-flex flex-row m-2"
      >
        <Form.Label className="col-3">Type Of Collaborator :</Form.Label>
        <Form.Select
          name="typeOfCollaborator"
          className="w-25"
          value={formik.values.typeOfCollaborator}
          onChange={handleChange}
          onBlur={formik.handleBlur}

        >
          <option value="">Select Type Of Collaborator</option>
          <option value="Exclusive">1 - Exclusive</option>
          <option value="Exclusive">2 - Exclusive 2</option>
        </Form.Select>
        {formik.touched.typeOfCollaborator && formik.errors.typeOfCollaborator ? (
          <div className="error text-danger">{formik.errors.typeOfCollaborator}</div>
        ) : null}      </Form.Group>
      
      <Form.Group className="d-flex flex-row m-2">
        <Form.Label className="col-3">Tax Status :</Form.Label>
        <Form.Select
          name="taxStatus"
          className="w-25"
          value={formik.values.taxStatus}
          onChange={handleChange}
          onBlur={formik.handleBlur}

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
          <div className="error text-danger">{formik.errors.taxStatus}</div>
        ) : null}      </Form.Group>
      
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Tax Address :</Form.Label>
        <FloatingLabel type="text" name="taxAddress" className="mb-3 w-25">
          <Form.Control
            as="textarea"
            name="taxAddress"
            value={formik.values.taxAddress}
            onChange={handleChange}
            onBlur={formik.handleBlur}

            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        {formik.touched.taxAddress && formik.errors.taxAddress ? (
          <div className="error text-danger">{formik.errors.taxAddress}</div>
        ) : null}      </Form.Group>
      
      <Form.Group  className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Notes :</Form.Label>
        <FloatingLabel
          placeholder="Notes"
          type="text"
          name="notes"
          className="mb-3 w-25"
        >
          <Form.Control
            as="textarea"
            name="notes"
            value={formik.values.notes}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        {formik.touched.notes && formik.errors.notes ? (
          <div className="error  text-danger">{formik.errors.notes}</div>
        ) : null}      </Form.Group>
      
    </div>
  );
};

export default Other;