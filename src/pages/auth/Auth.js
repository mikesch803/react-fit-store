import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { LoginContext } from "../../context"

export const Auth = () => {
    const {login} = useContext(LoginContext)
    console.log('from auth ',login)
    return login ? <Outlet/> : <Navigate to='/login'/>
}