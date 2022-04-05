import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { LoginContext } from "../../context"

export const NotAuth = () => {
    const {login} = useContext(LoginContext)
    console.log(login)
    return !login ? <Outlet/>:<Navigate to='/'/>
}