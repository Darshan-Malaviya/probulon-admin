import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import PrivateRoutes from "./pages/PrivateRoutes";
function App() {

  return (
    <>
          <ToastContainer position="top-right" autoClose={1000} />
    <Routes>
      <Route path="/login" element={ <Login /> }/>
      <Route element={<PrivateRoutes />}>
      <Route path="/dashboard/*" element={ <Dashboard /> }/> 
      </Route>
    </Routes>
    </>
  )
}

export default App
