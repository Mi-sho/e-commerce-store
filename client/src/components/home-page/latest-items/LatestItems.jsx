import { Link } from "react-router";

export default function LatestItems() {
    return(
        <>
        <div className="relative w-full p-6 mx-auto overflow-hidden  rounded-xl mt-3">
            <div className="flex flex-row justify-between ">
            <Link to="/catalog" className="self-center cursor-pointer underline"> View All Items</Link>
            <h2 className="p-3 pb-0 text-xl font-bold self-end order-first">Newest items</h2>
            </div>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${0 * 100}%)` }}>
        {/* {items.map((item, index) => ( */}
       
  <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
      <img
        className="h-48 w-96 object-cover rounded-t-lg"
        src="/tempPics/alexandre-valdivia-8hILOCKw5yA-unsplash.jpg"
        alt="product image"
      />
    </Link>
    <div className="px-5 pb-5">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </Link>
      <div className="flex items-center mt-2.5 mb-5">
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <Link
          to="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link>
      </div>
    </div>
  </div>
  <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
      <img
        className="h-48 w-96 object-cover rounded-t-lg"
        src="/tempPics/antique-440337_1920.jpg"
        alt="product image"
      />
    </Link>
    <div className="px-5 pb-5">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </Link>
      <div className="flex items-center mt-2.5 mb-5">
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <Link
          to="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link>
      </div>
    </div>
  </div>
  <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
      <img
        className="h-48 w-96 object-cover rounded-t-lg"
        src="/tempPics/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg"
        alt="product image"
      />
    </Link>
    <div className="px-5 pb-5">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </Link>
      <div className="flex items-center mt-2.5 mb-5">
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <Link
          to="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link>
      </div>
    </div>
  </div> 
  <div className=" sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
      <img
        className="h-48 w-96 object-cover rounded-t-lg"
        src="/tempPics/eric-park-QbX8A8eHfzw-unsplash.jpg"
        alt="product image"
      />
    </Link>
    <div className="px-5 pb-5">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </Link>
      <div className="flex items-center mt-2.5 mb-5">
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <Link
          to="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </Link>
      </div>
    </div>
  </div>
        {/* ))} */}
      </div>

      {/* Navigation Buttons */}
      <button  className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded cursor-pointer">❮</button>
      <button  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded">❯</button>
    </div>
        </>
    )
}