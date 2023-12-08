import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import PrivateRoutes from "./pages/PrivateRoutes";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route element={<PrivateRoutes />}>
      <Route path="/dashboard/*" element={ <Dashboard /> }/> 
      </Route>
    </Routes>
    </>
  )
}

export default App
