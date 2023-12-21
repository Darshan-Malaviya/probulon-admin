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
          />
          {formik.touched.technician && formik.errors.technician ? (
            <div className="error ms-2 text-danger">
              {formik.errors.technician}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
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
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">ScheduleTime :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="time"
            id="scheduleTime"
            className="col-6"
            name="scheduleTime"
            value={formik.values.scheduleTime}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.scheduleTime && formik.errors.scheduleTime ? (
            <div className="error ms-2 text-danger">
              {formik.errors.scheduleTime}
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
            placeholder="Enter Your ontactPerson"
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
            />
          </FloatingLabel>

          {formik.touched.deviceNotes && formik.errors.deviceNotes ? (
            <div className="error ms-2 text-danger">
              {formik.errors.deviceNotes}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Other;
