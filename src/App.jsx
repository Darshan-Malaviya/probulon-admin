import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/dashboard/*" element={ <Dashboard /> }/> 
    </Routes>
    </>
  )
}

export default App
