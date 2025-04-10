import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


export default function GuestGuard() {
    const {isAuthenticated} = useAuth();

    if(isAuthenticated){
        
        return <Navigate to='/'/>
    };

    return <Outlet />
}