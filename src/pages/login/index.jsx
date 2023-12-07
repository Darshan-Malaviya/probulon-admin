import { useState } from "react";
import { FaKey } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BiShowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { useFormik } from "formik";
import swal from "../../components/sweetAlert";
import api from "../../services/api";
const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "", password: ""
  // })

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
      console.log(value);
      try {
        let response = await api.post(
          "http://79.143.90.196/api/v1/auth/login",
          {
            email: value.email,
            password: value.password,
          }
        );
        console.log(response);
        if (response.isSuccess) {
          const { token } = response.data;

          localStorage.setItem("login", token);

          swal.success(response.message);
          navigate("/dashboard");
        } else {
          console.log("User authentication failed.");
          swal.error(data.message);
        }
      } catch (error) {
        console.log("user is not valid");
        console.error(error);
      }
    },
  });

  // async function handleLogin () {
  //      const data = await api.post('/auth/login', formData)
  //     if(data.isSuccess) return swal.success(data.message)
  //     else swal.error(data.message)
  // }

  return (
    <div className="d-flex justify-content-center align-items-end">
      <div className="h-100 card mt-5 m-2 mb-2 p-2 login-shadow rounded-5 login pt-5 px-3">
        <div>
          <h1 className="text-center">Inciar Sesion</h1>
        </div>
        <div className="hr-bold m-2 bg-black"></div>
        <div className="d-flex flex-column mt-5">
          <form onSubmit={formik.handleSubmit}>
            <label className="fw-bold fs-4 w-100">
              <MdOutlineAlternateEmail /> Email
            </label>
            <input
              className="mt-2 rounded-4 px-3 px-border w-100"
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error text-danger">{formik.errors.email}</div>
            ) : null}
            <label className="mt-5 fw-bold fs-4" id="password">
              <FaKey /> Password
            </label>
            <div className="position-relative w-100">
              <input
                className="mt-2  rounded-4 px-3 px-border w-100"
                id="password"
                type={show ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error text-danger">
                  {formik.errors.password}
                </div>
              ) : null}
              <BiShowAlt
                className="position-absolute pwd-show-btn"
                onClick={() => setShow(!show)}
              />
            </div>
            <div className="d-flex flex-column mt-5">
              <button
                className="bg-danger w-100 rounded-5 text-center p-1 text-light btn"
                type="submit"
              >
                <PiPaperPlaneRightFill /> enviar
              </button>
              <a href="#" className="link-danger text-center mt-2">
                Olvide mi contracena
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
