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
            required
          />
          {formik.touched.thirdEmail && formik.errors.thirdEmail ? (
            <div className="error ms-2 text-danger">{formik.errors.thirdEmail}</div>
          ) : null}
        </div>
      </div>

{/* <div className="row d-flex p-0 m-2">
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
      </div> */}

      {/* <div className="row d-flex p-0 m-2">
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
            required
          />
          {formik.touched.secondSupervisor && formik.errors.secondSupervisor ? (
            <div className="error ms-2 text-danger">{formik.errors.secondSupervisor}</div>
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
            required
          />
          {formik.touched.supervisor && formik.errors.supervisor ? (
            <div className="error ms-2 text-danger">{formik.errors.supervisor}</div>
          ) : null}
        </div>
      </div>


      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Technician :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="technician"
            placeholder="Enter Your Technician"
            className="col-6"
            name="technician"
            value={formik.values.technician}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.technician && formik.errors.technician ? (
            <div className="error ms-2 text-danger">{formik.errors.technician}</div>
          ) : null}
        </div>
      </div>


      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Fault :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="fault"
            placeholder="Enter Your Fault"
            className="col-6"
            name="fault"
            value={formik.values.fault}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.fault && formik.errors.fault ? (
            <div className="error ms-2 text-danger">{formik.errors.fault}</div>
          ) : null}
        </div>
      </div> */}

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Timezone :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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
            <div className="error ms-2 text-danger">{formik.errors.timezone}</div>
          ) : null}
        </div>
      </div>

      {/* <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">DeviceStatus :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="deviceStatus"
            className="col-6"
            name="deviceStatus"
            value={formik.values.deviceStatus}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select DeviceStatus</option>
            <option value="1">1 - </option>
            <option value="2">2 - </option>
            <option value="3">3 - </option>
         
          </Form.Select>

          {formik.touched.deviceStatus && formik.errors.deviceStatus ? (
            <div className="error ms-2 text-danger">
              {formik.errors.deviceStatus}
            </div>
          ) : null}
        </div>
      </div> */}

      
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">ScheduleTime :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
          <Form.Control
            type="time"
            id="scheduleTime"
            className="col-6"
            name="scheduleTime"  
            value={formik.values.scheduleTime}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.scheduleTime && formik.errors.scheduleTime ? (
            <div className="error ms-2 text-danger">
              {formik.errors.scheduleTime}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">TaxAddress :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-sm-0 ms-md-5 p-0">
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


      {/* <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">ContactPerson :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="contactPerson"
            placeholder="Enter Your ontactPerson"
            className="col-6"
            name="contactPerson"
            value={formik.values.contactPerson}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.contactPerson && formik.errors.contactPerson ? (
            <div className="error ms-2 text-danger">{formik.errors.contactPerson}</div>
          ) : null}
        </div>
      </div> */}

      {/* <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Address :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
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
              required
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
          <Form.Label className="">DeviceNotes :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <FloatingLabel
            type="text"
            placeholder="DeviceNotes"
            name="deviceNotes"
            className="mb-3 "
          >
            <Form.Control
              as="textarea"
              id="deviceNotes"
              placeholder="Enter Your DeviceNotes"
              className="col-6"
              name="deviceNotes"
              value={formik.values.deviceNotes}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              required
            />
          </FloatingLabel>

          {formik.touched.deviceNotes && formik.errors.deviceNotes ? (
            <div className="error ms-2 text-danger">{formik.errors.deviceNotes}</div>
          ) : null}
        </div>
      </div> */}
      
    </div>
  );
};

export default Other;
