import { Link } from "react-router";
import AdminNav from "./admin-nav/AdminNav";
import UserProfile from "./user-profile-nav/UserProfileNav";



export default function Navigation() {
    return(
        <>
       
        <nav className="dark:bg-gray-900  w-full bg-second border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 pl-1">
      <Link
        to="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/logo/33758770_8086852.jpg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
          Antique World
        </span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {true ? <Link
        to='/login'
          type="button"
          className="block font-medium  py-2 px-3  text-gray-900 rounded-sm hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Sign in 
        </Link>
        : <UserProfile />}
        
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mr-10  md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Products
            </Link>
          </li>
          {/* <li>
            <Link
              to="categories"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Categories
            </Link>
          </li> */}
          <li>
            <Link
              to="about-us"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact-us"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:scale-110 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact us
            </Link>
          </li>
          {false ? '' : <AdminNav />  }

        </ul>
      </div>
    </div>
    <hr />
  </nav>

        </>
    )
}