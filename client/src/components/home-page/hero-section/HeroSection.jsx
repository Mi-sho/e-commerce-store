import { Link } from "react-router";

export default function HeroSection() {
    return (
        <section className="h-130 bg-center bg-no-repeat bg-[url(/images/imad-alassiry-GeqhIp6D84s-unsplash.jpg)] bg-gray-700 bg-blend-multiply mt-3 rounded-xl">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Where History Finds New Life
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            At Antique World, we bridge centuries by curating exceptional pieces that carry the legacy of master craftsmanship. Each item in our collection whispers stories of eras past, waiting to become part of your modern narrative.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link
                to="/catalog"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-hero hover:scale-[1.08]"
              >
                Explore Treasure
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <Link
                to="/about-us"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      )
    }
      