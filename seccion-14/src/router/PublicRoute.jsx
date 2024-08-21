import { useContext } from "react"
import { AuthProvider } from "../auth"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthProvider);
  return (!logged)
    ? children
    : <Navigate to="/marvel" />
}
