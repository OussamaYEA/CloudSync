import { Outlet, Navigate } from 'react-router-dom'

function PublicRoutes() {
    let auth = {'token':localStorage.getItem("token")}
    return(
        auth.token ? <Navigate to="/"/> : < Outlet/>
    )
}

export default PublicRoutes