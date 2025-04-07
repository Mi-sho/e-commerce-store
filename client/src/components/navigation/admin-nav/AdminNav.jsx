import { Link } from "react-router";
import { initDropdowns } from "flowbite";
import { useEffect } from "react";

export default function AdminNav() {

  useEffect(() =>{
    initDropdowns()
  } ,[])
    return(
        <>
      <button
      id="dropdownDefaultButton"
     
      data-dropdown-toggle="dropdownId"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Admin panel{" "}
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    {/* Dropdown menu */}
    <div
      id="dropdownId"
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <Link
            to="/admin/create"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Create Item
          </Link>
        </li>
        <li>
          <Link
            to="/admin/write-article"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
          >
            Write Article
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Order History
          </a>
        </li>
        {/* <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Sign out
          </a>
        </li> */}
      </ul>
    </div>
  </>
        
    )
}