import { useState } from "react";
import { FaKey } from "react-icons/fa6";
import { MdOutlineMailLock } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BiShowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import * as Yup from "yup";
import { useFormik } from "formik";
// import swal from "../../components/sweetAlert";
import api from "../../services/api";
const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("please enter your valid email")
        .required("email is required"),
      password: Yup.string().required("password is required").min(6),
    }),
    onSubmit: async (value) => {
      try {
        let response = await api.post(
          "http://79.143.90.196/api/v1/auth/login",
          {
            email: value.email,
            password: value.password,
          }
        );
        if (response.isSuccess) {
          const { token } = response.data;
          localStorage.setItem("user_token", token);
          toast.success(response.message);
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div  className="d-flex justify-content-center align-items-center  ">
      <div className="h-100 card mt-5 m-2 mb-2 p-2 bg-white rounded-5 border-1 shadow-lg login pt-5 px-3">
        <div>
          <h1 style={{color:"rgb(46, 46, 63)"}} className="text-center">Inciar Sesion</h1>
        </div>
        <div style={{backgroundColor:"rgb(46, 46, 63)"}} className="hr-bold m-2"></div>
        <div className="d-flex flex-column mt-4">
          <form onSubmit={formik.handleSubmit}>
            <label style={{color:"#32384D"}} className="fw-bold  fs-4 w-100">
              <MdOutlineMailLock style={{color:"rgb(46, 46, 63)"}}  className=" fs-2" /> Email
            </label>
            <input
              className="mt-2 rounded-4 px-3 px-border w-100 p-2"
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error ms-2 text-danger">{formik.errors.email}</div>
            ) : null}
            <label style={{color:"#32384D"}} className="mt-3 fw-bold fs-4 " id="password">
              <FaKey style={{color:"rgb(46, 46, 63)"}} className="ms-1" /> Password
            </label>
            <div className="position-relative w-100">
              <input
                className="mt-2  rounded-4 px-3 px-border w-100 p-2"
                id="password"
                placeholder="Enter Your Password"
                type={show ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error ms-2 text-danger">
                  {formik.errors.password}
                </div>
              ) : null}
              <BiShowAlt
                className="position-absolute pwd-show-btn mt-2 me-2"
                onClick={() => setShow(!show)}
              />
            </div>
            <div className="d-flex flex-column mt-5">
              <button
                style={{backgroundColor:"rgb(46, 46, 63)"}} className=" w-100 rounded-4 text-center p-2 fw-bold text-light btn shadow"
                type="submit"
              >
                Enviar  <PiPaperPlaneRightFill className="fs-5 fw-bold" /> 
              </button>
              <a href="#" className="link-primary text-center mt-2 mb-2">
                Olvide mi Contracena
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
