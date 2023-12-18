import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../utils/utils.js";

export default function AuthGuard(){
    const {isAuthenticated} = useContext(AuthContext);

    if(!isAuthenticated){
        return <Navigate to={PATHS.login}/>
    }

    return <Outlet/>;
}