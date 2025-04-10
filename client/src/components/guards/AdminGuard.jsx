import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


export default function AdminGuard() {
    const {isAdmin} = useAuth();
    

    if(!isAdmin){
        toast.error('You are not authorized!')
        return <Navigate to='/' />
    }

    return <Outlet />;

}