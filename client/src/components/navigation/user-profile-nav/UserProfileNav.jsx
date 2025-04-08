import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router";
import { useUserContext } from "../../../context/userContext";

export default function UserProfile() {
    const [opened, setState] = useState(false);
    const location = useLocation();
    const {username, email} = useUserContext();

    useEffect(() => {
      setState(false);
    }, [location.pathname])

    const ShowUserProfileClickHandler = () => {
        setState(!opened)
    }
    
    return(
        <>   
        <div className="relative">

        <img id="avatarButton" type="button" className="w-10 h-10 rounded-full cursor-pointer" src="/profile-pic/user (1).png" alt="User logo" onClick={ShowUserProfileClickHandler} />

        <div id="userDropdown" className={opened ? 
  "absolute top-full left-0 right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600" : 
  "hidden"}>
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{username}</div>
      <div className="font-medium truncate">{email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <Link to="/myprofile/cart" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cart</Link>
      </li>
      <li>
        <Link to="/myprofile/orderhistory" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders history</Link>
      </li>
      <li>
        <Link to="/myprofile/favorites" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Wishlist</Link>
      </li>
    </ul>
    <div className="py-1">
      <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
    </div>
</div>
</div>



        </>
    )
}