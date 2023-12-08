import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
   let token = localStorage.getItem("login")
    return(
        token ? <Outlet/> : <Navigate to="/"/>
    )
}
    
export default PrivateRoutes
