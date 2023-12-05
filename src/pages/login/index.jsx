import {  useState } from "react";
import { FaKey } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BiShowAlt } from "react-icons/bi";

import swal from "../../components/sweetAlert";
import api from "../../services/api";
const Login = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
      email: "", password: ""
  })

  async function handleLogin () {
      const data = await api.post('/auth/login', formData)
      if(data.isSuccess) return swal.success(data.message)
      else swal.error(data.message)
  }

  return (
    <div className="d-flex justify-content-center align-items-end">
      <div className="h-100 card mt-5 m-2 mb-2 p-2 login-shadow rounded-5 login pt-5 px-3">
        <div>
          <h1 className="text-center">Inciar Sesion</h1>
        </div>
        <div className="hr-bold m-2 bg-black"></div>
        <div className="d-flex flex-column mt-5">
          <label className="fw-bold fs-4">
            <MdOutlineAlternateEmail /> Email
          </label>
          <input className="mt-2 rounded-4 px-3 px-border" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value })}/>
          <label className="mt-5 fw-bold fs-4">
            <FaKey /> Password
          </label>
          <div className="position-relative w-100">
            <input className="mt-2  rounded-4 px-3 px-border w-100" type={show ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value })}/>
            <BiShowAlt className="position-absolute pwd-show-btn" onClick={() => setShow(!show)}/>
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          <div className="bg-danger w-100 rounded-5 text-center p-1 text-light btn" onClick={handleLogin}>
          <PiPaperPlaneRightFill /> enviar
          </div>
          <a href="#" className="link-danger text-center mt-2">
            Olvide mi contracena
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
