
import {
    Form,
    FloatingLabel,
  } from "react-bootstrap";
const Other = ({formik,handleChange}) => {
    //form error validation fun..
const  renderError2 = (field) =>
formik.errors[field] ? (
  <div className="error ms-2 text-danger">{formik.errors[field]}</div>
) : null;
  return (
    <div className="ms-5">
      <Form.Group controlId="province" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Province :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter Province"
          name="province"
          value={formik.province}
          onChange={handleChange}
        />
        {renderError2("province")}
      </Form.Group>
      
      <Form.Group controlId="mobile" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Mobile :</Form.Label>
        <Form.Control
          className="w-25"
          type="number"
          placeholder="Enter Mobile No"
          name="mobile"
          value={formik.mobile}
          onChange={handleChange}
        />
        {renderError2("mobile")}
      </Form.Group>
      
      <Form.Group controlId="secondaryMobile" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Secondary Mobile :</Form.Label>
        <Form.Control
          className="w-25"
          type="number"
          placeholder="Enter SecondaryMobile"
          name="secondaryMobile"
          value={formik.secondaryMobile}
          onChange={handleChange}
        />
        {renderError2("secondaryMobile")}
      </Form.Group>
      
      <Form.Group controlId="idNumber" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Id Number :</Form.Label>
        <Form.Control
          className="w-25"
          type="text"
          placeholder="Enter IdNumber No"
          name="idNumber"
          value={formik.idNumber}
          onChange={handleChange}
        />
        {renderError2("idNumber")}
      </Form.Group>
      
      <Form.Group
        controlId="typeOfCollaborator"
        className="d-flex flex-row m-2"
      >
        <Form.Label className="col-3">Type Of Collaborator :</Form.Label>
        <Form.Select
          name="typeOfCollaborator"
          className="w-25"
          value={formik.typeOfCollaborator}
          onChange={handleChange}
        >
          <option value="">Select Type Of Collaborator</option>
          <option value="Exclusive">1 - Exclusive</option>
          <option value="Exclusive">2 - Exclusive 2</option>
        </Form.Select>
        {renderError2("typeOfCollaborator")}
      </Form.Group>
      
      <Form.Group controlId="taxStatus" className="d-flex flex-row m-2">
        <Form.Label className="col-3">Tax Status :</Form.Label>
        <Form.Select
          name="taxStatus"
          className="w-25"
          value={formik.taxStatus}
          onChange={handleChange}
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
        {renderError2("taxStatus")}
      </Form.Group>
      
      <Form.Group controlId="taxAddress" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Tax Address :</Form.Label>
        <FloatingLabel type="text" name="taxAddress" className="mb-3 w-25">
          <Form.Control
            as="textarea"
            name="taxAddress"
            value={formik.taxAddress}
            onChange={handleChange}
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        {renderError2("taxAddress")}
      </Form.Group>
      
      <Form.Group controlId="notes" className="d-flex flex-row m-2">
        <Form.Label className="col-3 w-25">Notes :</Form.Label>
        <FloatingLabel
          controlId="notes"
          placeholder="Notes"
          type="text"
          name="notes"
          className="mb-3 w-25"
        >
          <Form.Control
            as="textarea"
            name="notes"
            value={formik.notes}
            onChange={handleChange}
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        {renderError2("notes")}
      </Form.Group>
      
    </div>
  );
};

export default Other;