import { Navigate, Outlet } from "react-router-dom"
import { useLogin } from "../../context"


export const NotAuth = () => {
    const {login} = useLogin()
    console.log(login)
    return !login ? <Outlet/>:<Navigate to='/'/>
}