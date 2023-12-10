import { useContext, useEffect } from "react";
import { logout } from "../../../services/authService.js";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/utils.js";
import AuthContext from "../../../contexts/authContext.js";

export default function LogoutComponent(){
    const navigation = useNavigate();
    const {logoutHandler, accessToken} = useContext(AuthContext);

    useEffect(() => {
        logout(accessToken)
        .then(()=> logoutHandler())
        .catch(()=> navigation(PATHS.home))
    });
}