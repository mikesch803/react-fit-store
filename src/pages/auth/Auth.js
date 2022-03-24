import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { LoginContext } from "../../context"

export const Auth = () => {
    const {login} = useContext(LoginContext)
    return login ? <Outlet/> : <Navigate to='/login'/>
}