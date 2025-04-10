import { Navigate } from "react-router"
import { useLogout } from "../../api/authApi"


export default function Logout() {
    const {loggedOut} = useLogout();

     return loggedOut
     ? <Navigate to='/' />
     :null;
        
        
    
}