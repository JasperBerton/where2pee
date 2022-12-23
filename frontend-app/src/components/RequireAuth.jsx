import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import Loading from "./Loading";

export default function RequireAuth({children})
{
  const {isAuthenticated, isLoading} = useAuth0();

  if(isLoading){
    return <Loading/>
  }

  if(isAuthenticated){
    return children
  }

  return <Navigate to="/"></Navigate>
}