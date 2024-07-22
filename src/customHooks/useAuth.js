import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../helper/Slices/authSlice";


const useAuth = () =>{
    const dispatch =useDispatch();
    const isAuthenticated = useSelector((state) => state.authentication.isUserAuthenticated);

    const handleLogin = (token,email,username) => {
        const userDetails = {
            token :token,
            userEmail :email,
            userName : username
        }
        dispatch(login(userDetails));
    }

    const handleLogout = () =>{
        dispatch(logout());
    }

    return {isAuthenticated,login:handleLogin, logout:handleLogout}

}

export default useAuth;