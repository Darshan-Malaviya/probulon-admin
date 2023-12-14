import { Form } from "react-bootstrap";
const UserDetails = ({ formik, handleChange }) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className=""> Name :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
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
            required
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error ms-2 text-danger">{formik.errors.name}</div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Surname :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Control
            type="text"
            id="surname"
            placeholder="Enter Your Surname"
            className="col-6"
            name="surname"
            value={formik.values.surname}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div className="error ms-2 text-danger">
              {formik.errors.surname}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">LastSurname :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Control
            type="text"
            id="lastSurname"
            placeholder="Enter Your Last Surname"
            className="col-6"
            name="lastSurname"
            value={formik.values.lastSurname}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.lastSurname && formik.errors.lastSurname ? (
            <div className="error ms-2 text-danger">
              {formik.errors.lastSurname}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Mobile :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Control
            type="text"
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
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">secondaryMobile:</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Control
            type="text"
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
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Email :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="col-6"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
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
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Control
            type="email"
            id="secondaryEmail"
            placeholder="Enter Your SecondaryEmail"
            className="col-6"
            name="secondaryEmail"
            value={formik.values.secondaryEmail}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
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
          <Form.Label>Password :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6  col-lg-7 ms-5 p-0">
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter Your Password"
            className="col-6"
            name="password"
            value={formik.values.password}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error ms-2 text-danger">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
      </div>

      {/* <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">DeviceId :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Control
            type="text"
            id="deviceId"
            placeholder="Enter Your DeviceId"
            className="col-6"
            name="deviceId"
            value={formik.values.deviceId}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.deviceId && formik.errors.deviceId ? (
            <div className="error ms-2 text-danger">
              {formik.errors.deviceId}
            </div>
          ) : null}
        </div>
      </div> */}

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-1 p-0">
          {" "}
          <Form.Label className="">Gender :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 ms-5 p-0">
          <Form.Select
            type="text"
            id="gender"
            placeholder="Enter Your Surname"
            className="col-6"
            name="gender"
            value={formik.values.gender}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </Form.Select>

          {formik.touched.gender && formik.errors.gender ? (
            <div className="error ms-2 text-danger">{formik.errors.gender}</div>
          ) : null}
        </div>
      </div>

      {/* <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">UserType :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <Form.Select
            type="text"
            id="userType"
            placeholder="Enter Your Surname"
            className="col-6"
            name="userType"
            value={formik.values.userType}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value="">Select UserType</option>
            <option value="1">Client</option>
            <option value="2">User</option>
            <option value="3">Admin</option>
          </Form.Select>

          {formik.touched.userType && formik.errors.userType ? (
            <div className="error ms-2 text-danger">
              {formik.errors.userType}
            </div>
          ) : null}
        </div>
      </div> */}
    </div>
  );
};

export default UserDetails;
