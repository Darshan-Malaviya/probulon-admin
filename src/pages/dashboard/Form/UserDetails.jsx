import { Form } from "react-bootstrap";
const UserDetails = ({ formik, handleChange}) => {
  return (
    <div className="ms-2">
      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">First Name :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
        <Form.Control
          type="text"
          id="firstName"
          placeholder="Enter Your First Name"
          className="col-8"
          name="firstName"
          autoFocus
          value={formik.values.firstName}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          required
        />
         {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error ms-2 text-danger">{formik.errors.firstName}</div>
        ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2">
        <div className="col-sm-12 col-md-3 p-0 ms-md-4">
          {" "}
          <Form.Label className="">Last Name :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
        <Form.Control
          type="text"
          id="lastName"
          placeholder="Enter Your Last Name"
          className="col-6"
          name="lastName"
          value={formik.values.lastName}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          required
        />
         {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error ms-2 text-danger">{formik.errors.lastName}</div>
        ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Name :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
        <Form.Control
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="col-6"
          name="name"
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
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Surname :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
        <Form.Control
          type="text"
          id="name"
          placeholder="Enter Your Surname"
          className="col-6"
          name="surname"
          value={formik.values.surname}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          required
        />
         {formik.touched.surname && formik.errors.surname ? (
          <div className="error ms-2 text-danger">{formik.errors.surname}</div>
        ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">TipoDeDocument :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
        <Form.Control
          type="text"
          id="tipoDeDocument"
          placeholder="Enter Your TipoDeDocument"
          className="col-6"
          name="tipoDeDocument"
          value={formik.values.tipoDeDocument}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          required
        />
         {formik.touched.tipoDeDocument && formik.errors.tipoDeDocument ? (
          <div className="error ms-2 text-danger">{formik.errors.tipoDeDocument}</div>
        ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">LastSurname :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
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
          <div className="error ms-2 text-danger">{formik.errors.lastSurname}</div>
        ) : null}
        </div>
      </div>

      <div className="row d-flex p-0 m-2 ">
        <div className="col-sm-12 col-md-3 ms-md-4 p-0">
          {" "}
          <Form.Label className="">Gender :</Form.Label>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
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
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
       </Form.Select>

         {formik.touched.gender && formik.errors.gender ? (
          <div className="error ms-2 text-danger">{formik.errors.gender}</div>
        ) : null}
        </div>
      </div>
      
      <div className="row d-flex p-0 m-2 ">
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
          <option value="Client">Client</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
       </Form.Select>

         {formik.touched.userType && formik.errors.userType ? (
          <div className="error ms-2 text-danger">{formik.errors.userType}</div>
        ) : null}
        </div>
      </div>
  
    </div>
  );
};

export default UserDetails;
