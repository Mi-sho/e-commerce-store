import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


export default function AuthGuard() {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        toast.info('You need to be logged in!')
        return <Navigate to='/login' />
    }

    return <Outlet />;

}